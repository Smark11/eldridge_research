# Pending Sources — Task 0.3 (Nuvance Health Foundation 990 Analysis)

**Subagent:** Phase 0, Task 0.3 (parallel research)
**Compiled:** 2026-05-10
**Status:** Intended-retrieval list, not completed retrievals (web access was unavailable in the sandbox during this subagent's run)

Orchestrator: please retrieve each of the URLs/sources below during the verification pass, then merge confirmed entries into `/Users/marksenerth/_src/eldridge_research/sources/source_index.md` using the format `[ID] [Title] — [URL] — [retrieved YYYY-MM-DD] — [brief description]`.

---

## Primary 990 retrieval targets (must do)

### Nuvance Health (operating entity) and Foundation entities — ProPublica Nonprofit Explorer

| Intended source ID | Search query / direct URL pattern | Purpose |
|---|---|---|
| S-0.3-01 | `https://projects.propublica.org/nonprofits/search?q=Nuvance+Health` | Find Nuvance Health operating entity 990 → pull Schedule R for related-org list |
| S-0.3-02 | `https://projects.propublica.org/nonprofits/search?q=Nuvance+Health+Foundation` | Find umbrella foundation entity (post-merger successor to WCHN Foundation) |
| S-0.3-03 | `https://projects.propublica.org/nonprofits/search?q=Western+Connecticut+Health+Network+Foundation` | Find legacy WCHN foundation entity if still filing |
| S-0.3-04 | `https://projects.propublica.org/nonprofits/search?q=Danbury+Hospital+Development+Fund` | Danbury foundation entity |
| S-0.3-05 | `https://projects.propublica.org/nonprofits/search?q=Danbury+Health+Systems+Foundation` | Alternate Danbury entity name |
| S-0.3-06 | `https://projects.propublica.org/nonprofits/search?q=Norwalk+Hospital+Foundation` | Norwalk Hospital Foundation entity |
| S-0.3-07 | `https://projects.propublica.org/nonprofits/search?q=Vassar+Brothers+Medical+Center+Foundation` | Vassar Brothers foundation entity |
| S-0.3-08 | `https://projects.propublica.org/nonprofits/search?q=Vassar+Brothers+Hospital+Foundation` | Alternate Vassar Brothers entity name |
| S-0.3-09 | `https://projects.propublica.org/nonprofits/search?q=Health+Quest+Systems+Foundation` | Health Quest (NY) foundation entity (status uncertain post-merger) |
| S-0.3-10 | `https://projects.propublica.org/nonprofits/search?q=Northern+Dutchess+Hospital+Foundation` | Northern Dutchess Hospital, Rhinebeck |
| S-0.3-11 | `https://projects.propublica.org/nonprofits/search?q=Putnam+Hospital+Center+Foundation` | Putnam Hospital Center, Carmel |
| S-0.3-12 | `https://projects.propublica.org/nonprofits/search?q=Putnam+Hospital+Foundation` | Alternate Putnam entity name |
| S-0.3-13 | `https://projects.propublica.org/nonprofits/search?q=Sharon+Hospital+Foundation` | Sharon Hospital, CT |
| S-0.3-14 | `https://projects.propublica.org/nonprofits/search?q=New+Milford+Hospital+Foundation` | New Milford Hospital, CT |

For each entity that returns hits, retrieve:
- Most recent 990 (PDF or ProPublica entity-detail page)
- 5 most recent 990s for trend analysis
- Note EIN, exact legal name, address, total revenue, contribution revenue (Part VIII Line 1h), net assets (Part X Line 36), Schedule R (Part II) for related-org mapping, Schedule M for noncash gifts, Part VII for officers/directors

### Cause IQ — cross-reference and entity tree

| Intended source ID | Search target | Purpose |
|---|---|---|
| S-0.3-20 | `https://www.causeiq.com/` — search "Nuvance Health Foundation" and each predecessor name | Cause IQ's related-organization view is more reliable than ProPublica's for mapping the foundation-entity tree |
| S-0.3-21 | Cause IQ "Related Organizations" tab for the Nuvance Health Foundation entity | Definitive entity-tree map |

### GuideStar / Candid (Candid.org)

| Intended source ID | Search target | Purpose |
|---|---|---|
| S-0.3-30 | `https://candid.org/` — Foundation Directory Online searches for each entity | Tertiary cross-reference; also provides org-mission text from Form 1023 application |

---

## Cross-reference targets — likely major donors via private-foundation Schedule I

### Dyson Foundation (highest-priority cross-reference)

| Intended source ID | Source | Purpose |
|---|---|---|
| S-0.3-40 | `https://projects.propublica.org/nonprofits/search?q=Dyson+Foundation` (Millbrook NY) | The dominant family foundation in Dutchess County. Pull most recent 5 years of 990-PF Schedule I to find every grant to any Nuvance-predecessor entity |
| S-0.3-41 | Dyson Foundation own website / annual reports | Confirms grant history visible in 990-PF |

### Other likely Hudson Valley / Western CT family foundations to cross-reference

| Intended source ID | Foundation to search | Region | Purpose |
|---|---|---|---|
| S-0.3-50 | (Hudson Valley family foundations — to be enumerated by Task 0.4 subagent) | Dutchess County | Cross-ref Schedule I |
| S-0.3-51 | (Closely-held Danbury-area business foundations) | Fairfield County (northern) | Cross-ref Schedule I |
| S-0.3-52 | (Litchfield County weekender foundations) | NW CT | Cross-ref Schedule I |
| S-0.3-53 | Praxair Foundation / Linde plc Foundation if existent | Danbury historical | Industrial corporate giving signal |

---

## News / public announcement targets

### Hospital-foundation own materials

| Intended source ID | Source | Purpose |
|---|---|---|
| S-0.3-60 | `https://www.nuvancehealth.org/foundation` (foundation home page) | Official foundation pages — staff list, board list, donor-recognition pages |
| S-0.3-61 | Nuvance Health Foundation Annual Report (most recent, typically downloadable as PDF) | Honor roll, donor recognition, campaign highlights |
| S-0.3-62 | Vassar Brothers Medical Center foundation page (may be sub-page of nuvancehealth.org) | VB-specific donor recognition |
| S-0.3-63 | Danbury Hospital foundation page | Danbury-specific |
| S-0.3-64 | Norwalk Hospital foundation page | Norwalk-specific |
| S-0.3-65 | Sharon Hospital foundation page | Sharon-specific (after near-closure 2022-2023) |

### Regional press archives (named-gift announcements)

| Intended source ID | Source | Coverage |
|---|---|---|
| S-0.3-70 | Poughkeepsie Journal archive | Vassar Brothers / Dutchess County |
| S-0.3-71 | News-Times (Danbury) archive | Danbury Hospital |
| S-0.3-72 | The Hour (Norwalk) archive | Norwalk Hospital |
| S-0.3-73 | Hudson Valley Magazine / HV Biz Journal | Mid-Hudson general |
| S-0.3-74 | CT Insider | Western CT general |
| S-0.3-75 | Connecticut Post | Fairfield County |
| S-0.3-76 | Lakeville Journal | Sharon / NW CT |
| S-0.3-77 | The Chronicle (Millbrook) | Northern Dutchess / Millbrook |
| S-0.3-78 | Becker's Hospital Review archives | Sector trade press — Nuvance financial coverage |
| S-0.3-79 | Modern Healthcare archives | Sector trade press — merger and post-merger coverage |

### Wayback Machine — for older / removed materials

| Intended source ID | Source | Purpose |
|---|---|---|
| S-0.3-80 | `https://web.archive.org/web/*/healthquest.org` | Historical Health Quest foundation pages pre-2019 |
| S-0.3-81 | `https://web.archive.org/web/*/wchn.org` | Historical WCHN foundation pages pre-2019 |
| S-0.3-82 | Historical hospital-foundation annual reports captured before mergers | Pre-merger donor honor rolls |

---

## Methodological / framework references

| Intended source ID | Source | Purpose |
|---|---|---|
| S-0.3-90 | IRS Form 990 instructions (most recent) | Confirms line-item references in Section 2 of the analysis |
| S-0.3-91 | Association for Healthcare Philanthropy (AHP) — annual Report on Giving | Sector-norm benchmarks for hospital-foundation revenue ranges |
| S-0.3-92 | Council for Advancement and Support of Education (CASE) reporting standards | Cross-sector philanthropy benchmarks |

---

## Special note for orchestrator

The above list is **intended** retrieval. Because web access was unavailable in this subagent's sandbox, none of these URLs were actually retrieved during Task 0.3's run. The analysis document itself (`research/phase_0_institutional_context/nuvance_990_analysis.md`) is explicit about which claims are training-data inference vs. require verification. The orchestrator's options are:

1. **Recommended:** Run a fresh subagent with web access enabled to re-execute Task 0.3 retrieval and merge refreshed figures into the existing scaffold (the analytical framing, especially Sections 4 and 6, will hold up)
2. **Alternative:** Mark do the retrievals manually and provide the figures back; merge into the scaffold
3. **Defer:** Proceed to Phase 1 with the scaffold's structural conclusions and refresh figures opportunistically during Phase 2 short-listing

Whichever path is chosen, the **structural conclusions in Section 6 of the analysis** are robust to refresh and can be relied on for downstream phase planning (long-list generation, short-list selection, dossier templating).
