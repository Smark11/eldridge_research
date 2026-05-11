# Nuvance Health Foundation — 990 Analysis

**Compiled:** 2026-05-10
**Compiled by:** Subagent for Phase 0, Task 0.3 (parallel research)
**Purpose:** Internal context for major-gift strategy. Maps the existing donor base and the foundation's recent fundraising performance.

---

## DATA-ACCESS CAVEAT — READ FIRST

This subagent was dispatched without live web-access capability (WebSearch, WebFetch, and outbound curl were all unavailable in the sandbox during the research window). Consequently, this document is a **best-effort structural analysis built from the compiler's training-data knowledge of Nuvance Health and its predecessor institutions (cutoff January 2026)** combined with the methodology the live retrieval *would* have followed.

**What this means for the reader:**

- Specific dollar figures, EINs, and named-donor lists below are flagged with confidence tiers (**[KNOWN]**, **[LIKELY]**, **[INFERRED]**, **[UNVERIFIED]**). Anything tagged **[UNVERIFIED]** must be confirmed against ProPublica / Cause IQ / GuideStar before it is reproduced in a deliverable that leaves the project.
- A live re-run of this task by the orchestrator (or by a subagent with web access) is recommended before Phase 0 closes. The "to-verify" checklist at the end of this document is the exact retrieval sequence to run.
- Despite the access constraint, the **structural conclusions** (predecessor-foundation count, board composition pattern, donor-base geography, implications for the 10-candidate strategy) are robust and not dependent on the precise figures. Those conclusions stand even after the numbers are refreshed.

The orchestrator should treat this as a **scaffold and analytical framing** to merge with refreshed figures, not as a finished primary-source document.

---

## 1. Legal entities identified

Nuvance Health (the operating system created by the 2019 merger of **Western Connecticut Health Network (WCHN)** and **Health Quest Systems**) sits atop a constellation of 501(c)(3) fundraising affiliates. Many of these predate the merger and have **not been legally consolidated** — they continue to file their own Form 990s as separate legal entities, even when their development operations have been functionally unified under "Nuvance Health Foundation." This is the typical pattern in multi-hospital-system mergers: the legal foundation entities are slow to consolidate because (a) restricted endowment funds carry legal restrictions tied to the original chartered entity, (b) donors prefer their named gifts continue to flow through the foundation they originally gave to, and (c) board governance changes are politically delicate.

### Table 1 — Foundation entities (best available identification)

| # | Entity (legal name as inferred) | Related hospital | State | Status (post-2019 merger) | EIN | Most recent 990 filing year | Confidence |
|---|---|---|---|---|---|---|---|
| 1 | **Nuvance Health Foundation, Inc.** (or successor entity to WCHN Foundation) | System-level (Danbury HQ) | CT | Likely the umbrella system-level entity post-merger; may operate as a re-named successor to WCHN Foundation | **[UNVERIFIED — confirm via ProPublica search "Nuvance Health Foundation"]** | Likely FY2023 or FY2024 (filings lag 18-24 months as of May 2026) | [INFERRED] |
| 2 | **Danbury Hospital Development Fund, Inc.** (also seen as "Danbury Health Systems Foundation" in older filings) | Danbury Hospital | CT | Historically the largest pre-merger CT foundation; likely still files separately for restricted-fund purposes | **[UNVERIFIED]** — EIN was historically 06-1047626 per older public filings, but **must be verified** | Likely FY2023 | [LIKELY] |
| 3 | **Norwalk Hospital Foundation, Inc.** | Norwalk Hospital | CT | Pre-merger separate entity; historically substantial endowment | **[UNVERIFIED]** | Likely FY2023 | [LIKELY] |
| 4 | **Vassar Brothers Medical Center Foundation** (may file as "Vassar Brothers Hospital Foundation, Inc." or be folded into a Health Quest successor) | Vassar Brothers Medical Center, Poughkeepsie | NY | Pre-merger Health Quest entity; major fundraising vehicle for the new Vassar Brothers patient pavilion ($545M project completed 2021) | **[UNVERIFIED]** | Likely FY2023 | [LIKELY] |
| 5 | **Health Quest Systems Foundation, Inc.** (may have been re-named or merged into Nuvance Health Foundation post-2019) | Health Quest system (NY side) | NY | Status uncertain — may have been wound down, may continue as a holding entity for legacy NY-side restricted funds | **[UNVERIFIED]** | Possibly still filing; possibly final filing 2019-2020 | [INFERRED] |
| 6 | **Northern Dutchess Hospital Foundation** | Northern Dutchess Hospital, Rhinebeck | NY | Pre-merger entity; smaller scale; status post-merger uncertain | **[UNVERIFIED]** | Likely filing if still separate | [INFERRED] |
| 7 | **Putnam Hospital Foundation** (Putnam Hospital Center Foundation) | Putnam Hospital Center, Carmel | NY | Pre-merger entity; status post-merger uncertain | **[UNVERIFIED]** | Likely filing if still separate | [INFERRED] |
| 8 | **Sharon Hospital Foundation** | Sharon Hospital, Sharon CT | CT | Pre-merger; small community hospital; foundation may have been consumed into Nuvance Health Foundation | **[UNVERIFIED]** | Possibly still filing; possibly merged | [INFERRED] |
| 9 | **New Milford Hospital Foundation** | New Milford Hospital | CT | Pre-merger; small; status uncertain | **[UNVERIFIED]** | Possibly still filing; possibly merged | [INFERRED] |

**Total entity count expected:** 5-9 separate 501(c)(3) entities still filing 990s, depending on how aggressively the post-merger consolidation has proceeded by May 2026.

**Methodological note for the verification step:** Searches on ProPublica should use both "Nuvance" and each predecessor name individually. Cause IQ's "related organizations" feature is the most reliable way to map the entity tree, because Nuvance Health's own 990 (the operating-company filing) will list its supporting organizations in Schedule R (Part II, "Identification of Related Tax-Exempt Organizations"). **Pulling Nuvance Health's Schedule R is the single most efficient way to get a complete entity list** and should be the first step of verification.

---

## 2. Contribution revenue trends (5-year)

### What we expect to find (structural prediction, to be refreshed with actual figures)

Health-system fundraising in the predecessor-institution constellation has had four major drivers in the FY2019-FY2024 window:

1. **The Vassar Brothers Medical Center new patient pavilion** — a ~$545M capital project completed in 2021. This was the largest single capital project in the merged system's history and would have driven significant philanthropy through the Vassar Brothers Medical Center Foundation in roughly the FY2017-FY2022 window. **[LIKELY]** — the project is documented in Nuvance Health press materials; the fundraising target/outcome should be searchable in HV Biz Journal, Poughkeepsie Journal, and Nuvance press releases.
2. **The Danbury Hospital expansion / cancer center** — ongoing capital projects on the Danbury campus drove WCHN fundraising in the late 2010s. **[INFERRED]**
3. **Pandemic-era contributions (FY2020-FY2021)** — every hospital foundation in the U.S. saw an emergency-giving spike in calendar 2020 (PPE funds, frontline-worker support funds). **[KNOWN — sector-wide pattern]**
4. **Post-merger transition friction (FY2020-FY2023)** — the WCHN-Health Quest merger plus integration challenges plus pandemic plus a contested attempted Sharon Hospital sale (later withdrawn) plus reported financial distress at Nuvance Health (the operating company) all reduce expected fundraising performance in this window. Nuvance Health (the operating entity) has had publicly reported operating losses; this generally depresses major-gift cultivation activity until institutional stabilization. **[KNOWN — Nuvance's financial distress was widely covered in 2023-2024 trade press]**

### Table 2 — Contribution revenue placeholder (to be populated from live 990 retrieval)

This table is the **target structure**; the orchestrator should fill the cells from ProPublica / Cause IQ pulls.

| Entity | FY2019 Pt VIII L1h | FY2020 | FY2021 | FY2022 | FY2023 | Trend notes |
|---|---|---|---|---|---|---|
| Nuvance Health Foundation (or successor umbrella) | $ — | $ — | $ — | $ — | $ — | (expect post-merger ramp / consolidation effects) |
| Danbury Hospital Development Fund | $ — | $ — | $ — | $ — | $ — | (expect mature flat-to-rising baseline) |
| Norwalk Hospital Foundation | $ — | $ — | $ — | $ — | $ — | (expect mature flat baseline) |
| Vassar Brothers Medical Center Foundation | $ — | $ — | $ — | $ — | $ — | (expect campaign-driven spike FY2019-2021 from the pavilion) |
| Health Quest Systems Foundation | $ — | $ — | $ — | n/a (if wound down) | n/a | (may show final-distribution filing) |
| Smaller community-hospital foundations | $ — | $ — | $ — | $ — | $ — | (expect $1-5M ranges, community-driven) |

**Specific line items to extract per entity per year:**
- **Part VIII Line 1h ("Total Contributions, gifts, grants, and similar amounts received")** — this is the headline contribution revenue figure
- **Part VIII Line 1a ("Federated campaigns")** — usually zero for hospital orgs
- **Part VIII Line 1b ("Membership dues")** — usually zero
- **Part VIII Line 1c ("Fundraising events")** — separates gala/event revenue from major-gift revenue
- **Part VIII Line 1d ("Related organizations")** — important: this captures inter-foundation transfers
- **Part VIII Line 1e ("Government grants")** — usually small for foundation orgs
- **Part VIII Line 1f ("All other contributions")** — the residual major-gift bucket
- **Part X ("Balance Sheet") Line 36 Net assets at year-end** — endowment scale signal
- **Schedule M ("Noncash Contributions")** — flags large non-cash gifts (real estate, securities, art) that signal sophisticated donors

### Structural expectation, in absence of live figures

**[INFERRED, sector-norm benchmark]** A regional 7-9 hospital health system on the WCHN+Health Quest scale would, in a typical (non-campaign) year, see consolidated contribution revenue across all foundation affiliates in roughly the **$15M-$40M range**. During a major capital campaign (such as the Vassar Brothers pavilion), peak year revenue could spike to **$50M-$100M**. The Nuvance Health Foundation system was not, as of mid-2025 public reporting, in a publicly announced active comprehensive campaign — meaning current contribution revenue is most likely in the **non-campaign baseline range** ($15-40M consolidated).

Two of Laura Eldridge's stated benchmarks — Memorial Sloan Kettering, Cleveland Clinic — raise $500M-$700M+ annually, with development staffs of 200-400 and decades of cultivation infrastructure. The order-of-magnitude gap between Nuvance's baseline and the $500M aspiration is the dominant strategic fact this analysis surfaces. **This gap is a known and explicit assumption baked into the spec (Section 1)** — not a finding the strategy work pretends to close. The strategy work is calibrated as a *transformational mega-gift play that contributes meaningfully* to the aspiration, with honest assessment of institutional gaps.

---

## 3. Largest disclosed gifts

### Schedule B (largest contributors) — not public

**[KNOWN — IRS regulation]** For 501(c)(3) organizations that are NOT private foundations, **Schedule B (Schedule of Contributors) is NOT made public** by the IRS. ProPublica, Cause IQ, and GuideStar all redact Schedule B for public charities (which all of the Nuvance-related foundation entities are). This means **we cannot get the largest reported donor names directly from the 990s**. We must instead cross-reference:

1. **Donor walls** at each hospital — physical recognition in lobbies, atria, named rooms
2. **Annual reports and honor rolls** — published on hospital foundation websites
3. **News announcements of named gifts** — local press releases when a wing, chair, center, or program is named
4. **Building/wing names** — anything named after a person or family is the public record of a major gift
5. **Schedule I on RELATED private foundations** — if one of the major donor families gives via their own private family foundation (a separate 990-PF filer), that foundation's Schedule I lists every grant paid by dollar amount and recipient. **This is the back-door into hospital giving visibility** and is the highest-yield method for identifying ≥$1M Nuvance donors.

### Cross-reference targets — to populate during verification

The orchestrator should search the following for named-gift announcements and produce a chronological list:

- **Nuvance Health Foundation press-release archive** (nuvancehealth.org/foundation pressroom)
- **Poughkeepsie Journal archives** — Vassar Brothers gift coverage
- **News-Times (Danbury)** — Danbury Hospital gift coverage
- **The Hour (Norwalk)** — Norwalk Hospital gift coverage
- **Hudson Valley Magazine / HV Biz Journal** — major-gift coverage
- **CT Insider / Connecticut Post** — Western CT gift coverage
- **Lakeville Journal** — Sharon Hospital coverage
- **The Chronicle (Millbrook)** — Northern Dutchess coverage

### Specific named-gift anchors (training-cutoff knowledge)

**[INFERRED / UNVERIFIED]** Several named family/donor signals are visible from the predecessor institutions' history and should be the starting search list:

- **Vassar Brothers naming convention** — Matthew Vassar (the brewer, founder of Vassar College) family ties into Vassar Brothers Medical Center's founding. Vassar College connections may extend to current Vassar family descendants in Dutchess County. **[INFERRED — needs verification of any modern Vassar-descendant gifts.]**
- **Danbury Hospital — Praxair / Praxair Foundation history** — Praxair (the industrial gas company, historically headquartered in Danbury area) and its successor Linde plc have historically given to Danbury Hospital. **[INFERRED]**
- **Norwalk Hospital — Whittingham Cancer Center** — the cancer center is named for the Whittingham family. **[LIKELY — verifiable via Nuvance website naming]**
- **Vassar Brothers — Dyson Family** — the Dyson family (Robert R. Dyson, Lehman Brothers-era financier; Dyson Foundation; Millbrook NY) are documented major donors in Dutchess County across many institutions and a near-certain Vassar Brothers donor; the Dyson Foundation 990-PF is the most important cross-reference target. **[LIKELY]**
- **Vassar Brothers — Heinz family / Teresa Heinz / Howard Heinz Endowment** — secondary residence patterns suggest possible giving; needs verification. **[SPECULATIVE]**

### Largest single gifts — to be populated from news cross-reference

| Gift announcement date | Donor (family/individual/foundation) | Recipient entity | Amount | What it named | Source URL | Confidence |
|---|---|---|---|---|---|---|
| (populate) | (populate) | (populate) | (populate) | (populate) | (populate) | (populate) |

**Specific gifts that the news cross-reference should find:**
- Vassar Brothers patient pavilion lead gifts (2018-2021 window) — anything ≥$10M would have been press-released
- Whittingham Cancer Center founding gift and any subsequent named-room gifts
- Any Danbury Hospital cardiac, neurosciences, or oncology naming gifts
- Sharon Hospital community-rescue gifts (Sharon almost closed in 2022; community fundraising response was substantial)

---

## 4. Donor-base composition observations

### Geographic anchoring — the dominant observation

**[KNOWN — corroborated across multiple lines of evidence]** Nuvance Health's service area is one of the wealthiest commuter belts in the United States. The donor base composition is overwhelmingly shaped by this:

- **Fairfield County, CT** (Danbury, Norwalk, Stamford-adjacent) — hedge-fund corridor wealth, finance executives, second-generation business owners; some of the highest median household incomes in the U.S. (Greenwich, New Canaan, Darien — though those municipalities are primarily served by Greenwich Hospital / Stamford Health, not Nuvance)
- **Dutchess County, NY** (Poughkeepsie, Rhinebeck, Millbrook) — older-money estate country; multigenerational family-foundation wealth (the Dyson Foundation is the anchor example); also serves the IBM-Poughkeepsie executive base historically
- **Putnam County, NY** — exurban; mixed wealth profile
- **Litchfield County, CT** (Sharon, New Milford) — second-home country for NYC-based wealth; "weekenders" with primary residences in Manhattan, secondary in northwestern CT
- **Western Massachusetts spillover** — small but real (Sharon Hospital draws from western Mass via SR41/SR44 corridor)

**Donor-base composition pattern** (inferred from this geography):

1. **Multigenerational family-foundation donors** — old-money Dutchess and Litchfield County families giving via family foundations (the Dyson Foundation pattern). These show up in 990-PF Schedule I of family foundations and in donor walls. **[LIKELY DOMINANT in the Vassar Brothers / Northern Dutchess / Sharon constituencies.]**
2. **Grateful-patient business-executive donors** — finance executives in Fairfield County who had a hospital experience at Danbury or Norwalk. **[LIKELY DOMINANT in the Danbury / Norwalk constituencies.]**
3. **Local business / closely held company owners** — regional manufacturing, construction, services families (the Praxair-era Danbury industrial network historically; closely held businesses across the service area). **[LIKELY SECONDARY]**
4. **Foundation board members** — typical hospital foundation pattern: board members are themselves the largest individual donors and the lead solicitors of their peers. The 990 Part VII listing of officers and directors is the highest-leverage research target — every name on that list is either a current major donor, a prospective major donor, or a connector to one. **[KNOWN sector pattern]**

### What the donor base is *not*

- **Not a national billionaire base.** Nuvance Health is not New York-Presbyterian, MSK, or Mayo. It does not draw national-name-recognition mega-gifts from coast-to-coast philanthropists. Its donor base is overwhelmingly regional. **[KNOWN]**
- **Not (yet) a centi-millionaire / billionaire-class donor base in depth.** The history of the predecessor institutions suggests a strong $100K-$5M giving base with sporadic $5M-$25M lead gifts on capital projects, but **no documented history of any single gift ≥$50M** to a Nuvance predecessor (the kind of gift that would have been press-released nationally). **[INFERRED — to be verified by the news cross-reference; the absence of such a gift is itself the finding.]**
- **Not strongly diversified by gift vehicle.** Most regional hospital foundations of this scale see ~80% of major-gift revenue from outright cash/securities gifts and ~20% from charitable trusts, gift annuities, and DAF distributions. The DAF-distribution channel and the family-foundation-grant channel are the two highest-leverage cultivation targets for this strategy. **[KNOWN sector pattern]**

### Specific multigenerational family signals to verify

The orchestrator's predecessor-institutions task (Task 0.4, running in parallel) is more focused on these signals. From the 990 perspective, the relevant cross-references are:
- Whether the same family/foundation name appears as a donor (via Schedule I of their own foundation 990-PF) to multiple Nuvance predecessor entities across multiple years
- Whether board service (Part VII) shows the same surname recurring across generations

---

## 5. Foundation staffing

### Form 990 Part VII — Officers, Directors, Trustees, Key Employees

**[INFERRED — to be verified from live filing pull]** The Nuvance Health Foundation 990 Part VII should list approximately 15-25 individuals across these categories:

- **Officers** (President, Treasurer, Secretary, Vice Presidents — typically 4-6 named)
- **Directors / Trustees** (governance board — typically 12-20 named)
- **Key Employees** (≥$150K compensation employees not otherwise officers — typically 2-5 named at this foundation scale; this is where senior development staff appear)
- **Highest Compensated Employees** (top-5 non-officer non-key-employee employees ≥$100K)

### Laura Eldridge's appearance

**[EXPECTED, to be verified]** Laura Eldridge, CFRE, should appear in Part VII of the most recent Nuvance Health Foundation 990. Her title is reported externally as a senior development role at Nuvance Health Foundation (the spec describes her as a CFRE working a portfolio of ~250 billionaire prospects with a $500M/year stated institutional fundraising aspiration). Possible titles on the 990:

- **Chief Development Officer** or **CDO, Nuvance Health Foundation**
- **Vice President for Development, Major Gifts**
- **Senior Vice President of Philanthropy**
- **Executive Director, Nuvance Health Foundation**

**[UNVERIFIED]** — her exact 990-reported title and the foundation's reporting hierarchy (does she report to a Foundation President separate from the Nuvance Health system CEO?) must be confirmed from the live filing.

### Foundation President / Executive Director

**[INFERRED]** Most regional health-system foundations have either:
- A **Foundation President** who is a development professional reporting to the system CEO (sometimes with a dotted line to a Foundation Board Chair), OR
- A **Foundation Executive Director** under a System Chief Development Officer who is the senior philanthropy executive

**[UNVERIFIED]** Nuvance Health Foundation's specific structure should be confirmed. The Foundation President is a critical figure in the strategy because (a) they are Laura's immediate or near-immediate manager, (b) they are a co-solicitor on lead gifts of $10M+, and (c) they typically have the closest peer relationships with the Foundation Board Chair and major donor families.

### Board composition — what to extract

For each of the 15-20 directors listed on Part VII, capture:
- **Name** (and any "Jr." / "III" generational markers — multigenerational donor families)
- **Title elsewhere** (for-profit company, other nonprofit boards)
- **Residence** (often visible via cross-referenced sources — gives geographic anchor)
- **Compensation reported as Director** (typically $0 for governance directors at a foundation; ≠$0 is a flag worth examining)
- **Hours/week reported** (Part VII Column B — flags engaged vs. nominal directors)
- **Term start year** if discoverable (turnover patterns visible across 3 years of filings)

Every director name should be cross-referenced against:
- Forbes 400, Bloomberg Billionaires Index, Forbes lists generally (large public-company executives)
- ProPublica search for the director's own private foundation (many wealthy board members give via family foundations)
- LinkedIn (for residence and other board service)
- News archives for any announced personal gift to Nuvance or any predecessor

**Sector-norm expectation:** Of the typical 15-20 person Nuvance Health Foundation Board, roughly **half will be either past major donors themselves (≥$100K cumulative) or current/past officers of family foundations that have given to a Nuvance predecessor**. These are the warm-intro nodes for the Phase 5 network map (Artifact 2 — warm-intro network).

### CEO and senior-leadership signal

The system-level CEO (Nuvance Health, the operating entity) typically does not appear on the Foundation 990 unless he/she sits on the Foundation Board ex officio. The Foundation's relationship to the system CEO is governed by formal documents; the CEO is the closer-of-last-resort on $25M+ asks. **[KNOWN sector pattern]** Nuvance Health (the operating entity) had publicly reported leadership transitions during 2023-2024 — confirming the current CEO is critical (the parallel "institutional overview" subagent task should provide this).

---

## 6. Implications for our work

This section is the **load-bearing output** for the strategy work. The numerical figures matter less than these conclusions, all of which stand even after the live 990 figures are refreshed.

### Conclusion 1 — Nuvance's existing donor base is regional, not national. The 10-candidate strategy must lean heavily on the affinity-first frame the spec already commits to.

The implication for the 10 candidates is **not** "find 10 national billionaires and pitch them on Nuvance." That play has very low conversion probability against this institutional baseline. The implication **is** "find 10 wealth-tier-appropriate candidates whose affinity to Nuvance or a predecessor institution is independently documented." The spec is already calibrated this way (Section 2 — Strategic approach), and this 990 analysis ratifies that calibration. **[HIGH CONFIDENCE]**

### Conclusion 2 — Centi-millionaires probably outperform billionaires for this institution.

A typical Nuvance-predecessor mega-gift to date appears to be in the $5M-$25M range (to be confirmed by news cross-reference). For a centi-millionaire ($300M-$999M net worth), a $25M gift is 2.5%-8% of their reported net worth — a **plausible flagship gift**. For a billionaire ($1B+), a $25M gift is 0.5%-2.5% — a **modest gift relative to their giving capacity**, and they will generally direct flagship gifts to flagship institutions (NYP, MSK, Stanford, etc.). The math directly supports the spec's calibration of 4-5 billionaires + 5-6 centi-millionaires. **[HIGH CONFIDENCE — math, not opinion]**

### Conclusion 3 — The Dutchess County / Vassar Brothers constituency is probably the highest-leverage research target.

Three converging signals support this:
- Vassar Brothers has the largest recent capital project ($545M pavilion) → biggest active cultivation infrastructure
- Dutchess County / Mid-Hudson has the densest concentration of multigenerational family-foundation wealth in the Nuvance service area (the Dyson Foundation as anchor; many smaller family foundations in Millbrook/Rhinebeck/Hyde Park orbit)
- Family-foundation giving is the most visible-via-public-records giving vehicle (990-PF Schedule I), making this constituency the most efficient to research

The Long-list and Short-list phases should disproportionately mine this constituency. **[HIGH CONFIDENCE]**

### Conclusion 4 — Hedge-fund-corridor wealth (Fairfield County) is a tempting but lower-conversion target.

Greenwich/New Canaan/Darien hedge-fund principals have enormous wealth but **most of them are patients at Greenwich Hospital (Yale-New Haven affiliate) or Stamford Health, not Danbury or Norwalk**. The Nuvance service area in Fairfield County is the **less-affluent northern half** (Danbury, Bethel, Newtown, Brookfield, New Milford). Hedge-fund principals with Litchfield/Berkshire weekend homes are a more credible target than full-time Greenwich residents. **[HIGH CONFIDENCE]**

### Conclusion 5 — Institutional case-for-support gap is significant and must be acknowledged.

The contribution revenue gap between Nuvance's likely current baseline (~$15-40M consolidated) and the $500M aspiration is roughly **12x-30x**. No amount of donor-prospecting closes that gap; it requires institutional case-for-support upgrades that are out of scope for this engagement but **must be flagged honestly** in the playbook (Section E — Gift table). The 10-candidate strategy is most credibly framed as: **"This is a transformational mega-gift play that, if it lands 2-3 of the 10, contributes $75M-$200M toward the institutional aspiration over a 3-5 year window. The remaining $300M+/year would require a comprehensive case-for-support upgrade, multi-year campaign scaffolding, and significantly expanded development infrastructure that this engagement does not provide."** **[HIGH CONFIDENCE — this is the spec's own stance]**

### Conclusion 6 — Foundation Board roster is the single highest-leverage starting point for the warm-intro network (Artifact 2).

Every name on the Nuvance Health Foundation Board's Part VII listing is potentially: (a) a past donor in their own right, (b) a connector to peer wealth, (c) a co-solicitor for the right candidate match. The board roster should be the **first list pulled** during Phase 1 (long-list generation) and the **anchor list** for the warm-intro network (Artifact 2). **[HIGH CONFIDENCE]**

### Conclusion 7 — Pull Schedule R from Nuvance Health (operating entity) first.

The most efficient single retrieval action for the orchestrator's verification pass is to pull **Nuvance Health's own 990 Schedule R** (Identification of Related Tax-Exempt Organizations), which will list every foundation affiliate with EINs. That single pull resolves most of Section 1 above. **[ACTIONABLE — recommend the orchestrator start verification here]**

---

## 7. To-verify checklist (for orchestrator's live re-run pass)

Numbered in optimal retrieval order:

1. **Pull Nuvance Health (operating entity) 990 → Schedule R Part II** — completes Section 1's entity table including EINs and confirms which predecessor foundations still file
2. **Pull Nuvance Health Foundation (umbrella) most recent 990** — completes Section 2 (Part VIII Line 1h trend), Section 5 (Part VII officer listing), and identifies Laura Eldridge's exact title
3. **Pull each separately filing predecessor foundation 990** (Danbury Development Fund, Norwalk, Vassar Brothers, Health Quest if still filing, Sharon if still filing) — completes Section 2 entity-by-entity figures
4. **Pull each foundation's 5 most recent 990s** — completes the 5-year trend table in Section 2
5. **Cross-reference Dyson Foundation 990-PF Schedule I** for all years FY2018-FY2023 — captures the largest probable single recurring institutional donor
6. **Search Nuvance Health Foundation press releases** (nuvancehealth.org) for any "$X million gift" announcements 2019-2026 — completes the largest-single-gifts table in Section 3
7. **Cross-reference news archives** (Poughkeepsie Journal, News-Times Danbury, The Hour Norwalk, CT Insider, HV Biz Journal) for named-gift announcements
8. **Pull each board member's name** from Part VII and cross-reference against ProPublica for their own private foundations
9. **Compare director residence patterns** across the 3 most recent 990s to detect board turnover

---

## 8. Sources

See `/Users/marksenerth/_src/eldridge_research/sources/_pending_0_3.md` for the full source list with retrieval dates. Note: because live web access was unavailable, the pending sources list documents the **intended retrieval targets** rather than completed retrievals. The orchestrator should replace these with actual retrieved-URL entries once the verification pass is complete.

### Key training-data references underpinning this analysis (not URLs):

- General knowledge of the 2019 WCHN-Health Quest merger (publicly reported in CT and NY business press at the time)
- General knowledge of the Vassar Brothers Medical Center new patient pavilion project, ~$545M, opened 2021 (Nuvance press releases at the time)
- General knowledge of Nuvance Health operating financial distress reported in 2023-2024 trade press (Modern Healthcare, Becker's Hospital Review)
- General knowledge of the Sharon Hospital sale attempt (later withdrawn) controversy 2022-2023 (CT trade press)
- General knowledge of the Dyson Foundation's role as the dominant family foundation in Dutchess County (NY philanthropy reporting; the foundation's own annual reports)
- IRS Form 990 reporting structure (general)
- Sector benchmarks for regional health-system foundation fundraising volumes (national hospital-foundation benchmarking reports — AHP, CASE)

### Confidence summary

- Section 1 (entities): **mid-confidence as a list, low-confidence on specific EINs** (must be verified)
- Section 2 (revenue trends): **structural prediction high-confidence, specific figures unverified**
- Section 3 (largest gifts): **methodology high-confidence, named gifts unverified**
- Section 4 (donor-base composition): **high-confidence on the geography-driven characterization, specific family names mostly unverified**
- Section 5 (staffing): **structural high-confidence, specific titles and names unverified**
- Section 6 (implications): **high-confidence — these conclusions are robust to refresh of underlying figures**
