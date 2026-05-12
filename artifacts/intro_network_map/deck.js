(async function () {
  const response = await fetch('network_data.json');
  const data = await response.json();

  const COLORS = {
    candidate: '#1a4d7a',
    candidate_2: '#2e6ca0',
    nuvance_anchor: '#4a7c59',
    connector: '#c89055',
    external_anchor: '#8e8b86',
    avoid: '#b04848'
  };

  const nodes = data.nodes.map(n => {
    const isAvoid = n.id.startsWith('avoid_');
    const base = isAvoid ? COLORS.avoid : COLORS[n.type] || COLORS.connector;
    let label = n.name;
    if (n.type === 'candidate' && n.rank) {
      label = `#${n.rank}\n${n.name}`;
    }
    const size = n.type === 'candidate' ? 28 : n.type === 'nuvance_anchor' ? 20 : n.type === 'external_anchor' ? 16 : 18;
    return {
      id: n.id,
      label,
      title: buildTooltip(n),
      shape: n.type === 'external_anchor' ? 'box' : 'dot',
      size,
      color: { background: base, border: shadeColor(base, -20), highlight: { background: shadeColor(base, 15), border: shadeColor(base, -30) } },
      font: { color: n.type === 'external_anchor' ? '#1a1f2e' : '#ffffff', size: n.type === 'candidate' ? 14 : 12, face: 'Helvetica Neue, Arial', strokeWidth: 0 },
      borderWidth: 1.5,
      raw: n
    };
  });

  const edges = data.edges.map(e => {
    const widthByStrength = { strong: 3, medium: 1.8, weak: 1, avoid: 2 };
    const colorByStrength = {
      strong: '#1a1f2e',
      medium: '#8b8478',
      weak: '#cfcabf',
      avoid: COLORS.avoid
    };
    const dashes = e.strength === 'avoid' ? [6, 4] : false;
    return {
      from: e.source,
      to: e.target,
      width: widthByStrength[e.strength] || 1,
      color: { color: colorByStrength[e.strength] || '#888888', highlight: '#1a1f2e' },
      dashes,
      title: `<b>${e.type.replace(/_/g, ' ')}</b><br>Strength: ${e.strength}<br>${e.evidence || ''}`,
      smooth: { type: 'continuous' },
      arrows: { to: { enabled: e.type !== 'institutional_team' && e.strength !== 'avoid', scaleFactor: 0.4 } },
      raw: e
    };
  });

  const container = document.getElementById('network');
  const network = new vis.Network(container, { nodes, edges }, {
    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -8000,
        centralGravity: 0.15,
        springLength: 160,
        springConstant: 0.03,
        avoidOverlap: 0.5
      },
      stabilization: { iterations: 250 }
    },
    interaction: {
      hover: true,
      tooltipDelay: 250,
      navigationButtons: false
    },
    nodes: { shadow: false },
    edges: { selectionWidth: 0 }
  });

  const detailPanel = document.getElementById('detail-panel');
  const detailContent = document.getElementById('detail-content');
  document.getElementById('detail-close').addEventListener('click', () => {
    detailPanel.classList.add('detail-hidden');
    network.unselectAll();
  });

  network.on('click', params => {
    if (params.nodes.length === 0) {
      detailPanel.classList.add('detail-hidden');
      return;
    }
    const id = params.nodes[0];
    const node = data.nodes.find(n => n.id === id);
    if (!node) return;
    detailContent.innerHTML = renderNodeDetail(node);
    detailPanel.classList.remove('detail-hidden');
  });

  // Filters
  const filterMap = {
    'filter-candidates': 'candidate',
    'filter-anchors': 'nuvance_anchor',
    'filter-connectors': 'connector',
    'filter-external': 'external_anchor'
  };

  Object.entries(filterMap).forEach(([id, type]) => {
    document.getElementById(id).addEventListener('change', e => {
      const visible = e.target.checked;
      const updates = nodes.filter(n => n.raw.type === type).map(n => ({ id: n.id, hidden: !visible }));
      network.body.data.nodes.update(updates);
    });
  });

  document.getElementById('filter-avoid').addEventListener('change', e => {
    const visible = e.target.checked;
    const updates = edges.filter(eAvoid => eAvoid.raw.strength === 'avoid').map(eAvoid => ({
      id: network.body.data.edges.getIds().find(idx => {
        const ed = network.body.data.edges.get(idx);
        return ed.from === eAvoid.from && ed.to === eAvoid.to;
      }),
      hidden: !visible
    })).filter(u => u.id);
    network.body.data.edges.update(updates);
  });

  function buildTooltip(n) {
    const lines = [];
    lines.push(`<b>${n.name}</b>`);
    if (n.rank) lines.push(`Rank #${n.rank}`);
    if (n.tier) lines.push(`Tier: ${n.tier}`);
    if (n.wealth) lines.push(`Wealth: ${n.wealth}`);
    if (n.town) lines.push(`Location: ${n.town}`);
    if (n.role) lines.push(`Role: ${n.role}`);
    if (n.org) lines.push(`${n.org}`);
    if (n.notes) lines.push(`<i>${n.notes}</i>`);
    return lines.join('<br>');
  }

  function renderNodeDetail(n) {
    let html = `<span class="badge">${n.type.replace(/_/g, ' ')}</span><h2>${n.name}</h2>`;
    html += '<dl>';
    if (n.rank) html += `<dt>Rank</dt><dd>#${n.rank}</dd>`;
    if (n.tier) html += `<dt>Tier</dt><dd>${n.tier}</dd>`;
    if (n.wealth) html += `<dt>Wealth estimate</dt><dd>${n.wealth}</dd>`;
    if (n.town) html += `<dt>Location</dt><dd>${n.town}</dd>`;
    if (n.role) html += `<dt>Role</dt><dd>${n.role}</dd>`;
    if (n.org) html += `<dt>Org / affiliation</dt><dd>${n.org}</dd>`;
    if (n.notes) html += `<dt>Notes</dt><dd>${n.notes}</dd>`;
    html += '</dl>';
    if (n.dossier) {
      html += `<a class="dossier-link" href="../../${n.dossier}">Open dossier</a>`;
    }
    return html;
  }

  function shadeColor(hex, percent) {
    const num = parseInt(hex.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const r = Math.max(0, Math.min(255, (num >> 16) + amt));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amt));
    const b = Math.max(0, Math.min(255, (num & 0xff) + amt));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
})();
