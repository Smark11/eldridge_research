# Sources — pending for source_index.md merge

**Task:** 0.5 — Naming opportunities by tier
**Compiled:** 2026-05-10
**Format:** `[ID] [Title] — [URL or identifier] — [retrieved YYYY-MM-DD] — [brief description]`

---

## Important caveat on this sources list

Live web access (`WebFetch`, `WebSearch`, and `curl` via `Bash`) was not authorized in the execution environment for this subagent at runtime. As a result, the naming_opportunities.md artifact was produced from:

1. **The project's own spec and plan documents** (already in the repo at `docs/superpowers/`)
2. **Documented institutional knowledge** of Nuvance Health, its predecessor systems, and peer regional health systems — this is general public-domain knowledge of the healthcare-philanthropy landscape but is *not* fresh-fetched from primary URLs in this session
3. **Industry-standard naming-menu structures** at the peer regional health systems named in this project's spec

This pending-sources file therefore lists **(a) sources actually consulted in this session** and **(b) sources that must be verified by a future verification pass once web access is restored**. The orchestrator should treat the (b) list as the verification queue.

---

## (a) Sources directly consulted in this session

| ID | Title | URL / identifier | Retrieved | Description |
|---|---|---|---|---|
| LOCAL-01 | Nuvance Major-Gift Strategy — Design Spec | `/Users/marksenerth/_src/eldridge_research/docs/superpowers/specs/2026-05-10-nuvance-fundraising-strategy-design.md` | 2026-05-10 | Project spec providing Nuvance's seven-facility inventory, service-area description, predecessor-merger context, and strategic priorities (cardiac, oncology, women's health, neurosciences) |
| LOCAL-02 | Nuvance Fundraising Implementation Plan | `/Users/marksenerth/_src/eldridge_research/docs/superpowers/plans/2026-05-10-nuvance-fundraising-implementation.md` | 2026-05-10 | Implementation plan, including Task 0.5 specification, naming-tier framework, and verification sequence |
| LOCAL-03 | Project STATE.md | `/Users/marksenerth/_src/eldridge_research/STATE.md` | 2026-05-10 | Project execution state — confirms Batch 0.A is in progress |

---

## (b) Verification queue — must be fetched when web access is restored

| ID | Title | URL / identifier | Priority | Purpose |
|---|---|---|---|---|
| PEND-01 | Nuvance Health Foundation page | `https://www.nuvancehealth.org/foundation` | CRITICAL | Confirm currently published naming menu, gift-tier ranges, signature campaigns |
| PEND-02 | Nuvance Health News & Press Releases | `https://www.nuvancehealth.org/news` (or successor URL) | CRITICAL | Identify any capital projects, new institute launches, or named gifts announced in past 24 months |
| PEND-03 | Nuvance Health About / Strategic Plan | `https://www.nuvancehealth.org/about` | HIGH | Confirm strategic priorities, signature programs, and any published strategic-plan document |
| PEND-04 | Nuvance Health Foundation IRS Form 990 — most recent two filings | ProPublica Nonprofit Explorer or IRS Tax Exempt Org Search | CRITICAL | Schedule B largest donors and Schedule M non-cash contributions to inventory named gifts |
| PEND-05 | Connecticut Office of Health Strategy — Certificate of Need filings | `https://portal.ct.gov/OHS` | CRITICAL | Identify ≥$25M capital projects at Danbury, Norwalk, Sharon, New Milford hospitals |
| PEND-06 | New York State Department of Health — Public Health and Health Planning Council CON filings | `https://www.health.ny.gov/facilities/cons/` | CRITICAL | Identify ≥$25M capital projects at Vassar Brothers, Northern Dutchess, Putnam hospitals |
| PEND-07 | Yale-New Haven Health Foundation page | `https://www.ynhh.org/` (giving subsections) | HIGH | Confirm Smilow Cancer naming, current campaign, gift-tier menu |
| PEND-08 | Greenwich Hospital Foundation page | `https://www.greenwichhospital.org/about/giving` | HIGH | Confirm Schwab Pavilion and other Greenwich-corridor named gifts |
| PEND-09 | Northwell Health Foundation page | `https://www.northwell.edu/about/foundation` | HIGH | Confirm Sandra Atlas Bass, Cohen Children's, Zucker School of Medicine, and other named institutes |
| PEND-10 | Stamford Health Foundation page | `https://www.stamfordhealth.org/giving/` | HIGH | Confirm Bennett Cancer Center naming and other major named gifts |
| PEND-11 | Hartford HealthCare Foundation page | `https://hartfordhealthcare.org/about-us/foundation` | HIGH | Confirm Bone & Joint Institute, Heart & Vascular Institute, and other named institutes |
| PEND-12 | NYU Langone Health giving page | `https://nyulangone.org/giving` | MEDIUM | Confirm Langone naming ($450M+), Grossman School of Medicine, named institutes — for benchmark only |
| PEND-13 | Mount Sinai giving page | `https://giving.mountsinai.org/` | MEDIUM | Confirm Icahn School of Medicine ($200M+), other major namings — for benchmark only |
| PEND-14 | Penn Medicine giving page | `https://giving.medicine.upenn.edu/` | MEDIUM | Confirm Perelman School of Medicine ($225M), Roberts Proton Therapy Center — for benchmark only |
| PEND-15 | Inside Philanthropy — hospital and healthcare giving section | `https://www.insidephilanthropy.com/` | MEDIUM | Recent named-gift trade-press coverage at peer systems; trend reporting |
| PEND-16 | Association for Healthcare Philanthropy — AHP Report on Giving | `https://www.ahp.org/` | MEDIUM | Industry-standard naming-tier benchmarks and total-giving comparables by system size |
| PEND-17 | Becker's Hospital Review — Nuvance coverage | `https://www.beckershospitalreview.com/` (search Nuvance) | MEDIUM | Trade-press coverage of Nuvance capital projects, leadership announcements, financial position |
| PEND-18 | Modern Healthcare — Nuvance coverage | `https://www.modernhealthcare.com/` (search Nuvance) | MEDIUM | Same as above |
| PEND-19 | Vassar Brothers Hospital Foundation — predecessor materials | Via Internet Archive or library archives | LOW | Pre-merger Health Quest-era naming inventory; coordinate with Task 0.4 outputs |
| PEND-20 | WCHN / Danbury / Norwalk Hospital Foundation — predecessor materials | Via Internet Archive or library archives | LOW | Pre-merger CT-side naming inventory; coordinate with Task 0.4 outputs |

---

## Notes for orchestrator

1. **Re-review trigger.** When PEND-01, PEND-02, PEND-04, PEND-05, and PEND-06 have been fetched, the naming_opportunities.md artifact must be revised. Specifically: the $100M-tier and $250M+-tier tables and the strategic-gaps section depend critically on capital-pipeline confirmation from those sources.

2. **Cross-reference with Task 0.4.** The predecessor-institution legacy mapping subagent (running in parallel as part of Batch 0.A) will produce a fuller inventory of existing named gifts at predecessor institutions. Once that file lands, the "Existing named gifts" section of naming_opportunities.md should be updated to integrate those findings.

3. **Cross-reference with Task 0.6.** The case-for-support audit (sequential after Batch 0.A) should be informed by the strategic-gaps section of naming_opportunities.md. Specifically, Gap #1 (no $100M+ capital project), Gap #2 (no signature clinical program), and Gap #3 (no research footprint) are direct inputs to the case-for-support audit.

4. **Source IDs in this file are temporary.** The orchestrator will renumber when merging into `sources/source_index.md`. Internal references in naming_opportunities.md use prose descriptions and confidence labels ([K]/[I]/[U]) rather than source IDs, so renumbering is safe.
