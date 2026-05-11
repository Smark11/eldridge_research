# Pending Sources — Task 0.4 (Predecessor-Institution Legacy Mapping)

**Compiled:** 2026-05-10
**Researcher:** Subagent (Task 0.4 of Batch 0.A)
**Status:** PENDING ORCHESTRATOR MERGE into `sources/source_index.md`

---

## CRITICAL CONTEXT — read first

The execution environment denied **both** `WebFetch` and `WebSearch` permissions during this research session. The artifact at `research/phase_0_institutional_context/predecessor_institutions.md` was therefore built entirely from the assistant's training-corpus knowledge (general public knowledge as of January 2026). No live URLs were retrieved; no live retrieval dates can be recorded.

The list below documents:
- **(a) The target source set** the task brief specified
- **(b) The specific verification action** each source needs at the Checkpoint A verification pass
- **(c) The artifact claim** in `predecessor_institutions.md` each source is intended to verify

The orchestrator should treat this file as a **verification-action queue** rather than a normal source index, and should plan to re-run Task 0.4 with web access (or assign a human researcher) to convert each "(known — training corpus, needs live verification)" or "(inferred)" claim into a properly cited claim.

---

## Sources

### S0.4-01 — Nuvance Health institutional histories
- **URL pattern:** `https://www.nuvancehealth.org/about-us` and per-hospital "About" pages (e.g., `/locations/danbury-hospital`, `/locations/norwalk-hospital`, `/locations/vassar-brothers-medical-center`, `/locations/northern-dutchess-hospital`, `/locations/putnam-hospital`, `/locations/sharon-hospital`, `/locations/new-milford-hospital`)
- **Retrieved:** NOT RETRIEVED (WebFetch denied 2026-05-10)
- **Description:** Each hospital's "Our History" page typically gives founding year, founders, and any named-space inventory.
- **Verification action:** Retrieve each "Our History" page. Confirm founding years for Danbury Hospital (1885), Norwalk Hospital (1893), Vassar Brothers Medical Center (1887), Northern Dutchess Hospital (~1914), Sharon Hospital (~1909). Capture any named-space lists (donor walls, named wings).

### S0.4-02 — Internet Archive Wayback Machine
- **URL:** `https://web.archive.org/`
- **Retrieved:** NOT RETRIEVED
- **Description:** Pre-2019-merger snapshots of each predecessor institution's standalone website, which often had richer donor-recognition content than the current merged Nuvance site.
- **Verification action:** Pull Wayback snapshots circa 2015-2018 for `danburyhospital.org`, `norwalkhospital.org`, `newmilfordhospital.org`, `health-quest.org`, `vassarbrothers.org`, `northerndutchess.org`, `putnamhospital.org`, `sharonhospital.org`. Capture donor pages, annual report links, "About Us" content.

### S0.4-03 — Wikipedia
- **URL:** `https://en.wikipedia.org/wiki/` plus article names: `Danbury_Hospital`, `Norwalk_Hospital`, `New_Milford_Hospital`, `Vassar_Brothers_Medical_Center`, `Northern_Dutchess_Hospital`, `Putnam_Hospital_Center`, `Sharon_Hospital`, `Matthew_Vassar`, `Vassar_College`, `Dyson_Foundation`, `Praxair`, `Western_Connecticut_Health_Network`, `Health_Quest_Systems`, `Nuvance_Health`
- **Retrieved:** NOT RETRIEVED
- **Description:** Background overview articles; use as starting points only, since Wikipedia is not a primary source. Verify all citations.
- **Verification action:** Pull all listed articles. Note founding years, founders, named buildings, controversies, and references for further pursuit.

### S0.4-04 — Dutchess County Historical Society
- **URL:** `https://www.dchsny.org/` (approximate; verify exact URL)
- **Retrieved:** NOT RETRIEVED
- **Description:** Definitive source for Vassar family genealogy, Vassar Brothers Hospital founding history, and Hudson Valley philanthropic family records.
- **Verification action:** Search DCHS archives for: Matthew Vassar Jr., John Guy Vassar, Vassar Brothers Hospital founding records, Vassar family genealogical files, Smith Brothers (cough drops), Dyson family Millbrook records. Request copies of any centennial publication for Vassar Brothers Hospital.

### S0.4-05 — Danbury Museum & Historical Society
- **URL:** `https://www.danburymuseum.org/` (approximate)
- **Retrieved:** NOT RETRIEVED
- **Description:** Local history source for Danbury Hospital founding, hat-industry donor families.
- **Verification action:** Search for Danbury Hospital 1885 founding records. Check Mallory family, Crosby family, Tweedy family, Ives family, Hoyt family papers for any Danbury Hospital involvement.

### S0.4-06 — Litchfield Historical Society and Sharon Historical Society
- **URLs:** `https://litchfieldhistoricalsociety.org/` and Sharon Historical Society (verify URL)
- **Retrieved:** NOT RETRIEVED
- **Description:** Sharon Hospital founding records (~1909), Hotchkiss family papers, Litchfield County old-money family genealogies.
- **Verification action:** Pull Sharon Hospital founding records. Cross-check Hotchkiss family papers for any Sharon Hospital involvement. Pull Litchfield County donor-family lists.

### S0.4-07 — Putnam County Historical Society
- **URL:** Verify
- **Retrieved:** NOT RETRIEVED
- **Description:** Putnam Hospital founding records.
- **Verification action:** Confirm Putnam Hospital founding year and founders.

### S0.4-08 — Poughkeepsie Journal archives
- **URL:** `https://www.poughkeepsiejournal.com/` (Gannett property) and historical archives via newspapers.com or local-library access
- **Retrieved:** NOT RETRIEVED
- **Description:** Local press archive for Vassar Brothers Medical Center building dedications, named gifts, capital campaigns, Dyson family announcements.
- **Verification action:** Search for: "Dyson Center for Cancer Care" dedication, "Vassar Brothers Medical Center" tower opening 2021, "Vassar Brothers" capital campaign announcements 2010-2020.

### S0.4-09 — News-Times Danbury archives
- **URL:** `https://www.newstimes.com/`
- **Retrieved:** NOT RETRIEVED
- **Description:** Local press archive for Danbury Hospital campaigns, Praxair Cancer Center dedication.
- **Verification action:** Search for: "Praxair Cancer Center" dedication, "Danbury Hospital" capital campaign 2010s, "Danbury Hospital" building dedications.

### S0.4-10 — The Hour Norwalk archives
- **URL:** `https://www.thehour.com/`
- **Retrieved:** NOT RETRIEVED
- **Description:** Local press archive for Norwalk Hospital campaigns, Whittingham Cancer Center dedication, named gifts.
- **Verification action:** Search for: "Whittingham Cancer Center" dedication, "Norwalk Hospital" capital campaign, "Norwalk Hospital" named gifts.

### S0.4-11 — Lakeville Journal (Sharon-area weekly)
- **URL:** `https://www.lakevillejournal.com/`
- **Retrieved:** NOT RETRIEVED
- **Description:** Local press archive for Sharon Hospital campaigns, L&D closure controversy, named gifts.
- **Verification action:** Search for: "Sharon Hospital" capital campaigns, "Sharon Hospital" L&D closure, "Sharon Hospital" named donors.

### S0.4-12 — Connecticut Office of Health Strategy
- **URL:** `https://portal.ct.gov/OHS`
- **Retrieved:** NOT RETRIEVED
- **Description:** Regulatory record of Sharon Hospital L&D closure controversy.
- **Verification action:** Pull filings, hearings, and decision documents for Sharon Hospital L&D matter (2022-2025).

### S0.4-13 — ProPublica Nonprofit Explorer (990 filings)
- **URL:** `https://projects.propublica.org/nonprofits/`
- **Retrieved:** NOT RETRIEVED
- **Description:** 990 filings for Nuvance Foundation and any surviving predecessor 501(c)(3)s.
- **Verification action:** This is **primarily Task 0.3's responsibility**, but the predecessor-entity search overlap is critical here. Search for: Nuvance Health Foundation, Vassar Brothers Hospital Foundation, Northern Dutchess Hospital Foundation, Putnam Community Hospital Foundation, Sharon Hospital Foundation, Danbury Hospital Foundation, Norwalk Hospital Foundation, Western Connecticut Health Network Foundation, Health Quest Foundation. Capture EIN, latest 990, board roster, top officers.

### S0.4-14 — Dyson Foundation
- **URL:** `https://www.dysonfoundation.org/`
- **Retrieved:** NOT RETRIEVED
- **Description:** Grantmaking history, board composition, current leadership post-Robert Rogers Dyson's 2024 death.
- **Verification action:** Pull Foundation grant history (specifically grants to Vassar Brothers Medical Center, Northern Dutchess Hospital, other Hudson Valley healthcare), board roster, succession announcement.

### S0.4-15 — Vassar College Archives
- **URL:** `https://www.vassar.edu/library/archives` (approximate)
- **Retrieved:** NOT RETRIEVED
- **Description:** Vassar family papers, genealogy, founding documents for Vassar College that overlap with Vassar Brothers Hospital founding (same family, same era).
- **Verification action:** Genealogical question — identify any living direct descendants of Matthew Vassar Jr., John Guy Vassar, or other 19th-century Vassars. Pull family-tree documentation if held.

### S0.4-16 — Adriance Memorial Library (Poughkeepsie)
- **URL:** `https://www.poklib.org/` (verify)
- **Retrieved:** NOT RETRIEVED
- **Description:** Local-history room holdings on Vassar Brothers Hospital centennial, Vassar family papers.
- **Verification action:** Request any Vassar Brothers Hospital centennial publication (1987), 75th-anniversary publication (1962), or other commemorative materials.

### S0.4-17 — Donor wall photography (each predecessor institution lobby)
- **URL:** N/A (on-site visit or Nuvance Foundation request)
- **Retrieved:** NOT RETRIEVED
- **Description:** Definitive named-space inventory for each predecessor institution.
- **Verification action:** Request from each Nuvance Foundation affiliate, or visit on site. Alternative: Google Street View interior captures where available.

### S0.4-18 — Centennial publications
- **URL:** Various; held at local libraries and institutional archives
- **Retrieved:** NOT RETRIEVED
- **Description:** Danbury Hospital centennial (1985), Norwalk Hospital centennial (1993), Vassar Brothers Hospital centennial (1987), Sharon Hospital centennial (~2009).
- **Verification action:** Request from each institution's archives or local public library.

---

## Summary of artifact-claim confidence audit

The `predecessor_institutions.md` artifact contains approximately:
- **~10 "known — training corpus"** claims (e.g., Vassar family founded Vassar College, Praxair Cancer Center exists at Danbury Hospital, Dyson Center for Cancer Care exists at Vassar Brothers, Whittingham Cancer Center exists at Norwalk Hospital, Sharon Hospital L&D closure controversy)
- **~25 "inferred"** claims (e.g., specific likely-donor surnames, multi-institutional family patterns, corporate-legacy executive cohorts)
- **~15 "unknown — research gap"** claims (e.g., specific founders, founding gift sizes, named-space inventories for smaller hospitals)

Every claim labeled "(known — training corpus, needs live verification)" must be verified at Checkpoint A before any name is seeded into Phase 1 candidate screening.

**End of pending-sources file.**
