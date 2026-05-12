# Warm-Intro Network Map — usage

**Open** `index.html` in any modern browser (Chrome, Firefox, Safari). No build step, no server required. The page loads `network_data.json` and renders the interactive graph using `vis-network` via CDN.

## What it shows

- **7 candidate nodes** (deep blue) — the short-list, sized by rank
- **Nuvance / Northwell anchor nodes** (green) — Laura, D'Angelo, Robertson, Cordeau, Tracey, Boruchov
- **Connector nodes** (warm gold) — named individuals who can introduce or activate a candidate
- **External institution nodes** (gray boxes) — Dalio Center for Health Justice at NYP, Goldman Medical Pavilion at Lenox Hill, Feinstein Institutes, Vassar Brothers, Norwalk Hospital, Sharon Hospital
- **Avoid nodes** (red) — e.g., Joel Ehrenkranz on the Low Road Foundation board (Mt Sinai loyalty inside Jasper Johns's successor structure)
- **Edges** — relationships with documented evidence. Thick black = strong; gray = medium; faint = weak; dashed red = "avoid activating" (competing institutional loyalty).

## Interactions

- **Click** any node — opens the side panel with details (rank, wealth, role, notes, dossier link where applicable)
- **Hover** — quick tooltip
- **Drag** — pan
- **Scroll wheel** — zoom
- **Drag a node** — reposition (the physics simulation will re-stabilize)
- **Legend filters** — show/hide node types and "avoid" edges

## Data source

`network_data.json` is the canonical data file. To add or modify nodes/edges, edit that file. The visualization auto-loads the latest contents on page refresh.

## Per-meeting customization

For a specific candidate meeting, Laura can:
1. Use the filters to isolate the candidate's ego-network (uncheck other candidates)
2. Click into individual nodes to surface specifics
3. Open the linked dossier for full context

## Print / share

For a static export, use the browser's "Print to PDF" feature. The legend panel + visible network will both render. For sharing, the whole `intro_network_map/` directory can be zipped and emailed — recipients open `index.html` locally.

## Notes on data verification

The network is built from the Phase 3 dossiers and Phase 4 case studies. Several relationships are flagged as inferred (weak edges); these should be confirmed with Laura before being acted on as documented intro paths. See `STATE.md` and the individual dossier "verification gaps" sections.
