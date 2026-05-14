#!/usr/bin/env node
// ════════════════════════════════════════════════════════════════════════════════════
// Build HTML pages for every markdown artifact in the package.
// Wraps each in the editorial template, links to the shared artifact.css.
// ════════════════════════════════════════════════════════════════════════════════════

import { marked } from '/tmp/md-convert/node_modules/marked/lib/marked.esm.js';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_DIR = join(REPO, 'artifacts/site');

// Configure marked for GFM (tables) + smart punctuation
marked.setOptions({
  gfm: true,
  breaks: false,
  pedantic: false,
});

// ─── File list: every markdown artifact to convert ───
const FILES = [
  // Headlines & synthesis
  { md: 'artifacts/executive_summary.md',                            num: 'N.001', tag: 'overview' },
  { md: 'artifacts/playbook.md',                                     num: 'N.006', tag: 'playbook' },
  { md: 'artifacts/ranked_short_list.md',                            num: 'N.007', tag: 'short list' },
  { md: 'artifacts/cross_reference_matrix.md',                       num: 'N.008', tag: 'matrix' },
  { md: 'research/phase_4_benchmarking/benchmarking_memo.md',        num: 'N.009', tag: 'memo' },
  { md: 'research/phase_0_institutional_context/case_for_support_audit.md', num: 'N.010', tag: 'audit' },

  // Dossiers
  { md: 'dossiers/01_bauer.md',          num: 'N.011', tag: 'dossier · rank 1' },
  { md: 'dossiers/02_dyson.md',          num: 'N.012', tag: 'dossier · rank 2' },
  { md: 'dossiers/03_dalio.md',          num: 'N.013', tag: 'dossier · rank 3' },
  { md: 'dossiers/04_whittingham.md',    num: 'N.014', tag: 'dossier · rank 4' },
  { md: 'dossiers/05_rees.md',           num: 'N.015', tag: 'dossier · rank 5' },
  { md: 'dossiers/06_goldman_fowler.md', num: 'N.016', tag: 'dossier · rank 6' },
  { md: 'dossiers/07_jasper_johns.md',   num: 'N.017', tag: 'dossier · rank 7' },

  // Cheat sheets
  { md: 'artifacts/cheat_sheets/01_bauer.md',          num: 'N.018', tag: 'cheat sheet' },
  { md: 'artifacts/cheat_sheets/02_dyson.md',          num: 'N.019', tag: 'cheat sheet' },
  { md: 'artifacts/cheat_sheets/03_dalio.md',          num: 'N.020', tag: 'cheat sheet' },
  { md: 'artifacts/cheat_sheets/04_whittingham.md',    num: 'N.021', tag: 'cheat sheet' },
  { md: 'artifacts/cheat_sheets/05_rees.md',           num: 'N.022', tag: 'cheat sheet' },
  { md: 'artifacts/cheat_sheets/06_goldman_fowler.md', num: 'N.023', tag: 'cheat sheet' },
  { md: 'artifacts/cheat_sheets/07_jasper_johns.md',   num: 'N.024', tag: 'cheat sheet' },

  // Case studies
  { md: 'research/phase_4_benchmarking/case_studies/01_cohen_childrens_northwell.md',  num: 'N.025', tag: 'case study' },
  { md: 'research/phase_4_benchmarking/case_studies/02_icahn_mt_sinai.md',             num: 'N.026', tag: 'case study' },
  { md: 'research/phase_4_benchmarking/case_studies/03_smilow_yale_nhh.md',            num: 'N.027', tag: 'case study' },
  { md: 'research/phase_4_benchmarking/case_studies/04_greenwich_hospital.md',         num: 'N.028', tag: 'case study' },
  { md: 'research/phase_4_benchmarking/case_studies/05_hartford_ayer_neuroscience.md', num: 'N.029', tag: 'case study' },
  { md: 'research/phase_4_benchmarking/case_studies/06_hss_specialty.md',              num: 'N.030', tag: 'case study' },
  { md: 'research/phase_4_benchmarking/case_studies/07_nwh_schwartz.md',               num: 'N.031', tag: 'case study' },
  { md: 'research/phase_4_benchmarking/case_studies/08_lloyd_goldman_lenox_hill.md',   num: 'N.032', tag: 'case study' },

  // Research foundations
  { md: 'sources/phase_0_verification_update.md',                        num: 'N.033', tag: 'authoritative' },
  { md: 'research/phase_0_institutional_context/nuvance_overview.md',    num: 'N.034', tag: 'research' },
  { md: 'research/phase_0_institutional_context/nuvance_990_analysis.md', num: 'N.035', tag: 'research' },
  { md: 'research/phase_0_institutional_context/predecessor_institutions.md', num: 'N.036', tag: 'research' },
  { md: 'research/phase_0_institutional_context/naming_opportunities.md', num: 'N.037', tag: 'research' },
  { md: 'research/phase_1_long_list/long_list.md',                       num: 'N.038', tag: 'long list' },
  { md: 'research/phase_2_short_list/short_list.md',                     num: 'N.039', tag: 'short list' },
  { md: 'sources/source_index.md',                                       num: 'N.040', tag: 'index' },

  // Project documentation
  { md: 'docs/superpowers/specs/2026-05-10-nuvance-fundraising-strategy-design.md',     num: 'N.041', tag: 'spec' },
  { md: 'docs/superpowers/plans/2026-05-10-nuvance-fundraising-implementation.md',      num: 'N.042', tag: 'plan' },
  { md: 'STATE.md',                                                                     num: 'N.043', tag: 'checkpoint' },
  { md: 'README.md',                                                                    num: 'N.044', tag: 'overview' },

  // Supplementary screen files
  { md: 'research/phase_1_long_list/screening_methodology.md',          num: 'N.045', tag: 'methodology' },
  { md: 'research/phase_1_long_list/screen_01_forbes.md',               num: 'N.046', tag: 'screen' },
  { md: 'research/phase_1_long_list/screen_02_bloomberg.md',            num: 'N.047', tag: 'screen' },
  { md: 'research/phase_1_long_list/screen_03_hedge_funds.md',          num: 'N.048', tag: 'screen' },
  { md: 'research/phase_1_long_list/screen_04_local_rich_lists.md',     num: 'N.049', tag: 'screen' },
  { md: 'research/phase_1_long_list/screen_05_foundation_990pf.md',     num: 'N.050', tag: 'screen' },
];

// ─── HTML template ───
function template({ title, html, num, tag, cssRel, homeRel }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escape(title)} — The Nuvance Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,200..900,0..100;1,9..144,200..900,0..100&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${cssRel}">
</head>
<body>

<svg class="grain" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <filter id="noiseFilter">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
    <feColorMatrix type="matrix" values="0 0 0 0 0.10  0 0 0 0 0.10  0 0 0 0 0.18  0 0 0 0.08 0" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
</svg>

<header class="page-head">
  <div class="page-head-inner">
    <div>
      <a href="${homeRel}" class="back-link"><span class="orn">⁂</span>The Nuvance Portfolio</a>
    </div>
    <div class="page-head-r">
      <span class="cat-num">${num}</span>
      <span class="cat-tag">${escape(tag)}</span>
    </div>
  </div>
  <div class="page-head-title">
    <p class="page-head-eyebrow">An artifact in the Nuvance Portfolio</p>
    <h1 class="page-head-h">${escape(title)}<em>.</em></h1>
  </div>
</header>

<main class="page-main">

  <article class="prose">
${html}
  </article>

  <aside class="page-aside">
    <p class="aside-l">In this artifact</p>
    <ul class="aside-toc" id="toc"></ul>
    <div class="aside-rule"></div>
    <p class="aside-mark"><span class="orn">⁂</span>Edition of one · MMXXVI · N</p>
    <a class="aside-back" href="${homeRel}">↤ Return to the catalog</a>
  </aside>

</main>

<footer class="page-foot">
  <div class="page-foot-inner">
    <p class="foot-orn">⁂ ⁂ ⁂</p>
    <p class="foot-mark">Edition of one · MMXXVI · N</p>
    <p class="foot-back"><a href="${homeRel}">↤ Return to the catalog</a></p>
  </div>
</footer>

<script>
// ── Auto-generate TOC from h2/h3 in the article body ──
(function () {
  const article = document.querySelector('.prose');
  const tocList = document.getElementById('toc');
  if (!article || !tocList) return;

  const headings = article.querySelectorAll('h2, h3');
  if (headings.length === 0) {
    document.querySelector('.aside-l').style.display = 'none';
    return;
  }

  headings.forEach((h, i) => {
    if (!h.id) h.id = 'h-' + i + '-' + (h.textContent || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
    const li = document.createElement('li');
    li.className = h.tagName.toLowerCase() === 'h3' ? 'toc-h3' : 'toc-h2';
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.replace(/\\.$/, '');
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // ── Highlight active section on scroll ──
  if ('IntersectionObserver' in window) {
    const tocLinks = new Map();
    tocList.querySelectorAll('a').forEach(a => tocLinks.set(a.getAttribute('href').slice(1), a));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const a = tocLinks.get(entry.target.id);
        if (!a) return;
        if (entry.isIntersecting) {
          tocList.querySelectorAll('a.active').forEach(el => el.classList.remove('active'));
          a.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    headings.forEach(h => observer.observe(h));
  }
})();
</script>

</body>
</html>
`;
}

function escape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Extract title from first h1 in markdown ───
function extractTitle(md) {
  const match = md.match(/^#\s+(.+)$/m);
  return match ? match[1].replace(/[\[\]]/g, '').trim() : 'Artifact';
}

// ─── Strip the leading H1 from markdown (so the title isn't rendered twice) ───
function stripLeadingH1(md) {
  // Remove the first level-1 heading line (and any blank line immediately after it).
  return md.replace(/^#\s+.+\r?\n+/, '');
}

// ─── Build each file ───
let built = 0, skipped = 0, errors = 0;

for (const f of FILES) {
  const mdAbs = join(REPO, f.md);
  const outAbs = mdAbs.replace(/\.md$/, '.html');
  try {
    const src = readFileSync(mdAbs, 'utf8');
    const title = extractTitle(src);
    const html = marked.parse(stripLeadingH1(src));

    // Compute paths relative to the OUTPUT file
    const outDir = dirname(outAbs);
    const cssRel = relative(outDir, join(SITE_DIR, 'artifact.css'));
    const homeRel = relative(outDir, join(SITE_DIR, 'index.html'));

    const wrapped = template({ title, html, num: f.num, tag: f.tag, cssRel, homeRel });
    writeFileSync(outAbs, wrapped);
    built++;
    console.log(`  ✓ ${f.md} → ${f.md.replace(/\.md$/, '.html')}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      skipped++;
      console.log(`  ⊘ ${f.md} (not found, skipped)`);
    } else {
      errors++;
      console.error(`  ✗ ${f.md}: ${err.message}`);
    }
  }
}

console.log(`\nBuilt: ${built}  ·  Skipped: ${skipped}  ·  Errors: ${errors}`);
