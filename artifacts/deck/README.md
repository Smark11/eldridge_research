# Presentation Deck — Customization Guide

## What this is

A 13-slide presentation deck for major-gift solicitation conversations. Built as a self-contained HTML page (no build step, no server) using Fraunces (display serif) and Newsreader (body serif) via Google Fonts. The aesthetic is **editorial-monograph** — meant to feel like a finely-printed institutional book rather than a marketing deck.

## How to open it

Open `index.html` in any modern browser. Use arrow keys (or the buttons in the bottom-left) to navigate. Press F11 for full-screen presentation mode. Touch devices: swipe.

The deck is also **print-optimized** — use your browser's "Print to PDF" to generate a leave-behind PDF version.

## How to customize per donor

The deck is pre-populated with the **Bauer family** example pitch (Rank #1, ~$50M ask) so you can see how it reads end-to-end. To customize for a different donor, search `index.html` for **`CUSTOMIZE`** comments — each marks a slot that swaps per donor:

| Slot | Slide | What to replace |
|------|-------|------------------|
| `donor_name` | 1 (Title) | The donor's name (e.g., "Ray and Barbara Dalio") |
| `donor_why_opening` | 2 (Your why) | One sentence anchoring the donor's specific connection to the institution |
| `donor_why_continued` | 2 (Your why) | Paragraph continuing the donor's story — pull motivation evidence from their dossier |
| `named_opportunity` | 4 (Opportunity) | The specific named opportunity for this donor (e.g., "The Dalio Health Equity Institute at Nuvance") |
| `opportunity_description` | 4 (Opportunity) | Paragraph describing what the named opportunity is and what it does |
| `pulled_quote` | 5 (Quote) | A pull-quote from or about the donor — pull from their giving statements or dossier |
| `quote_source` | 5 (Quote) | Attribution for the pull-quote |
| `patient_story_lead` | 7 (Story) | A specific patient story tied to the donor's named opportunity |
| `community_framing` | 10 (Community) | Framing of the peer-donor community for this donor (depends on cohort) |
| `ask_amount` | 11 (Ask) | The specific dollar amount being asked |
| `ask_purpose` | 11 (Ask) | The specific named opportunity / structure |

## Workflow per meeting

1. Make a copy of the deck folder, renaming it per donor:
   `cp -r deck deck_dalio` (for example)

2. Open the new `index.html` in a code editor.

3. Search for `CUSTOMIZE` comments and replace each placeholder with text drawn from:
   - The donor's dossier (`dossiers/NN_*.md`)
   - The donor's cheat sheet (`artifacts/cheat_sheets/NN_*.md`)
   - The playbook section on that donor

4. Update the **title slide donor name** (the very first `CUSTOMIZE`).

5. Print to PDF for the leave-behind version.

6. Open in Chrome/Safari/Firefox full-screen for the live presentation.

## Per-candidate quick swaps (for the 7 short-list candidates)

| Donor | Slide-3 thesis line | Slide-11 ask amount | Slide-11 ask purpose |
|-------|---------------------|---------------------|------------------------|
| Bauer | (default in deck) | $50 million | Bauer Family Endowment for Maternal-Infant Care and Spiritual Care |
| Dyson | Vassar Brothers as the heart of Mid-Hudson cancer care | $15 million | Phase II of Dyson Center for Cancer Care + Anne E. Dyson Endowed Chair in Oncology |
| Dalio | Hudson Valley / Western Connecticut health equity as a distinct institutional model | $35 million | Dalio Health Equity Institute at Nuvance |
| Whittingham | Thirty years of three generations of cancer care at Norwalk | $5 million | 30th-Anniversary Whittingham Endowed Chair (named for Andrew and Michael) |
| Rees | A regional research-thesis institute, modeled on Feinstein at scale | $20 million | Rees Translational Medicine Initiative |
| Goldman Fowler | A Goldman family women's-health legacy from Lenox Hill to the Hudson Valley | $15 million | Goldman/Fowler Women's Health Center at Vassar Brothers |
| Jasper Johns (Conley Rollins) | Sharon Hospital as Sharon community infrastructure | $3 million | Sharon Hospital Community Programs Endowment |

## Design notes

- **Fraunces** is used for all display type — a variable-axis serif with optical-size and a "SOFT" axis. Section labels use the soft, italic form; titles use the harder, more authoritative form. This is *not* a generic serif; it has a particular humanist warmth that fits a hospital context.
- **Newsreader** handles body type — a newspaper-grade serif designed by Production Type. Built for long-form reading without fatigue.
- The **paper-grain background** is rendered as a single inline SVG with a `feTurbulence` filter. No image asset.
- The **palette** intentionally avoids hospital blue, corporate green, and tech gradients. Cream paper + ink navy + burnt clay reference the materials of memorial books, institutional histories, and museum publications.
- **Large numerals** anchor each slide — they're a typographic moment, not just pagination.
- **Transitions** are horizontal slide with cinematic ease — meant to feel like book pages turning, not like PowerPoint.

## Browser support

Modern Chromium (Chrome, Edge, Arc, Brave), Firefox 100+, Safari 15+. The variable fonts require modern font-rendering; if they don't load, the page falls back to Hoefler Text / Georgia.

## Files

- `index.html` — the deck itself with customization slots
- `style.css` — full visual system
- `deck.js` — navigation + transitions (vanilla JS, no dependencies)
- `assets/` — empty by default; for any custom imagery you choose to add later
