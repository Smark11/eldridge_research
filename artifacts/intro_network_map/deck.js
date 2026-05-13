(function () {
  let visRetries = 0;
  function init() {
    if (typeof vis === 'undefined' || !vis.Network) {
      visRetries++;
      if (visRetries > 100) {
        const c = document.getElementById('network');
        if (c) c.innerHTML = '<div style="padding:2rem;font-family:Georgia,serif;color:#b04848;"><strong>vis-network library failed to load.</strong> Check your internet connection — this page loads <code>vis-network</code> from a CDN.</div>';
        return;
      }
      return setTimeout(init, 50);
    }

    const data = window.NETWORK_DATA;
    const container = document.getElementById('network');
    if (!container) {
      console.error('Network container element not found');
      return;
    }
    if (!data) {
      container.innerHTML = '<div style="padding:2rem;font-family:Georgia,serif;color:#b04848;"><strong>Network data not loaded.</strong> Ensure <code>network_data.js</code> is present alongside <code>index.html</code> and reloaded.</div>';
      return;
    }

    try {
      buildNetwork(data, container);
    } catch (err) {
      console.error('Network render error:', err);
      container.innerHTML = '<div style="padding:2rem;font-family:Georgia,serif;color:#b04848;"><strong>Render error:</strong> ' + (err && err.message ? err.message : String(err)) + '<br><small>See browser console for details.</small></div>';
    }
  }

  function buildNetwork(data, container) {

    const COLORS = {
      candidate: '#1a4d7a',
      nuvance_anchor: '#4a7c59',
      connector: '#c89055',
      external_anchor: '#8e8b86',
      avoid: '#b04848'
    };

    // Build node DataSet
    const nodes = new vis.DataSet(data.nodes.map(n => {
      const isAvoid = n.id.startsWith('avoid_');
      const base = isAvoid ? COLORS.avoid : (COLORS[n.type] || COLORS.connector);
      let label = n.name;
      if (n.type === 'candidate' && n.rank) {
        label = '#' + n.rank + '\n' + n.name;
      }
      const size = n.type === 'candidate' ? 28 : n.type === 'nuvance_anchor' ? 20 : n.type === 'external_anchor' ? 16 : 18;
      return {
        id: n.id,
        label: label,
        title: buildTooltip(n),
        shape: n.type === 'external_anchor' ? 'box' : 'dot',
        size: size,
        color: {
          background: base,
          border: shadeColor(base, -20),
          highlight: { background: shadeColor(base, 15), border: shadeColor(base, -30) }
        },
        font: {
          color: n.type === 'external_anchor' ? '#1a1f2e' : '#ffffff',
          size: n.type === 'candidate' ? 14 : 12,
          face: 'Helvetica Neue, Arial',
          strokeWidth: 0
        },
        borderWidth: 1.5,
        nodeType: n.type
      };
    }));

    // Build edge DataSet (every edge gets an explicit id so updates work)
    const widthByStrength = { strong: 3.5, medium: 2.2, weak: 1.4, avoid: 2.5 };
    const colorByStrength = {
      strong: '#1a1f2e',
      medium: '#6b6357',
      weak: '#9b9385',
      avoid: COLORS.avoid
    };

    const edges = new vis.DataSet(data.edges.map((e, i) => ({
      id: 'e' + i,
      from: e.source,
      to: e.target,
      width: widthByStrength[e.strength] || 1.5,
      color: { color: colorByStrength[e.strength] || '#888888', highlight: '#1a1f2e' },
      dashes: e.strength === 'avoid' ? [6, 4] : false,
      title: '<b>' + e.type.replace(/_/g, ' ') + '</b><br>Strength: ' + e.strength + '<br>' + (e.evidence || ''),
      smooth: { type: 'continuous' },
      arrows: { to: { enabled: e.type !== 'institutional_team' && e.strength !== 'avoid', scaleFactor: 0.45 } },
      edgeStrength: e.strength
    })));

    const network = new vis.Network(container, { nodes: nodes, edges: edges }, {
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -8000,
          centralGravity: 0.15,
          springLength: 160,
          springConstant: 0.03,
          avoidOverlap: 0.5
        },
        stabilization: { iterations: 300 }
      },
      interaction: {
        hover: true,
        tooltipDelay: 250,
        navigationButtons: false
      },
      nodes: { shadow: false },
      edges: { selectionWidth: 0 }
    });

    // Stop physics after stabilization for snappier interaction
    network.once('stabilizationIterationsDone', function () {
      network.setOptions({ physics: { enabled: false } });
    });

    // Detail panel on node click
    const detailPanel = document.getElementById('detail-panel');
    const detailContent = document.getElementById('detail-content');
    document.getElementById('detail-close').addEventListener('click', function () {
      detailPanel.classList.add('detail-hidden');
      network.unselectAll();
    });

    network.on('click', function (params) {
      if (params.nodes.length === 0) {
        detailPanel.classList.add('detail-hidden');
        return;
      }
      const id = params.nodes[0];
      const node = data.nodes.find(function (n) { return n.id === id; });
      if (!node) return;
      detailContent.innerHTML = renderNodeDetail(node);
      detailPanel.classList.remove('detail-hidden');
    });

    // Filters for node types
    const filterMap = {
      'filter-candidates': 'candidate',
      'filter-anchors': 'nuvance_anchor',
      'filter-connectors': 'connector',
      'filter-external': 'external_anchor'
    };

    Object.keys(filterMap).forEach(function (id) {
      const type = filterMap[id];
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('change', function (e) {
        const visible = e.target.checked;
        const ids = nodes.get().filter(function (n) { return n.nodeType === type; }).map(function (n) { return { id: n.id, hidden: !visible }; });
        nodes.update(ids);
      });
    });

    // Filter for "avoid" edges
    const avoidEl = document.getElementById('filter-avoid');
    if (avoidEl) {
      avoidEl.addEventListener('change', function (e) {
        const visible = e.target.checked;
        const updates = edges.get().filter(function (ed) { return ed.edgeStrength === 'avoid'; }).map(function (ed) { return { id: ed.id, hidden: !visible }; });
        edges.update(updates);
      });
    }
  }

  function buildTooltip(n) {
    const lines = ['<b>' + n.name + '</b>'];
    if (n.rank) lines.push('Rank #' + n.rank);
    if (n.tier) lines.push('Tier: ' + n.tier);
    if (n.wealth) lines.push('Wealth: ' + n.wealth);
    if (n.town) lines.push('Location: ' + n.town);
    if (n.role) lines.push('Role: ' + n.role);
    if (n.org) lines.push(n.org);
    if (n.notes) lines.push('<i>' + n.notes + '</i>');
    return lines.join('<br>');
  }

  function renderNodeDetail(n) {
    let html = '<span class="badge">' + n.type.replace(/_/g, ' ') + '</span><h2>' + n.name + '</h2><dl>';
    if (n.rank) html += '<dt>Rank</dt><dd>#' + n.rank + '</dd>';
    if (n.tier) html += '<dt>Tier</dt><dd>' + n.tier + '</dd>';
    if (n.wealth) html += '<dt>Wealth estimate</dt><dd>' + n.wealth + '</dd>';
    if (n.town) html += '<dt>Location</dt><dd>' + n.town + '</dd>';
    if (n.role) html += '<dt>Role</dt><dd>' + n.role + '</dd>';
    if (n.org) html += '<dt>Org / affiliation</dt><dd>' + n.org + '</dd>';
    if (n.notes) html += '<dt>Notes</dt><dd>' + n.notes + '</dd>';
    html += '</dl>';
    if (n.dossier) {
      html += '<a class="dossier-link" href="../../' + n.dossier + '">Open dossier</a>';
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
