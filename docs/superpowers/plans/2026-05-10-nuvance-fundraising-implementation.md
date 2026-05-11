# Nuvance Health Major-Gift Strategy — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a comprehensive eight-artifact research and strategy package for Laura Eldridge's major-gift work at Nuvance Health Foundation: 10 candidate dossiers, warm-intro network map, benchmarking memo, per-candidate cheat sheets, ranked short-list, tailored strategy playbook, executive summary, and a designed presentation deck.

**Architecture:** Eight sequential phases with two parallel tracks (Phase 4 benchmarking runs alongside Phase 3 dossier work). Affinity-first methodology, calibrated wealth tiers (4-5 billionaires + 5-6 centi-millionaires = 10 total). Per-candidate research follows a master Dossier Template (Appendix A) so each candidate task is self-contained for agentic execution. Explicit checkpoints with the project owner (Mark) pause execution for review at five critical decision points before heavy-effort work begins.

**Tech Stack:** Markdown for research artifacts. HTML + CSS + minimal JS (D3 or vis-network) for the warm-intro network map visualization. HTML + CSS for the presentation deck (built using the `frontend-design` skill). Git for version control. Web search and web fetch for primary-source retrieval (Forbes, Bloomberg, SEC EDGAR, ProPublica Nonprofit Explorer, news archives, LinkedIn, 990 filings).

**Spec reference:** `docs/superpowers/specs/2026-05-10-nuvance-fundraising-strategy-design.md`

---

## File Structure

The full directory layout that this plan produces:

```
eldridge_research/
├── docs/
│   └── superpowers/
│       ├── specs/2026-05-10-nuvance-fundraising-strategy-design.md   # input (spec)
│       └── plans/2026-05-10-nuvance-fundraising-implementation.md    # this file
├── research/
│   ├── phase_0_institutional_context/
│   │   ├── nuvance_overview.md
│   │   ├── nuvance_990_analysis.md
│   │   ├── predecessor_institutions.md
│   │   ├── naming_opportunities.md
│   │   └── case_for_support_audit.md
│   ├── phase_1_long_list/
│   │   ├── screening_methodology.md
│   │   └── long_list.md
│   ├── phase_2_short_list/
│   │   └── short_list.md
│   └── phase_4_benchmarking/
│       ├── case_studies/01_*.md ... 12_*.md
│       └── benchmarking_memo.md
├── dossiers/
│   └── 01_*.md ... 10_*.md
├── artifacts/
│   ├── ranked_short_list.md                  # Artifact 5 (final)
│   ├── cross_reference_matrix.md             # Artifact 5 supplement
│   ├── intro_network_map/                    # Artifact 2
│   │   ├── index.html
│   │   ├── style.css
│   │   └── network_data.json
│   ├── cheat_sheets/01_*.md ... 10_*.md      # Artifact 4
│   ├── playbook.md                            # Artifact 6
│   ├── executive_summary.md                  # Artifact 7
│   └── deck/                                  # Artifact 8
│       ├── index.html
│       ├── style.css
│       ├── deck.js
│       └── assets/
└── sources/
    └── source_index.md                        # Master citation index
```

**File-responsibility map:**

- `research/phase_0_*/*.md` — internal context documents; not delivered to Laura but underpin all later work
- `research/phase_1_long_list/long_list.md` — scored long list of 40-60 candidates (intermediate artifact)
- `research/phase_2_short_list/short_list.md` — final 10 candidates with paragraph rationales (intermediate)
- `research/phase_4_benchmarking/case_studies/NN_*.md` — one case study per comparable mega-gift studied
- `research/phase_4_benchmarking/benchmarking_memo.md` — synthesis memo (Artifact 3)
- `dossiers/NN_<slug>.md` — full 6-8 page dossier per candidate (Artifact 1)
- `artifacts/*` — final deliverables to Laura
- `sources/source_index.md` — master index of every source cited, with retrieval date, to support verification

---

## Quality Standards (apply to every research task)

Every research artifact must meet these standards before commit:

1. **Every factual claim cites a source.** Format: `[claim] (source: URL or filing identifier, retrieved YYYY-MM-DD)`. No "reportedly" or unsourced assertions.
2. **Wealth, giving history, and affinity claims are triangulated.** Each must be confirmed by at least two independent sources, or explicitly flagged as single-source with the implication called out.
3. **Confidence labels are explicit.** Each major claim is tagged `(known)`, `(inferred)`, or `(unknown)`. "Inferred" claims include the inferential chain.
4. **Negative findings are reported.** When research finds *no* evidence of something expected, that absence is reported, not omitted.
5. **All sources added to `sources/source_index.md`** with a stable URL or filing identifier, retrieval date, and brief description.

---

## Checkpoints

Five checkpoints pause execution for Mark's review before heavy-effort downstream work:

- **Checkpoint A (after Phase 0):** Case-for-support audit findings reviewed
- **Checkpoint B (after Phase 1):** Long list reviewed; names added/removed
- **Checkpoint C (after Phase 2):** Final 10 short-list approved
- **Checkpoint D (after Phase 3 sample, 2 dossiers):** Format/depth/emphasis approved before remaining 8
- **Checkpoint E (after Phase 6):** Playbook draft reviewed before final polish

When execution reaches a checkpoint, the executing agent halts and posts the artifact for review.

---

## Parallelization Strategy

This plan is designed for heavy parallelization. Most research work is embarrassingly parallel: each candidate's dossier is independent, each benchmarking case study is independent, each playbook section is independent. The orchestrating agent should use `superpowers:dispatching-parallel-agents` and the `Agent` tool (typically `subagent_type: general-purpose` or `Explore`) to dispatch parallel subagents for each batch below.

### Realistic time impact

- **Sequential execution:** 6-10 weeks
- **Parallelized execution (8-12 subagents in peak batches):** 1.5-3 weeks
- The bottlenecks are (a) the 5 sequential checkpoints, (b) synthesis tasks that require all parallel work to complete first, and (c) human review time at each checkpoint

### Dispatch rules for parallel batches

1. **Each parallel task must be self-contained.** Subagents start with no shared memory. The Appendices (A, B, C) are the self-contained templates each parallel subagent reads.
2. **Each parallel dispatch tells the subagent:** which unit of work (candidate / case study / section), which Appendix to follow, which prior-phase files to read first, the exact output file path, the commit message.
3. **Quality standards apply equally to every parallel subagent.** Every subagent runs the standard verification at the end (sources cited, triangulation, confidence labels, source-index update).
4. **Coordinator merges and reviews after each batch.** After each parallel batch completes, the orchestrating agent runs a brief consistency check (Tasks 3.4 for dossiers, equivalent for other batches) before proceeding.

### Batch map

| Batch | Tasks | Parallelism | Subagent count | Dependencies (must complete first) |
|-------|-------|-------------|----------------|-------------------------------------|
| **Batch 0.A** | 0.2, 0.3, 0.4, 0.5 | 4-way parallel | 4 | 0.1 (directory setup) |
| 0.6 | sequential | 1 | Batch 0.A |
| 0.7 (Checkpoint A) | sequential — human review | 0 | 0.6 |
| 1.1 | sequential | 1 | Checkpoint A |
| **Batch 1.B** | 1.2 split: Forbes / Bloomberg / hedge fund / local rich list / foundation 990-PF screens | 5-way parallel | 5 | 1.1 |
| 1.2 aggregation | sequential merge | 1 | Batch 1.B |
| **Batch 1.C** | 1.3 split: affinity-score candidate batches of 10-15 per subagent | 6-10-way parallel (size depends on pool) | 6-10 | 1.2 aggregation |
| 1.3 aggregation | sequential merge | 1 | Batch 1.C |
| 1.4 (Checkpoint B) | sequential — human review | 0 | 1.3 aggregation |
| **Batch 2.A** | 2.1 split: deeper-dive on top 20 in batches of 5 per subagent | 4-way parallel | 4 | Checkpoint B |
| 2.2 | sequential synthesis | 1 | Batch 2.A |
| 2.3 (Checkpoint C) | sequential — human review | 0 | 2.2 |
| **Batch 3.A** | 3.1 split: sample dossiers for ranks #1 and #2 | 2-way parallel | 2 | Checkpoint C |
| 3.2 (Checkpoint D) | sequential — human review | 0 | Batch 3.A |
| **Batch 3.B** | 3.3 split: dossiers for ranks #3-#10, one subagent per candidate | 8-way parallel | 8 | Checkpoint D |
| 3.4 | sequential consistency review | 1 | Batch 3.B |
| **Batch 4.A** | 4.2 split: benchmarking case studies, one subagent per case | 8-12-way parallel | 8-12 | 4.1 |
| | *(Batch 4.A can also run in parallel with Batches 3.A and 3.B)* | | | |
| 4.3 | sequential synthesis | 1 | Batch 4.A |
| 5.1 | sequential (one synthesis task across 10 dossiers) | 1 | Batch 3.B + 3.4 |
| 5.2 | sequential (HTML/CSS/JS coding task) | 1 | 5.1 |
| **Batch 5.A** | 5.3 split: cheat sheets, one subagent per candidate | 10-way parallel | 10 | 3.4 |
| 5.4 | sequential synthesis | 1 | 3.4 |
| **Batch 6.A** | 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7 — one subagent per playbook section | 7-way parallel | 7 | Phases 0-5 complete |
| 6.8 (Checkpoint E) | sequential — human review | 0 | Batch 6.A |
| 6.9 | sequential polish | 1 | Checkpoint E |
| **Batch 7.A** | 7.1 (exec summary), 7.2 (ranked short list), 7.3 (deck) | 3-way parallel | 3 | 6.9 |
| 7.4 | sequential final review | 1 | Batch 7.A |

### Concurrency considerations

- **Phase 3 + Phase 4 can run concurrently.** The most aggressive schedule dispatches Batch 3.B (8 dossier subagents) and Batch 4.A (8-12 case study subagents) simultaneously — up to 20 parallel subagents at peak. Limit by available concurrency budget.
- **Source-index conflicts.** When parallel subagents both want to add to `sources/source_index.md`, conflicts can arise. Resolution: each subagent writes a **per-batch source addendum** (e.g., `sources/_pending_batch_3B_dossier_05.md`) and the orchestrator merges these into `source_index.md` at batch completion.
- **Git conflicts.** Parallel subagents committing to the same repo can conflict. Two options:
  1. **Worktrees:** Each subagent operates in a separate git worktree, then orchestrator merges. Use `superpowers:using-git-worktrees`.
  2. **No-commit subagents:** Subagents produce their artifact files but do NOT commit. Orchestrator commits after batch completes. Simpler but less granular history.

  **Recommendation:** No-commit subagents for Batches 0.A, 1.B, 1.C, 2.A, 5.A, 6.A, 7.A (file outputs only). Worktrees for Batches 3.A, 3.B, 4.A (the heaviest research batches where granular commits per dossier / case study matter).

- **Cost budget.** Parallel dispatch is expensive. The heaviest batches (3.B with 8 subagents, 4.A with 8-12) will each cost roughly 8-12x a single dossier's cost. Budget accordingly.

---

# Phase 0 — Institutional context & case-for-support audit

Foundation phase. Establishes what Nuvance is actually raising for; underpins all candidate-fit analysis.

### Task 0.1: Set up project directory structure

**Files:**
- Create: directory tree per the File Structure section above

- [ ] **Step 1: Create the full directory tree**

Run:
```bash
cd /Users/marksenerth/_src/eldridge_research
mkdir -p research/phase_0_institutional_context \
         research/phase_1_long_list \
         research/phase_2_short_list \
         research/phase_4_benchmarking/case_studies \
         dossiers \
         artifacts/intro_network_map \
         artifacts/cheat_sheets \
         artifacts/deck/assets \
         sources
```

- [ ] **Step 2: Initialize the source index file**

Create `sources/source_index.md` with this content:

```markdown
# Source Index

Master index of every external source cited in this project. Every research artifact references entries here.

Format: `[ID] [Title] — [URL or identifier] — [retrieved YYYY-MM-DD] — [brief description]`

Sources will be added as research proceeds.

## Sources

(none yet)
```

- [ ] **Step 3: Verify directory tree**

Run: `find . -type d -not -path "./.git*" | sort`

Expected output should include all directories created in Step 1.

- [ ] **Step 4: Commit**

```bash
git add research/ dossiers/ artifacts/ sources/
git commit -m "Set up project directory structure and source index"
```

### Task 0.2: Nuvance Health overview research

**Files:**
- Create: `research/phase_0_institutional_context/nuvance_overview.md`

- [ ] **Step 1: Define success criteria for this artifact**

The overview must answer:
1. What is Nuvance Health structurally? (legal entity, parent org, merger history)
2. What are the constituent hospitals/facilities, and where are they located?
3. What is the system's clinical service profile (specialties, signature programs, research footprint)?
4. Who is the current leadership team (CEO, CMO, foundation president/director)?
5. What is the most recent reported annual revenue and patient volume?
6. What strategic initiatives are publicly announced (capital projects, expansions, mergers)?
7. What recent news (past 24 months) is relevant to fundraising context (controversies, accolades, leadership changes, financial news)?

- [ ] **Step 2: Conduct primary-source research**

Use web search and web fetch on:
- `https://www.nuvancehealth.org/` (main site)
- `https://www.nuvancehealth.org/about-us` and similar org pages
- Nuvance Health Foundation pages
- News searches: "Nuvance Health" past 24 months (filter by date)
- LinkedIn search for "Nuvance Health" leadership
- Wikipedia entry for "Nuvance Health" (use cautiously, verify against primary sources)

- [ ] **Step 3: Write the overview document**

Create `research/phase_0_institutional_context/nuvance_overview.md` with these sections, every claim cited:

```markdown
# Nuvance Health — Institutional Overview

**Compiled:** YYYY-MM-DD
**Purpose:** Internal context document for the major-gift strategy project. Not for external distribution.

## 1. Structure and history
(legal entity, parent org, merger history of Western CT Health Network + Health Quest)

## 2. Constituent facilities
(each hospital named, location, bed count if available, specialty focus)

## 3. Clinical service profile
(specialty programs, signature offerings, research footprint, academic affiliations if any)

## 4. Leadership
(CEO, CMO, foundation president/director, board chair, recent leadership transitions)

## 5. Financials
(most recent annual revenue, patient volume, payer mix if disclosed, operating margin)

## 6. Strategic initiatives
(announced capital projects, expansions, technology investments, growth strategy)

## 7. Recent news (past 24 months)
(major announcements, leadership changes, controversies, accolades, financial events)

## 8. Sources
(numbered list, each entry referencing source_index.md)
```

- [ ] **Step 4: Update source index**

For every source used in Step 2-3, add an entry to `sources/source_index.md`.

- [ ] **Step 5: Verify against quality standards**

Confirm:
- Every factual claim has an inline citation
- Wealth/revenue numbers triangulated against ≥2 sources where possible (annual report + news, or 990 + news)
- Any "single-source" claim is flagged
- Confidence labels applied where relevant

- [ ] **Step 6: Commit**

```bash
git add research/phase_0_institutional_context/nuvance_overview.md sources/source_index.md
git commit -m "Phase 0: Nuvance Health institutional overview"
```

### Task 0.3: Nuvance Health Foundation 990 analysis

**Files:**
- Create: `research/phase_0_institutional_context/nuvance_990_analysis.md`

- [ ] **Step 1: Define success criteria**

The 990 analysis must determine:
1. The EIN(s) and exact legal name(s) of Nuvance Health Foundation entities (there may be several — system foundation, hospital-level foundations from predecessor institutions)
2. Annual contribution revenue trends over the last 5 years where available
3. Largest reported donors where 990 Schedule B is accessible
4. Largest single gifts disclosed (often noted in annual reports or news)
5. Existing major-donor base composition (signal: are existing donors local, regional, or national; old-money vs. new-money; healthcare-affinity-driven or community-driven)
6. Foundation staffing/structure (per Form 990 Part VII)

- [ ] **Step 2: Retrieve 990 filings**

Use ProPublica Nonprofit Explorer (`https://projects.propublica.org/nonprofits/`) and Cause IQ (`https://www.causeiq.com/`):
- Search "Nuvance Health Foundation"
- Also search "Vassar Brothers Medical Center" foundation, "Danbury Hospital" foundation, "Norwalk Hospital" foundation, "Health Quest" foundation (predecessor entities may still exist as separate 501(c)(3)s)
- Retrieve the most recent available Form 990 for each entity
- Note the filing year (likely 2 years lagged)

- [ ] **Step 3: Extract key data per filing**

For each 990 retrieved, capture in a structured table:
| Entity | EIN | Filing Year | Total Revenue | Contribution Revenue | Largest Gifts (Sch B if public) | Top Officers |

- [ ] **Step 4: Write the analysis document**

Create `research/phase_0_institutional_context/nuvance_990_analysis.md`:

```markdown
# Nuvance Health Foundation — 990 Analysis

**Compiled:** YYYY-MM-DD
**Purpose:** Internal context for major-gift strategy. Maps the existing donor base and the foundation's recent fundraising performance.

## 1. Legal entities identified
(list of foundation 501(c)(3) entities, with EIN, related hospital/system, year established)

## 2. Contribution revenue trends (5-year)
(table showing annual contributions over time; note any obvious campaign-driven spikes)

## 3. Largest disclosed gifts
(where Schedule B is accessible, list named largest contributors; otherwise note that Schedule B is not public for hospital orgs but cross-reference any gifts noted in annual reports / news)

## 4. Donor-base composition observations
(based on annual report donor lists, news of named gifts, any patterns visible — geographic, multigenerational families, business-affiliated, grateful-patient program tier)

## 5. Foundation staffing
(per Form 990 Part VII — Laura's title if listed, foundation president/director, board composition)

## 6. Implications for our work
(brief: what does this tell us about Nuvance's current donor base that informs candidate fit, and what gaps exist — e.g., few national billionaires, mostly Hudson Valley families, or vice versa)

## 7. Sources
```

- [ ] **Step 5: Update source index**

Add every 990 filing and supplementary source to `sources/source_index.md` with filing year and retrieval date.

- [ ] **Step 6: Verify against quality standards**

Confirm:
- All numbers cited to specific 990 line items
- Predecessor-entity foundations explicitly searched even if no separate entity found
- Implications section labeled `(inferred)` clearly

- [ ] **Step 7: Commit**

```bash
git add research/phase_0_institutional_context/nuvance_990_analysis.md sources/source_index.md
git commit -m "Phase 0: Nuvance Health Foundation 990 analysis"
```

### Task 0.4: Predecessor-institution legacy mapping

**Files:**
- Create: `research/phase_0_institutional_context/predecessor_institutions.md`

- [ ] **Step 1: Define success criteria**

For each predecessor institution (Western CT Health Network, Health Quest, Vassar Brothers Medical Center, Danbury Hospital, Norwalk Hospital, Sharon Hospital, Northern Dutchess Hospital, Putnam Hospital, New Milford Hospital), the analysis must capture:
1. Founding history and major donor families historically associated with that institution
2. Named buildings, wings, programs, and chairs (indicating prior major-gift donor names — sometimes those families still give)
3. Past capital campaigns and their reported outcomes
4. Multigenerational donor patterns (where a family name appears across decades)
5. Predecessor-foundation board members where publicly known

- [ ] **Step 2: Research each predecessor institution**

For each institution:
- Visit current Nuvance pages referencing that facility
- Search the institution's historical website (Wayback Machine: `https://web.archive.org/`) for older annual reports and donor lists
- Search news archives for capital campaign announcements, building dedications, named gifts
- For older institutions, look for institutional histories (often published as books or booklets for centennials)

- [ ] **Step 3: Write the legacy mapping document**

Create `research/phase_0_institutional_context/predecessor_institutions.md`:

```markdown
# Predecessor Institutions — Legacy Donor Mapping

**Compiled:** YYYY-MM-DD
**Purpose:** Identify legacy donor families whose names appear on predecessor-institution buildings/programs, since these families often remain engaged with the merged system.

## 1. Western Connecticut Health Network
### Danbury Hospital
- Founding: (year, founders if notable)
- Named buildings/wings/programs
- Notable historical donors
- Recent campaigns

### Norwalk Hospital
(same structure)

### New Milford Hospital
(same structure)

## 2. Health Quest
### Vassar Brothers Medical Center
(same structure — and note this is the most prominent named institution in the system, with potential Vassar family legacy implications)

### Northern Dutchess Hospital
(same structure)

### Putnam Hospital
(same structure)

### Sharon Hospital
(same structure)

## 3. Cross-institutional legacy families
(any family names appearing across multiple institutions — these are particularly high-value affinity signals)

## 4. Sources
```

- [ ] **Step 4: Update source index**

- [ ] **Step 5: Verify against quality standards**

- [ ] **Step 6: Commit**

```bash
git add research/phase_0_institutional_context/predecessor_institutions.md sources/source_index.md
git commit -m "Phase 0: Predecessor institution legacy donor mapping"
```

### Task 0.5: Naming opportunities by tier

**Files:**
- Create: `research/phase_0_institutional_context/naming_opportunities.md`

- [ ] **Step 1: Define success criteria**

Identify plausible naming opportunities for Nuvance, tiered by gift size:
- $10M tier (named programs, chairs, smaller named spaces)
- $25M tier (named departments, mid-size facilities, distinguished chairs)
- $50M tier (named institutes, major programs, building wings)
- $100M tier (named buildings, major capital projects)
- $250M+ tier (entire system or major institute naming — extraordinary opportunities)

For each tier, identify:
1. Existing publicly announced opportunities (if any)
2. Inferred opportunities based on Nuvance's strategic initiatives (e.g., if Nuvance is planning a new cancer center, that's a tier-X opportunity even if not yet announced)
3. Realistic limits (e.g., "system-wide naming" is likely not feasible for a regional system)

- [ ] **Step 2: Research existing and inferred opportunities**

Sources:
- Nuvance Health's strategic plan documents (Step 2 of Task 0.2 should have surfaced these)
- News announcements of planned construction or program launches
- Recent published capital campaign materials (if any)
- Comparable regional health system named-opportunity menus (Yale-New Haven, Northwell, Greenwich Hospital all publish theirs — useful benchmarks)

- [ ] **Step 3: Write the opportunities document**

Create `research/phase_0_institutional_context/naming_opportunities.md`:

```markdown
# Naming Opportunities — by Tier

**Compiled:** YYYY-MM-DD
**Purpose:** Identify the specific named opportunities that a major gift could fund. This document anchors per-candidate "ask" recommendations in dossiers.

## $10M tier
| Opportunity | Status (announced / inferred) | Strategic alignment | Notes |
|---|---|---|---|
| ... | ... | ... | ... |

## $25M tier
(same table)

## $50M tier
(same table)

## $100M tier
(same table)

## $250M+ tier
(same table)

## Strategic gaps
(opportunities that *should* exist for a $500M campaign but currently don't appear available — surface honestly)

## Sources
```

- [ ] **Step 4: Update source index**

- [ ] **Step 5: Verify against quality standards**

- [ ] **Step 6: Commit**

```bash
git add research/phase_0_institutional_context/naming_opportunities.md sources/source_index.md
git commit -m "Phase 0: Naming opportunities by tier"
```

### Task 0.6: Case-for-support audit

**Files:**
- Create: `research/phase_0_institutional_context/case_for_support_audit.md`

This is the most consequential Phase 0 task — surfaces honest institutional findings.

- [ ] **Step 1: Define success criteria**

The audit must answer:
1. Does Nuvance currently have a clearly articulated case for support that could anchor a $500M campaign?
2. What is that case for support (in their own words, sourced)?
3. How does Nuvance's case compare to comparable regional health systems' published cases (Yale-New Haven, Northwell, Greenwich, Stamford Health, Hartford Healthcare)?
4. What clinical or strategic differentiators does Nuvance have that would be compelling to a transformational donor?
5. What institutional gaps exist (e.g., no major research footprint, no signature capital project, no widely-recognized clinical program of national stature)?
6. What would Nuvance need to do institutionally to make a $500M campaign credible? (This is the uncomfortable section.)

- [ ] **Step 2: Conduct comparative research**

Pull case-for-support materials from comparable regional systems:
- Yale-New Haven Health (`https://www.ynhh.org/`)
- Northwell Health (`https://www.northwell.edu/`)
- Greenwich Hospital (part of Yale-New Haven)
- Stamford Health
- Hartford HealthCare

Note their:
- Stated strategic priorities
- Signature programs / research centers / institutes
- Recent or current capital campaign goals and themes
- Donor-facing language and emotional framing

- [ ] **Step 3: Conduct the audit**

Write the audit document with intellectual honesty. If Nuvance's current case is weaker than comparators, say so. If it's strong, say so. If the $500M aspiration is institutionally premature, surface that.

- [ ] **Step 4: Write the audit document**

Create `research/phase_0_institutional_context/case_for_support_audit.md`:

```markdown
# Case-for-Support Audit

**Compiled:** YYYY-MM-DD
**Purpose:** Honest assessment of Nuvance Health's current case for support and what it can credibly sustain at the major-gift level.

## 1. Nuvance's stated case for support
(quoted from official sources — strategic plan, foundation materials, CEO statements)

## 2. Strategic differentiators
(what Nuvance has that's distinctive — clinical, geographic, programmatic)

## 3. Comparative analysis
(Nuvance vs. Yale-New Haven, Northwell, Greenwich, Stamford, Hartford on case strength, signature programs, research depth)

## 4. Institutional gaps for a $500M aspiration
(brutally honest — what's missing)

## 5. What would need to be true institutionally
(what investments, signature initiatives, or strategic moves would make the $500M case credible)

## 6. Implications for the strategy package
(if the case is weak, our major-gift strategy must include recommendations for institutional repositioning; if the case is strong, dossiers and pitch architecture lean into those differentiators)

## 7. Sources
```

- [ ] **Step 5: Update source index**

- [ ] **Step 6: Verify against quality standards**

This artifact specifically must include negative findings. If everything is rosy, the audit isn't doing its job.

- [ ] **Step 7: Commit**

```bash
git add research/phase_0_institutional_context/case_for_support_audit.md sources/source_index.md
git commit -m "Phase 0: Case-for-support audit"
```

### Task 0.7: Checkpoint A — present Phase 0 findings to Mark

- [ ] **Step 1: Compose a checkpoint summary**

Write a brief checkpoint message to Mark that includes:
1. The five Phase 0 documents now exist and are linked
2. The 2-3 most important findings from the case-for-support audit (especially any uncomfortable findings)
3. Whether the institutional context affects the Phase 1 long-list methodology in any way (e.g., if the case-for-support audit reveals that Nuvance's natural donor profile is more "Hudson Valley community-leader" than "national billionaire", recommend reweighting affinity signals accordingly)
4. Specific questions for Mark to decide before Phase 1 proceeds

- [ ] **Step 2: Pause execution and post the summary**

The executing agent halts here. Mark reviews the Phase 0 documents and the checkpoint summary, then approves or redirects.

Do not proceed to Phase 1 without explicit approval.

---

# Phase 1 — Long-list generation

Produce a scored long list of 40-60 candidate names.

### Task 1.1: Document the screening methodology

**Files:**
- Create: `research/phase_1_long_list/screening_methodology.md`

- [ ] **Step 1: Write the methodology document**

Create `research/phase_1_long_list/screening_methodology.md`:

```markdown
# Long-List Screening Methodology

**Compiled:** YYYY-MM-DD

## Inclusion criteria

A candidate is added to the long list if they meet ALL of:
1. Estimated net worth ≥ $300M (verified against ≥1 source)
2. At least one of: primary residence in Nuvance service area (Hudson Valley NY or Western/Fairfield CT), secondary residence in service area, primary business operations in service area, board service at any Nuvance facility (current or past), documented patient history at any Nuvance facility (rare — typically only known through news/obit references)
3. Not on the documented exclusion list (Task 1.2 disqualifying factors)

A candidate is also added if they meet:
- Estimated net worth ≥ $1B AND any past hospital/medical gift ≥ $5M anywhere (even without service-area connection — billionaires are mobile)

## Affinity-signal scoring (1-5 each)

1. **Documented Nuvance connection** — 5 if board service or major patient experience; 3 if predecessor-institution legacy family; 1 if no direct connection but indirect (employee, vendor, neighbor)
2. **Residential ties** — 5 if primary residence in core service area (Dutchess, Putnam, western Fairfield); 3 if secondary residence or adjacent county; 1 if commuter-relationship only
3. **Healthcare giving history** — 5 if any named gift ≥ $10M to a hospital; 3 if cumulative healthcare giving ≥ $5M; 1 if minor healthcare giving
4. **Cause affinity** — 5 if giving aligns with Nuvance signature programs (cancer, cardiac, women's health, neurosciences — per Phase 0 audit); 3 if related healthcare giving; 1 if unrelated
5. **Giving vehicle sophistication** — 5 if active private foundation with $50M+ assets; 3 if active DAF or foundation with $10M+ assets; 1 if minimal philanthropic infrastructure
6. **Life-stage signals** — 5 if age 65+ AND recent liquidity event AND succession-relevant family situation; 3 if any two of those; 1 if young or no liquidity signals

Sum the six signals (range 6-30). Candidates scoring ≥18 advance to short-list consideration.

## Disqualifying factors

A candidate is excluded (even if otherwise qualified) if:
- Documented public hostility toward Nuvance or a predecessor institution
- Active major-gift cultivation by a competitor that is in late-stage solicitation (where Nuvance approaching would be counterproductive)
- Recent declined ask at multiple comparable institutions for unrelated reasons (signals not philanthropically active right now)
- Active litigation or controversy that would create reputational risk for Nuvance
- Wealth is structurally illiquid with no near-term liquidity path AND no foundation/DAF to give from

## Methodology limitations

Documented in spec Section 7. Restated for reference:
- DAF grants not public
- Wealth estimates for non-Forbes-listed individuals are inferred
- Anonymous gifts are common
- 990-PF data lags 18-24 months
- Family-office structures often opaque
```

- [ ] **Step 2: Commit**

```bash
git add research/phase_1_long_list/screening_methodology.md
git commit -m "Phase 1: Screening methodology"
```

### Task 1.2: Generate the geographic-wealth screen

**Files:**
- Create: `research/phase_1_long_list/long_list.md` (initial structure; will be populated)

- [ ] **Step 1: Define success criteria**

Produce an initial pool of 80-120 candidate names from geographic-wealth screening alone, *before* affinity scoring. This is a wide net that will be narrowed.

- [ ] **Step 2: Pull from primary lists**

Sources to query (and add each to source_index.md):
- **Forbes 400** (2024 or most recent): filter for NY, CT residents
- **Bloomberg Billionaires Index**: filter for service-area zip codes / cities (Greenwich, Westport, New Canaan, Darien, Westport CT; Pound Ridge, Bedford, Mt. Kisco, Chappaqua, Scarsdale, Bronxville, Rye, Larchmont, Mamaroneck NY; Millbrook, Rhinebeck, Hyde Park, Poughkeepsie, Garrison, Cold Spring NY; Sharon, Litchfield, Kent CT)
- **Local rich-list publications**: Westchester County Business Journal "Power 100", CT Mirror wealth profiles, Hudson Valley Magazine annual features
- **Hedge fund founder lists**: Greenwich and Stamford host enormous hedge fund concentration; pull from HFR or Institutional Investor lists for principals residing in service area
- **Family-foundation principals**: query ProPublica Nonprofit Explorer for private foundations with addresses in service-area zip codes; surface the principals
- **Top recent IPO/M&A liquidity events**: query SEC EDGAR for 10b5-1 sales and recent S-1 filings from principals with service-area residences

- [ ] **Step 3: Document each candidate's source-of-discovery**

For each name surfaced, capture in a table format:

| # | Name | Wealth est | Wealth source | Discovery source | Residence | Initial notes |
|---|---|---|---|---|---|---|

- [ ] **Step 4: Initial deduplication and triage**

Remove duplicates. Remove anyone where the residence link turns out to be tenuous on closer look (e.g., listed in Bloomberg as "Greenwich" but actually based in NYC with a vacation home — keep but note).

- [ ] **Step 5: Save the initial pool**

Save the initial 80-120-name pool to `research/phase_1_long_list/long_list.md` (this file will be enriched with affinity scoring in the next task).

```markdown
# Long List — Initial Pool

**Compiled:** YYYY-MM-DD
**Status:** Pre-affinity-scored. To be enriched in Task 1.3.

## Candidate pool

(table of 80-120 names with the columns from Step 3)

## Discovery source summary

(brief: how many candidates came from each source)

## Sources
```

- [ ] **Step 6: Update source index**

- [ ] **Step 7: Commit**

```bash
git add research/phase_1_long_list/long_list.md sources/source_index.md
git commit -m "Phase 1: Initial geographic-wealth screen, ~80-120 candidates"
```

### Task 1.3: Affinity-score each candidate

**Files:**
- Modify: `research/phase_1_long_list/long_list.md`

- [ ] **Step 1: Define success criteria**

For each candidate in the initial pool:
- Apply the six affinity-signal scoring (Task 1.1 methodology)
- Confirm or revise wealth estimate against a second source
- Apply disqualifying-factor screen
- Flag candidates scoring ≥18 (advance) vs <18 (drop)

- [ ] **Step 2: For each candidate, research and score**

For each candidate in the initial pool, do the following research:

**(A) Confirm wealth.** Cross-reference Forbes/Bloomberg against:
- SEC 13D/13G filings for insider holdings (large stock positions tied to a person)
- Recent news estimating their net worth
- Family-office or foundation 990-PF asset levels

**(B) Score signal 1 (Nuvance connection).** Search:
- Nuvance Health Foundation board (current and historical via Wayback Machine)
- News archives for "[Candidate Name] Nuvance" / "[Candidate Name] Vassar Brothers" / "[Candidate Name] Danbury Hospital" / etc.
- LinkedIn for any current or historical board affiliation

**(C) Score signal 2 (residential ties).** Verify residence via:
- Property records (where publicly accessible)
- News profiles mentioning their home
- Public society/event coverage placing them in the area

**(D) Score signal 3 (healthcare giving history).** Search:
- News archives for named hospital gifts
- Foundation 990-PF Schedule I (grants paid) for hospital-recipient patterns
- Donor walls and annual reports of comparable hospitals (NYP, Yale-New Haven, MSK, Greenwich, etc.)

**(E) Score signal 4 (cause affinity).** Map their giving against Nuvance signature programs identified in Phase 0.

**(F) Score signal 5 (giving vehicle sophistication).** Check ProPublica Nonprofit Explorer for any associated private foundation; check news/coverage for DAF activity.

**(G) Score signal 6 (life-stage signals).** Determine age (Wikipedia, executive bios, news), recent liquidity events (SEC filings, news), succession-relevance (children active in business, foundation transitions, etc.).

**(H) Check disqualifying factors.** Search for any of the listed disqualifying patterns.

- [ ] **Step 3: Update long_list.md with scoring**

Update the file structure to include scoring:

```markdown
# Long List — Affinity-Scored

**Compiled:** YYYY-MM-DD
**Status:** Affinity-scored, ready for short-list selection (Phase 2).

## Methodology

(reference Task 1.1 — link to screening_methodology.md)

## Scored candidates

(table; sorted by total score descending)

| # | Name | Wealth est | S1 Conn | S2 Res | S3 Health$ | S4 Cause | S5 Vehicle | S6 Life | TOTAL | DQ flags | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ... | $2.5B | 5 | 5 | 5 | 4 | 5 | 3 | 27 | None | ADVANCE |
| ... |

## Per-candidate scoring rationale

For each candidate scoring ≥18, a 100-200 word rationale documenting the basis for each score with citations.

### [Candidate Name] (Score: NN)
- **S1 (Nuvance connection):** [score and 1-2 sentence rationale with citation]
- **S2 (Residential):** ...
- **S3 (Healthcare giving):** ...
- **S4 (Cause affinity):** ...
- **S5 (Giving vehicle):** ...
- **S6 (Life-stage):** ...
- **Disqualifying factors:** None observed / [list]

(repeat for each ADVANCE candidate)

## Dropped candidates

Brief note (1 sentence) on why each dropped candidate didn't advance.

## Sources
```

- [ ] **Step 4: Update source index for any new sources used**

- [ ] **Step 5: Verify against quality standards**

Cross-check that the long list has 40-60 ADVANCE candidates (per spec target).
- If <40 ADVANCE candidates: methodology may be too strict; review borderline cases (16-17 score) for inclusion
- If >60: methodology produced too many; surface this and adjust score threshold or apply stricter affinity weights

- [ ] **Step 6: Commit**

```bash
git add research/phase_1_long_list/long_list.md sources/source_index.md
git commit -m "Phase 1: Affinity-scored long list, ~40-60 advance candidates"
```

### Task 1.4: Checkpoint B — present long list to Mark

- [ ] **Step 1: Compose checkpoint summary**

Write a brief summary for Mark:
1. Total candidates screened: NN
2. Total ADVANCE (score ≥18): NN
3. Score distribution histogram (text)
4. Top 5 by score, with one-line each
5. Any notable inclusions or exclusions worth flagging
6. Any wealth-tier observations (e.g., "Of 47 ADVANCE candidates, 12 are confirmed billionaires and 35 are centi-millionaires")
7. Specific names Mark may want to consider adding or excluding before Phase 2

- [ ] **Step 2: Pause execution and post the summary**

Halt and await Mark's review. Mark can add names, exclude names, or approve as-is. Do not proceed to Phase 2 without explicit approval.

---

# Phase 2 — Short-list selection (top 10)

Narrow the ADVANCE pool to a final 10 candidates.

### Task 2.1: Deeper-dive on top 15-20 candidates

**Files:**
- Modify: `research/phase_1_long_list/long_list.md` (add deeper-dive annotations on top 15-20)

- [ ] **Step 1: Define success criteria**

For the top 15-20 candidates (by long-list score), conduct deeper research to confirm or revise their candidacy:
- Verify every gift ≥ $1M to hospital/medical institutions in the past 15 years (this is more thorough than the long-list signal)
- Identify the single strongest warm-intro path (named connector) for each
- Identify any competing institutional loyalties (e.g., serves on NYP board — would be hard to redirect philanthropy to Nuvance)
- Update affinity scoring if deeper research reveals previously-missed signals

- [ ] **Step 2: For each top-20 candidate, conduct deeper research**

For each:
- **Comprehensive healthcare-gift inventory.** Search comparable hospital annual reports, donor walls, news archives, and 990-PF Schedule I grants from any associated family foundation. Goal: a complete-as-possible list of every healthcare gift ≥ $1M.
- **Initial warm-intro mapping.** Identify the single most plausible connector between this candidate and Nuvance's known network (Nuvance board members, foundation board, CEO's known contacts, predecessor-institution legacy donors). One named connector with rationale.
- **Competing institutional loyalties.** Identify any other healthcare institution where the candidate is in active major-gift cultivation, on the board, or has made a recent $25M+ gift. Document these — they're not necessarily disqualifying but they shape cultivation strategy.
- **Revise the affinity score** if deeper research surfaces new evidence.

- [ ] **Step 3: Annotate long_list.md**

Add a new section to `research/phase_1_long_list/long_list.md`:

```markdown
## Top 20 — Deeper-Dive Annotations

For each top-20 candidate (by score):

### [Candidate Name] (Revised Score: NN)
- **Healthcare gift inventory:** [list of named gifts ≥ $1M with year, amount, recipient, source]
- **Strongest warm-intro path:** [named connector + rationale]
- **Competing loyalties:** [list of active institutional commitments]
- **Updated motivation hypothesis (preliminary):** [which of Prince's Seven Faces appears dominant + 1-sentence evidence]
- **Updated score rationale:** [if score changed, why]
```

- [ ] **Step 4: Commit**

```bash
git add research/phase_1_long_list/long_list.md sources/source_index.md
git commit -m "Phase 2: Deeper-dive annotations on top 20 candidates"
```

### Task 2.2: Final short-list selection (10 candidates)

**Files:**
- Create: `research/phase_2_short_list/short_list.md`

- [ ] **Step 1: Define success criteria**

Produce the final 10 candidates with:
- Calibration to spec target: 4-5 billionaires + 5-6 centi-millionaires, summing to exactly 10
- Selection logic explicitly documented
- Per-candidate paragraph rationale
- Each candidate has a specified rank order (1-10) with justification for the ranking

- [ ] **Step 2: Select the 10**

From the top-20 deeper-dive list, select 10 by:
1. Sort top 20 by revised affinity score
2. Apply wealth-tier calibration: select 4-5 highest-scoring billionaires + 5-6 highest-scoring centi-millionaires
3. Where ranking is close, prefer candidates with:
   - Strong warm-intro paths (Phase 3 cultivation will be easier)
   - Fewer competing institutional loyalties
   - Clearer motivation hypothesis (easier to design pitch)
4. Confirm final count = 10

- [ ] **Step 3: Write the short-list document**

Create `research/phase_2_short_list/short_list.md`:

```markdown
# Short List — Final 10 Candidates

**Compiled:** YYYY-MM-DD
**Status:** Final selection for Phase 3 dossier work, pending Mark's approval.

## Wealth-tier breakdown
- Billionaires (≥ $1B): N
- Centi-millionaires ($300M-$999M): N
- Total: 10

## Selection logic
(2-3 paragraphs documenting how these 10 were chosen from the top 20)

## Ranked candidates

### Rank #1: [Name]
- **Wealth estimate:** $XB / $XM
- **Tier:** Billionaire / Centi-millionaire
- **Affinity score:** NN/30
- **Primary motivation hypothesis:** [Prince's face — Repayer, Dynast, etc. — with 1-line evidence]
- **Suggested gift range:** $XM - $XM
- **Suggested named opportunity:** [from Phase 0 naming inventory]
- **Strongest warm-intro path:** [named connector]
- **Rationale for inclusion at rank 1:** [paragraph, 100-150 words]

### Rank #2: [Name]
(same structure)

... through Rank #10.

## Why these 10 and not others from the top 20
(brief notes on the 5-10 near-miss candidates who didn't make the cut)

## Sources
```

- [ ] **Step 4: Commit**

```bash
git add research/phase_2_short_list/short_list.md sources/source_index.md
git commit -m "Phase 2: Final short list of 10 candidates"
```

### Task 2.3: Checkpoint C — present short list to Mark

- [ ] **Step 1: Compose checkpoint summary**

Write Mark a checkpoint summary:
1. Final 10 with names, tier, wealth, affinity score, motivation hypothesis, suggested gift range
2. Wealth-tier breakdown confirming spec calibration
3. Near-miss candidates and why they didn't make it
4. Confidence levels — which candidates are "near-certain qualified" and which are "promising-but-thinner-evidence"
5. Question for Mark: any swaps, adjustments, or approvals before heavy dossier work begins

- [ ] **Step 2: Pause execution and post the summary**

Halt. Mark reviews; approves, swaps, or revises. Do not proceed to Phase 3 (heaviest phase) without explicit approval.

---

# Phase 3 — Deep dossiers (10 candidates)

The heaviest phase. Produce 10 full dossiers following the Dossier Template (Appendix A).

### Task 3.1: Build dossiers for ranks #1 and #2 (samples for Checkpoint D)

**Files:**
- Create: `dossiers/01_<slug>.md`
- Create: `dossiers/02_<slug>.md`

- [ ] **Step 1: Identify the slugs**

Read `research/phase_2_short_list/short_list.md`. For Rank #1 and Rank #2, take the candidate's name and produce a URL-safe slug (lowercase, hyphens for spaces, no special chars). E.g., "John Q. Smith" → "john-q-smith".

- [ ] **Step 2: For Rank #1, execute the Dossier Template (Appendix A)**

Follow Appendix A in full. The dossier must include every section listed in the appendix, with every claim cited and every confidence level explicit. Save to `dossiers/01_<slug>.md`.

- [ ] **Step 3: For Rank #2, execute the Dossier Template (Appendix A)**

Same. Save to `dossiers/02_<slug>.md`.

- [ ] **Step 4: Commit**

```bash
git add dossiers/01_*.md dossiers/02_*.md sources/source_index.md
git commit -m "Phase 3: Sample dossiers for top 2 candidates (Checkpoint D)"
```

### Task 3.2: Checkpoint D — present 2 sample dossiers to Mark

- [ ] **Step 1: Compose checkpoint summary**

Write Mark a checkpoint summary:
1. Sample dossiers for ranks #1 and #2 are at `dossiers/01_*.md` and `dossiers/02_*.md`
2. Format/depth/emphasis questions for Mark to review:
   - Is the page count right (target 6-8 pages each)?
   - Is the level of detail appropriate?
   - Is the motivation hypothesis section clear and well-evidenced?
   - Is the cultivation plan specific enough?
   - Are there sections to add, remove, or reweight?
3. Specific request: Mark reviews both dossiers and provides format-level feedback before remaining 8 dossiers are built

- [ ] **Step 2: Pause execution and post the summary**

Halt. Mark reviews and provides format feedback. Do not produce remaining 8 dossiers without explicit approval.

### Task 3.3: Build dossiers for ranks #3 through #10

**Files:**
- Create: `dossiers/03_<slug>.md` through `dossiers/10_<slug>.md`

- [ ] **Step 1: For each rank #3 through #10, execute the Dossier Template (Appendix A)**

For each rank in sequence:
1. Read `research/phase_2_short_list/short_list.md` to identify the candidate
2. Produce the URL-safe slug
3. Execute Appendix A in full
4. Save to `dossiers/NN_<slug>.md` where NN is the zero-padded rank
5. Update `sources/source_index.md` for any new sources used
6. Apply any format adjustments requested at Checkpoint D

Commit after each dossier (commit cadence per spec):

```bash
git add dossiers/NN_*.md sources/source_index.md
git commit -m "Phase 3: Dossier for rank #N candidate, <candidate name>"
```

This produces 8 commits, one per dossier.

- [ ] **Step 2: Final verification**

Confirm all 10 dossiers exist:

```bash
ls -1 /Users/marksenerth/_src/eldridge_research/dossiers/
```

Expected: 10 files, named `01_*.md` through `10_*.md`.

### Task 3.4: Cross-dossier consistency review

**Files:**
- Modify: dossiers as needed for consistency

- [ ] **Step 1: Define success criteria**

After all 10 dossiers exist, review for consistency:
- Same structural sections across all dossiers (per Appendix A)
- Comparable depth and length (6-8 pages each)
- Source citation format consistent
- Motivation-hypothesis framing consistent (using Prince's Seven Faces terminology)
- Gift-range and named-opportunity recommendations consistent with Phase 0 tier inventory
- Cross-references to other candidates (where one dossier references another candidate as a peer or connector) are accurate

- [ ] **Step 2: Conduct the review**

For each dossier, spot-check the consistency criteria. Note discrepancies.

- [ ] **Step 3: Fix discrepancies**

Where a dossier deviates from the template structure or shows different depth/format, make targeted edits to bring it in line.

- [ ] **Step 4: Commit any fixes**

```bash
git add dossiers/
git commit -m "Phase 3: Cross-dossier consistency review and fixes"
```

---

# Phase 4 — Benchmarking memo

Can run in parallel with Phase 3. Produce a deep-dive on 8-12 comparable mega-gifts.

### Task 4.1: Select 8-12 case studies

**Files:**
- Create: `research/phase_4_benchmarking/case_selection.md`

- [ ] **Step 1: Define success criteria**

Identify 8-12 comparable regional-health-system mega-gifts of the past 15 years, prioritizing:
- Geographic relevance (Northeast U.S., especially NY/CT/MA regional systems)
- Size relevance ($25M+ each)
- Diversity of donor motivation (mix of Repayer, Dynast, Communitarian, etc.)
- Both successful "anchor gifts" and any documented failed or rescinded gifts (failures teach more)
- Recency (last 15 years; bias toward more recent)

Likely candidates to include (verify each is documented with public detail):
- Various gifts to Greenwich Hospital
- Hospital for Special Surgery $50M+ donors
- Northwell Health transformational gifts (Lenox Hill, others)
- Mount Sinai — Carl Icahn / Icahn School of Medicine naming
- Penn Medicine — major donor gifts to Perelman, Abramson
- NYU Langone — Helen Kimmel, Ronald Perelman gifts
- Yale-New Haven Health — Smilow Cancer Hospital naming
- Memorial Sloan Kettering — David H. Koch Center
- Stamford Health — recent capital campaign anchors
- Hartford HealthCare — significant named gifts
- Hospital of Special Surgery — Kellen, others
- Boston regional examples: Brigham and Women's, Beth Israel Deaconess

Note: We're studying *regional* mega-gifts specifically — gifts to academic medical center flagships (Mayo, Cleveland Clinic) are less relevant.

- [ ] **Step 2: Write the case selection document**

Create `research/phase_4_benchmarking/case_selection.md`:

```markdown
# Benchmarking Case Selection

**Compiled:** YYYY-MM-DD

## Selected case studies

| # | Donor / Family | Recipient Institution | Gift Size | Year | Stated Purpose | Motivation Type (Prince) |
|---|---|---|---|---|---|---|
| 01 | ... | ... | ... | ... | ... | ... |
| ... | | | | | | |
| 12 | ... | ... | ... | ... | ... | ... |

## Selection rationale

(brief: why these 12 specifically — covers geographic spread, motivation diversity, recency, documentation availability)
```

- [ ] **Step 3: Commit**

```bash
git add research/phase_4_benchmarking/case_selection.md
git commit -m "Phase 4: Case study selection (8-12 mega-gifts)"
```

### Task 4.2: For each case study, execute Appendix B

**Files:**
- Create: `research/phase_4_benchmarking/case_studies/NN_<institution>_<donor>.md` for each case

- [ ] **Step 1: For each selected case, execute the Case Study Template (Appendix B)**

Iterate through the 8-12 case studies. For each, follow Appendix B fully. File naming: `NN_<institution>_<donor>.md` (e.g., `03_mount-sinai_icahn.md`).

Commit after each case study:

```bash
git add research/phase_4_benchmarking/case_studies/NN_*.md sources/source_index.md
git commit -m "Phase 4: Case study NN — <donor> at <institution>"
```

- [ ] **Step 2: Verify all case studies present**

```bash
ls -1 /Users/marksenerth/_src/eldridge_research/research/phase_4_benchmarking/case_studies/
```

Expected: 8-12 files.

### Task 4.3: Synthesize the benchmarking memo

**Files:**
- Create: `research/phase_4_benchmarking/benchmarking_memo.md`

- [ ] **Step 1: Define success criteria**

The memo must:
1. Summarize each case study at the 1-paragraph level (executive synthesis)
2. Extract patterns across cases:
   - **What worked:** common moves that landed mega-gifts (e.g., grateful-patient program engagement, clinical-leadership introductions, specific board peer-asking models)
   - **What didn't:** common failure patterns (e.g., institutional naming-rights inflation, donor-fatigue from over-asking, leadership transitions mid-cultivation)
   - **Donor motivation patterns:** which Prince's-faces motivations dominate at the regional-system mega-gift level
   - **Cultivation length patterns:** typical months from first qualified meeting to closed gift
   - **Cultivation team patterns:** who was at the ask (CEO + dev director + board peer is common; what variations exist?)
3. Apply to Nuvance specifically: which patterns most apply, what Nuvance should adopt, and what Nuvance currently lacks

- [ ] **Step 2: Write the memo**

Create `research/phase_4_benchmarking/benchmarking_memo.md`:

```markdown
# Benchmarking Memo — Regional Health System Mega-Gifts (2010-Present)

**Compiled:** YYYY-MM-DD
**Length:** 15-25 pages

## Executive summary

(2-page synthesis of the case studies and their patterns)

## Case study summaries

For each of the 8-12 case studies:
### NN. [Donor / Recipient / Year / Amount]
(1-2 paragraphs synthesizing the case)

## Pattern extraction

### Pattern 1: What worked
(detailed analysis of successful moves observed across multiple cases, with specific case-study references)

### Pattern 2: What didn't
(failure patterns, with examples)

### Pattern 3: Donor motivation
(which Prince's faces dominated, with frequency)

### Pattern 4: Cultivation length and cadence
(quantitative analysis where data exists)

### Pattern 5: Cultivation team composition
(who was at the ask, and what variations matter)

### Pattern 6: Named opportunity sophistication
(how named opportunities were structured: naming rights with sunset, multigenerational naming, naming-with-impact-clauses, etc.)

### Pattern 7: Post-gift stewardship leading to follow-on gifts
(which institutions converted first-gift donors into second-larger-gift donors, and how)

## Application to Nuvance Health

(systematic mapping of each pattern to Nuvance's situation: what Nuvance is doing, what Nuvance should adopt, what's missing institutionally to apply the pattern)

## Sources
```

- [ ] **Step 3: Update source index**

- [ ] **Step 4: Verify against quality standards**

- [ ] **Step 5: Commit**

```bash
git add research/phase_4_benchmarking/benchmarking_memo.md sources/source_index.md
git commit -m "Phase 4: Benchmarking memo synthesis"
```

---

# Phase 5 — Tactical artifacts

Three artifacts: warm-intro network map (HTML viz), per-candidate cheat sheets (10), cross-reference matrix.

### Task 5.1: Build the warm-intro network map data

**Files:**
- Create: `artifacts/intro_network_map/network_data.json`

- [ ] **Step 1: Define success criteria**

Produce a JSON data file describing the network graph:
- **Nodes:** all 10 candidates + every named connector identified in their dossiers + Nuvance's known network anchors (foundation board, CEO, key clinical leaders if relevant)
- **Edges:** every relationship between two nodes documented in any dossier, with edge metadata (relationship type, strength, source)
- Node metadata: type (candidate / connector / nuvance-anchor), name, organization, dossier reference

- [ ] **Step 2: Extract relationships from dossiers**

For each of the 10 dossiers, read the warm-intro paths section. Capture every (candidate, connector) edge with:
- Source dossier
- Relationship type (board service, club, school, business, family, prior philanthropic collaboration, etc.)
- Strength assessment (strong / medium / weak — based on how directly the dossier indicates the connection)

- [ ] **Step 3: Add Nuvance network anchors**

Add nodes for Nuvance's known connectors (foundation board members, CEO, etc. — from Phase 0 research). Add edges where any candidate-connector relationship eventually ties back to a Nuvance anchor.

- [ ] **Step 4: Write the JSON**

```json
{
  "nodes": [
    {"id": "candidate_01_slug", "name": "Full Name", "type": "candidate", "rank": 1, "wealth_est": "$XB", "dossier": "dossiers/01_slug.md"},
    {"id": "connector_001", "name": "Connector Name", "type": "connector", "org": "Their org"},
    {"id": "nuvance_001", "name": "Anchor Name", "type": "nuvance-anchor", "role": "Foundation board chair"},
    ...
  ],
  "edges": [
    {"source": "candidate_01_slug", "target": "connector_001", "type": "board-service", "strength": "strong", "evidence": "Both on Greenwich Country Club board 2019-present", "dossier_ref": "dossiers/01_slug.md"},
    ...
  ]
}
```

- [ ] **Step 5: Commit**

```bash
git add artifacts/intro_network_map/network_data.json
git commit -m "Phase 5: Network map data extracted from dossiers"
```

### Task 5.2: Build the warm-intro network map visualization

**Files:**
- Create: `artifacts/intro_network_map/index.html`
- Create: `artifacts/intro_network_map/style.css`

- [ ] **Step 1: Define success criteria**

A single self-contained HTML file (with linked CSS) that:
- Renders the network from `network_data.json` as an interactive graph
- Uses vis-network or D3.js via CDN (no npm/build step)
- Visually distinguishes node types (candidates: large, color-coded by tier; connectors: medium; Nuvance anchors: distinct color)
- Visually encodes edge strength (line weight)
- On hover, shows node details (name, role, dossier ref)
- On click, optionally opens a side panel with more detail
- Color palette and typography aligned with Nuvance's brand identity (research from Phase 0)

- [ ] **Step 2: Write the test page**

First, write a simple test HTML that loads `network_data.json` and logs the parsed structure to console — verify the data file is well-formed before building the viz.

Test file (temporary, gitignored):

```html
<!DOCTYPE html>
<html>
<head><title>Test load</title></head>
<body>
<script>
fetch('network_data.json').then(r => r.json()).then(d => {
  console.log("Nodes:", d.nodes.length);
  console.log("Edges:", d.edges.length);
  console.log("Sample node:", d.nodes[0]);
  console.log("Sample edge:", d.edges[0]);
});
</script>
</body>
</html>
```

Open the file in a browser, confirm the data loads.

- [ ] **Step 3: Build index.html**

Create `artifacts/intro_network_map/index.html` using vis-network (via CDN). Reference style.css. Include:
- Header with project title and date
- Legend (node types, edge strengths)
- Network container (full viewport minus header)
- Click handler for nodes (opens detail panel)
- Initial layout: force-directed
- Filter controls (show/hide by tier, by edge strength)

- [ ] **Step 4: Build style.css**

Create `artifacts/intro_network_map/style.css` with:
- Color palette (Nuvance brand-aligned colors from Phase 0)
- Typography (clean, professional sans-serif)
- Responsive layout for desktop primarily

- [ ] **Step 5: Test in browser**

Open `artifacts/intro_network_map/index.html` in a browser. Verify:
- All 10 candidate nodes render
- All connector nodes render
- Edges are visible with appropriate weight
- Hover/click interactions work
- Legend is clear
- Visual polish is professional

- [ ] **Step 6: Commit**

```bash
git add artifacts/intro_network_map/
git commit -m "Phase 5: Warm-intro network map visualization"
```

### Task 5.3: Build cheat sheets for each candidate

**Files:**
- Create: `artifacts/cheat_sheets/01_<slug>.md` through `10_<slug>.md`

- [ ] **Step 1: For each candidate, execute the Cheat Sheet Template (Appendix C)**

For rank #1 through #10:
1. Read the dossier `dossiers/NN_<slug>.md`
2. Execute Appendix C, distilling the dossier into a single printable page
3. Save to `artifacts/cheat_sheets/NN_<slug>.md`

Commit after each batch of 3-5 cheat sheets, or all 10 together if produced as one task pass:

```bash
git add artifacts/cheat_sheets/
git commit -m "Phase 5: Cheat sheets for all 10 candidates"
```

### Task 5.4: Build the cross-reference matrix

**Files:**
- Create: `artifacts/cross_reference_matrix.md`

- [ ] **Step 1: Define success criteria**

A single-page (or two-page) matrix showing all 10 candidates side-by-side on the six affinity signals, plus key strategic dimensions. Designed so Laura can lay her own internal portfolio next to ours and immediately see comparison points.

- [ ] **Step 2: Build the matrix**

Create `artifacts/cross_reference_matrix.md`:

```markdown
# Cross-Reference Matrix — Top 10 Candidates

**Compiled:** YYYY-MM-DD
**Purpose:** Side-by-side comparison. Laura can lay her own portfolio against this matrix to identify overlaps and gaps.

## Master matrix

| Rank | Name | Tier | Wealth est | S1 Conn | S2 Res | S3 Health$ | S4 Cause | S5 Vehicle | S6 Life | Total | Motivation (Prince) | Suggested Gift | Top Intro | Risk Flags |
|------|------|------|------------|---------|--------|------------|----------|------------|---------|-------|---------------------|----------------|-----------|------------|
| 1 | ... | B | $XB | 5 | 5 | 5 | 4 | 5 | 3 | 27 | Repayer | $50M | Connector Name | None |
| ... |

## Strategic dimensions matrix

| Rank | Name | Best cultivation lead | Optimal first-meeting frame | Recommended cultivation length | Competing institutional risk |
|------|------|------|------|------|------|
| ... |

## How to use this matrix

(2-3 paragraph note for Laura on how to read and apply this matrix vs. her own portfolio)
```

- [ ] **Step 3: Commit**

```bash
git add artifacts/cross_reference_matrix.md
git commit -m "Phase 5: Cross-reference matrix"
```

---

# Phase 6 — Strategy playbook synthesis

Pull Phases 0-5 into a single tailored playbook for Laura.

### Task 6.1: Draft Section A — Donor psychology, applied

**Files:**
- Create: `artifacts/playbook.md` (initial file with this section)

- [ ] **Step 1: Define success criteria**

Section A must:
- Provide a brief framework (Prince's Seven Faces, Bekkers & Wiepking mechanisms, hospital-mega-gift evidence base)
- Map each of the 10 candidates to their motivation profile
- Translate motivation profiles into operational implications
- Include anti-patterns per face

- [ ] **Step 2: Write Section A**

Create `artifacts/playbook.md` with header + Section A:

```markdown
# Major-Gift Strategy Playbook — Nuvance Health

**Compiled:** YYYY-MM-DD
**For:** Laura Eldridge, CFRE
**Companion artifacts:** 10 dossiers (`dossiers/`), 10 cheat sheets (`artifacts/cheat_sheets/`), warm-intro network map (`artifacts/intro_network_map/`), benchmarking memo (`research/phase_4_benchmarking/benchmarking_memo.md`), ranked short list (`artifacts/ranked_short_list.md` — built later), cross-reference matrix (`artifacts/cross_reference_matrix.md`)

## Section A — Donor psychology, applied

### A.1 Framework: Prince's Seven Faces of Philanthropy

(brief 1-page synthesis of Prince & File 1994 — Communitarian, Devout, Investor, Socialite, Repayer, Altruist, Dynast — with citations and one example per face)

### A.2 Framework: Bekkers & Wiepking's eight mechanisms

(brief 1-page synthesis of the 2011 meta-analysis: awareness of need, solicitation, costs/benefits, altruism, reputation, psychological benefits, values, efficacy — with citations)

### A.3 The hospital-mega-gift evidence base

(synthesis: Repayer dominates $10M+ hospital gifts; legacy/mortality salience secondary; cite specific studies and the benchmarking-memo findings)

### A.4 Candidate motivation profiles

For each of the 10 candidates:

#### Rank #1: [Name]
- **Primary face:** Repayer (or whichever) — evidence summary
- **Secondary face:** Dynast (or whichever) — evidence summary
- **Operational implications:** (specific moves that work with this profile)
- **Anti-patterns:** (specific moves to avoid)

(repeat through rank #10)

### A.5 Anti-pattern summary by face

| Face | Engagement style that works | Engagement style that breaks trust |
|------|------------------------------|------------------------------------|
| Repayer | Gratitude-anchored, care-experience-centered | Generic mission language, no link to their care |
| Dynast | Family naming, multigenerational involvement | Single-generation framing |
| Investor | Impact metrics, tax-strategic structuring | Soft mission language |
| Communitarian | "World-class hospital for our community" | National prestige framing |
| Altruist | Mission-focused, low-recognition | Aggressive recognition push |
| Socialite | Events, social belonging | Solitary impact framing |
| Devout | Values-aligned language, faith framing where appropriate | Secular impact metrics |
```

- [ ] **Step 3: Commit**

```bash
git add artifacts/playbook.md
git commit -m "Phase 6: Playbook Section A — donor psychology, applied"
```

### Task 6.2: Draft Section B — Cultivation cadence

**Files:**
- Modify: `artifacts/playbook.md`

- [ ] **Step 1: Define success criteria**

Section B must describe the 12-24 month cultivation cadence for a $50M+ ask, with research-backed touchpoint types, intervals, and the specific moves that occur in each phase.

- [ ] **Step 2: Append Section B to playbook.md**

```markdown
## Section B — Cultivation cadence

### B.1 Overview

A research-backed 12-24 month cadence calibrated to a $50M+ ask. Adjustments per-candidate are noted in their dossiers.

### B.2 Phase 1 — Qualification (months 0-3)

**Goal:** Establish actual interest, confirm capacity, map motivations. The goal is *not* to ask; it's to learn enough that the candidate moves to active portfolio or gets dropped.

**Touchpoints:**
- Warm-intro outreach (via the connector identified in their dossier)
- Informal coffee or lunch
- Hospital tour if natural

**Success criteria for qualification:**
- Candidate is genuinely interested (not just polite)
- Capacity confirmed at the relevant gift level
- Primary motivation hypothesis tested and either confirmed or revised
- Decision: advance to Phase 2 cultivation or drop

### B.3 Phase 2 — Cultivation (months 3-12)

**Goal:** Build relationship and demonstrate institutional fit. Value-additive touches that leave the candidate feeling smarter or more connected, not solicited.

**Touchpoints:**
- Clinical leadership introductions (CMO, named-physician dinners)
- Site visits to relevant program
- Peer-donor events (especially valuable for Socialites and for any candidate; signals "you'd be in good company")
- Sharing of relevant institutional milestones (program launches, research breakthroughs, accolades)
- Customized engagement around the candidate's specific clinical interest

**Critical principle:** Cultivation touches should be value-additive to the donor, not extractive. Each touch should leave them feeling they gained, not gave.

### B.4 Phase 3 — Solicitation (months 12-18)

**Goal:** The formal ask.

**Composition of the ask:** Almost never the development officer alone. Usually CEO + board chair + a peer donor.

**Location:** Their setting (their office, their home), not yours.

**The specific ask:** Specific number, specific named opportunity, specific timeline, with a written proposal left behind.

**Anchoring principle:** Donors give within 10-30% of the specific number asked. Vague asks underperform by ~40%. Ask high but defensible.

### B.5 Phase 4 — Stewardship (months 18+)

**Goal:** Position for a second (usually larger) gift.

**Touchpoints:**
- Named-recognition event (designed around the candidate's preferences)
- Impact reporting on a defined cadence (quarterly or annually)
- Continued access to clinical leadership
- Family engagement where relevant (for Dynasts especially)

**Critical principle:** The second gift is usually larger than the first if stewardship is excellent, and zero if it isn't.
```

- [ ] **Step 3: Commit**

```bash
git add artifacts/playbook.md
git commit -m "Phase 6: Playbook Section B — cultivation cadence"
```

### Task 6.3: Draft Section C — Appointment-getting tactics

**Files:**
- Modify: `artifacts/playbook.md`

- [ ] **Step 1: Append Section C**

```markdown
## Section C — Appointment-getting tactics

### C.1 Warm-intro leverage

Warm intro is approximately 10x more effective than cold outreach. The warm-intro network map (Artifact 2) and per-candidate dossier warm-intro path are designed to give Laura a clear ranked path for each candidate.

For each of the 10 candidates, the top-3 intro paths are summarized:

#### Rank #1: [Name]
1. **Best:** [connector + relationship + rationale]
2. **Backup:** [connector + relationship]
3. **Alternative:** [connector + relationship]

(repeat through #10)

### C.2 The "no-ask" first meeting

Research shows the highest-converting initial meetings are framed as advice or insight requests, not solicitations.

**Sample framing template:**
"We're rethinking our [program / strategy] and Laura's CEO specifically wants to get your perspective given your work on [their specific area]."

**Why this works:** Activates the donor's expertise/status motive rather than triggering solicitation defenses.

### C.3 Calendar leverage points

For each candidate, the dossier identifies the optimal times for outreach:
- End-of-year tax planning (October-December)
- Post-liquidity events (within 6 months of IPO, sale, or major distribution)
- Post-personal-health-event (very sensitive; only with high-confidence intro)
- Board-cycle transitions (when a candidate is rotating off another institution's board, they may be receptive to new engagement)

### C.4 Gatekeeper management

Most candidates have one or more gatekeepers:
- Executive assistants
- Family-office gatekeepers
- Foundation program officers (when the candidate's foundation has staff)

**Patterns that work:**
- Treat the gatekeeper as a peer, not as a barrier
- Provide them with materials they can independently evaluate
- Offer to make their job easier, not harder

**Patterns that fail:**
- Going around the gatekeeper after they've already responded
- Cold-outreaching the principal after the gatekeeper said no

### C.5 What to do when the answer is "no, not now, or radio silence"

**For "no":** Thank them sincerely. Continue gentle stewardship-style engagement (sharing relevant institutional news every 6 months). Do not re-ask for 18-24 months unless circumstances change materially.

**For "not now":** Ask what would need to be different. Set a re-engagement timeline they agree to. Honor it precisely.

**For radio silence:** Three follow-ups maximum over 60 days, then move to long-cycle stewardship (3-month check-ins via institutional news).
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/playbook.md
git commit -m "Phase 6: Playbook Section C — appointment-getting tactics"
```

### Task 6.4: Draft Section D — Pitch architecture

**Files:**
- Modify: `artifacts/playbook.md`

- [ ] **Step 1: Append Section D**

```markdown
## Section D — Pitch architecture

### D.1 Structural framework for the $50M+ solicitation conversation

#### Opening (first 15 minutes)
**Center the donor's why, not yours.** First 15 minutes are about *their* experience, motivation, and connection. Never lead with institutional needs.

Sample opening questions per motivation type — built into each cheat sheet.

#### Bridge (next 15 minutes)
**Connect their why to a specific opportunity.** The named opportunity, tied to their motivation hypothesis — not Nuvance's biggest institutional need.

#### The specific ask (5 minutes)
**Exact number, exact named opportunity, exact timeline, exact pledge structure.**

Anchoring principle: Donors give within 10-30% of the specific number asked. Vague asks underperform by ~40%.

#### Anticipated objections (5-10 minutes)

Common objections to expect, with research-backed handling:

**"Why Nuvance over [flagship — NYP, MSK, Yale-New Haven]?"**
→ "Flagship institutions are remarkable, and your gift to [flagship] is one of the reasons. But Nuvance is where the people in your community actually receive care. The flagship serves the country; we serve [their town]. Your gift here changes care for people you know."

**"We already give to [other institution]."**
→ Complement, not compete. "Our work is complementary — we [specific complementary value]. Many of our largest donors also give to [other institution]. Different gifts serve different missions."

**"We need to talk to our advisors."**
→ "Absolutely. I'd love to make that easier — I can send a proposal package your wealth advisor and family-office team will find well-structured. What's the best way to put that in motion?"

#### The close
**Silence after the ask.** Research-backed principle: The development officer who speaks first after the ask loses ~30% of expected gift size.

#### Walk-away clarity
At the end, both parties leave with explicit clarity:
- What's agreed
- When you'll be back
- What the candidate commits to in the meantime (e.g., reviewing the proposal with their advisor by [date])

### D.2 Pitch customization per motivation type

For each of the 7 Faces:

#### Repayer-dominant
- **Open with:** Their specific care experience or family member's care experience
- **Bridge:** "What if no one else had to go through what your family went through alone"
- **Named opportunity:** Tied to the specific service that helped them (cancer program, cardiac care, etc.)

#### Dynast-dominant
- **Open with:** Family legacy, multigenerational impact
- **Bridge:** "Your name on this institute is your family's legacy in this community for generations"
- **Named opportunity:** Family naming, with provisions for future-generation engagement

#### Investor-dominant
- **Open with:** Impact metrics, strategic positioning of Nuvance
- **Bridge:** "Here's the ROI on care quality, lives saved, and community economic impact per dollar invested"
- **Named opportunity:** Performance-linked with measurable outcomes

#### Communitarian-dominant
- **Open with:** The community's need for world-class care close to home
- **Bridge:** "World-class care in [town] means our neighbors don't have to drive to [city] for [serious diagnosis]"
- **Named opportunity:** Community-anchored, locally recognized

(continue through other faces)

### D.3 Pitch customization per candidate

Each cheat sheet (Artifact 4) gives Laura the specific opening, bridge, ask, and objection-handling for that candidate.
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/playbook.md
git commit -m "Phase 6: Playbook Section D — pitch architecture"
```

### Task 6.5: Draft Section E — Gift table

**Files:**
- Modify: `artifacts/playbook.md`

- [ ] **Step 1: Append Section E**

```markdown
## Section E — Gift table

### E.1 Sample mega-campaign gift table to reach $500M

The standard "rule of thumb" gift table for a $500M campaign:

| Tier | Gifts | Per-gift amount | Sub-total | Cumulative |
|------|-------|------------------|-----------|------------|
| Lead | 1 | $100M+ | $100M | $100M |
| Principal | 2 | $50M | $100M | $200M |
| Major-A | 4 | $25M | $100M | $300M |
| Major-B | 8 | $10M | $80M | $380M |
| Mid-A | 20 | $5M | $100M | $480M |
| Mid-B | 40 | $1M | $40M | $520M |

This is a textbook gift table for a campaign of this size.

### E.2 Mapping our 10 candidates to the table

(table mapping each of our 10 candidates to a tier and a target gift size based on their dossier suggested-gift-range)

| Rank | Name | Tier | Suggested gift | Named opportunity (per Phase 0) |
|------|------|------|------|------|
| 1 | ... | Lead | $100M-$200M | Cancer Institute |
| 2 | ... | Principal | $50M | ... |
| ... |

### E.3 Honest institutional assessment

**Does Nuvance's current case for support sustain this gift table?**

(Direct synthesis from the Phase 0 case-for-support audit. Be honest. If the audit found that Nuvance lacks a $100M+ named opportunity worthy of a Lead gift, surface that here. If the strategic plan needs to articulate the case more compellingly, say so.)

**What would need to be true institutionally for this gift table to be credible?**

(specific institutional moves required — signature capital project, named institute structure, board commitment, etc.)

**Recommendations for Nuvance leadership (separate from candidate cultivation):**

(itemized list of institutional moves that need to happen alongside candidate cultivation for a $500M campaign to land)
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/playbook.md
git commit -m "Phase 6: Playbook Section E — gift table and institutional assessment"
```

### Task 6.6: Draft Section F — Risk register and contingency plans

**Files:**
- Modify: `artifacts/playbook.md`

- [ ] **Step 1: Append Section F**

```markdown
## Section F — Risk register and contingency plans

### F.1 Top-ranked candidate declines or goes cold

For each rank, who's the natural next-up candidate? Mapped as a fallback table.

| If candidate X declines / cools | Pivot focus to | Why |
|-------------------------------|-----------------|------|
| Rank #1 | Rank #2 (if Lead tier) or Rank #3 (for principal tier consolidation) | Comparable motivation profile + capacity |
| ... | | |

### F.2 Competing institution in active cultivation

For each candidate where a competing institution (NYP, Yale-New Haven, MSK, Greenwich, Northwell) is identified as in active cultivation, the strategy:
- **Complement, not compete.** Frame the Nuvance gift as additive to their existing commitments.
- **Avoid timing collisions.** If competitor is in mid-solicitation, delay the Nuvance ask 6-12 months.
- **Use peer-donor cohort framing** to make giving to both institutions normative.

### F.3 Candidate life situation changes during cultivation

| Life event | Strategy adjustment |
|------------|----------------------|
| Death of candidate | Express condolences sincerely. Re-evaluate cultivation through next-generation or surviving spouse. |
| Divorce | Halt active solicitation 12-18 months. Re-engage when settled, often with both parties separately. |
| Illness | Pause active solicitation. Maintain quiet stewardship and care-relationship engagement (especially for Repayer-motivated candidates this can become more relevant). |
| Financial reversal | Pause solicitation. Maintain relationship through low-cost engagement. Don't ask during reversal. |

### F.4 Institutional case-for-support shifts mid-cultivation

If Nuvance's strategic plan shifts mid-cultivation (e.g., merger, leadership change, new signature initiative):
- Re-baseline every active cultivation
- Some candidates' fit improves; some worsens
- Communicate proactively with candidates already in late-stage cultivation; better to surface a strategic shift early than to have them learn it from external news
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/playbook.md
git commit -m "Phase 6: Playbook Section F — risk register and contingency plans"
```

### Task 6.7: Draft Section G — Novel and frontier strategies

**Files:**
- Modify: `artifacts/playbook.md`

- [ ] **Step 1: Append Section G**

```markdown
## Section G — Novel and frontier strategies

These go beyond the standard CFRE playbook. Marked as evidence-backed or speculative.

### G.1 (Evidence-backed) Donor-advised fund (DAF) activation

**The opportunity:** Many candidates have $10M-$500M in undirected DAFs at Fidelity Charitable, Schwab Charitable, Vanguard Charitable, or family-office-administered DAFs. *That money is already donated tax-wise — it just hasn't been directed.* Asking for a DAF grant is structurally easier than asking for a new commitment.

**Application to our 10:** Per each candidate's dossier, we've flagged whether DAF activity is documented or inferred. For candidates with known DAF activity, design the ask as a DAF grant (or a hybrid: DAF grant for cash portion + appreciated-stock gift for capital portion).

### G.2 (Evidence-backed) Family-office direct engagement

**The opportunity:** Many of our candidates make philanthropic decisions through their family offices, which have dedicated philanthropy directors. Going around the principal to engage the family-office philanthropy director directly (with principal's awareness) dramatically shortens cycle time.

**Application to our 10:** Each dossier flags family-office structure where known. The cultivation plan recommends parallel engagement with the family-office philanthropy lead where applicable.

### G.3 (Evidence-backed) Peer-cohort / circle asks

**The opportunity:** Cluster 3-5 peer-level donors who already know each other and create a *founding cohort* that gives together. Leverages social proof and competitive philanthropy.

**Application to our 10:** Identify the natural clusters within our 10 (e.g., Greenwich-resident hedge fund principals; Hudson Valley estate-country families; Westchester corporate executives). Where 3-4 of our candidates know each other, propose a coordinated "founding cohort" framing.

(specific cohort recommendations here, naming the candidate clusters)

### G.4 (Evidence-backed) Patient-advocate council at scale

**The opportunity:** Build an institutional program where existing patient-donors actively champion new prospects — turning grateful-patient motivation into a peer cultivation engine.

**Application to our 10:** This is an institutional recommendation for Nuvance leadership, not a per-candidate move. If Nuvance doesn't already have a patient-advocate council, surfacing it as a Phase 0 recommendation.

### G.5 (Evidence-backed) Donor's-advisor-ecosystem cultivation

**The opportunity:** Build relationships with the candidate's *own* wealth managers, trust officers, and estate-planning attorneys. They can recommend Nuvance as a beneficiary at the moment of estate planning.

**Application to our 10:** For each candidate over age 65, identify their wealth advisor / trust officer where possible (often documented in court filings, foundation officer listings, or news mentions). Plan engagement.

### G.6 (Speculative) Donor-as-co-architect

**The opportunity:** Invite the prospective lead donor to help design the named opportunity. Co-creation builds ownership and produces dramatically larger gifts when it works.

**Application to our 10:** Only feasible for the Lead-tier candidate (Rank #1) and requires institutional flexibility from Nuvance leadership. Surface as an option, not a default.

### G.7 (Speculative) Impact-investment / hybrid grant-loan structures

**The opportunity:** Some Investor-type donors prefer to invest alongside the institution rather than donate. Hybrid grant-loan structures, program-related investments, or hospital revenue bonds with philanthropic kickers.

**Application to our 10:** Only relevant for candidates with strong Investor motivation profile. Per-candidate applicability flagged in dossiers.

### G.8 (Speculative) Naming 2.0

**The opportunity:** Traditional naming has plateaued for some donors. Alternatives: named clinical-trial cohorts, multigenerational programs, naming with sunset provisions, "founding family" framing.

**Application to our 10:** For candidates whose existing institutional landscape includes multiple naming rights they already hold, propose novel naming structures rather than traditional building naming.

### G.9 (Speculative) Convening-as-cultivation

**The opportunity:** Host a recurring topical convening — bringing the candidate into the room with clinical leaders, peer donors, and policy experts.

**Application to our 10:** Most powerful for Communitarian and Investor motivations. Requires Nuvance to have genuine intellectual content to convene around (Phase 0 audit informs feasibility).

### G.10 (Speculative) AI-instrumented donor intelligence

**The opportunity:** Continuously monitor public information about candidates to surface real-time signals (liquidity events, deaths in family, board transitions) that trigger cultivation moves at optimal moments.

**Application to our 10:** This is an institutional infrastructure recommendation, not a per-candidate move. Worth raising with Nuvance leadership.

### G.11 Per-candidate novel-strategy applicability

Summary table:

| Rank | Name | Most applicable novel strategies |
|------|------|----------------------------------|
| 1 | ... | G.1 (DAF), G.3 (cohort with #4 and #7), G.6 (co-architect for Lead opportunity) |
| ... | | |
```

- [ ] **Step 2: Commit**

```bash
git add artifacts/playbook.md
git commit -m "Phase 6: Playbook Section G — novel and frontier strategies"
```

### Task 6.8: Checkpoint E — playbook draft to Mark

- [ ] **Step 1: Compose checkpoint summary**

Write Mark a summary:
1. Playbook draft is complete at `artifacts/playbook.md`
2. Section-by-section overview (1 line each)
3. Most consequential findings (especially from Section E gift table and the case-for-support honest assessment)
4. Specific questions for Mark to review

- [ ] **Step 2: Pause execution and post the summary**

Halt. Mark reviews and provides feedback. Do not proceed to Phase 7 final polish without explicit approval.

### Task 6.9: Final playbook polish

**Files:**
- Modify: `artifacts/playbook.md`

- [ ] **Step 1: Apply feedback from Checkpoint E**

Make any edits Mark requested.

- [ ] **Step 2: Cross-link to other artifacts**

Verify every reference to dossiers, cheat sheets, intro map, etc. has correct relative paths.

- [ ] **Step 3: Add table of contents**

Add a TOC at the top of `artifacts/playbook.md` linking to all sections.

- [ ] **Step 4: Final read-through for consistency**

Read top-to-bottom. Fix any inconsistencies in terminology, candidate references, or formatting.

- [ ] **Step 5: Commit**

```bash
git add artifacts/playbook.md
git commit -m "Phase 6: Final playbook polish"
```

---

# Phase 7 — Executive summary + designed presentation deck

Final artifacts. Executive summary first, then deck.

### Task 7.1: Draft the executive summary

**Files:**
- Create: `artifacts/executive_summary.md`

- [ ] **Step 1: Define success criteria**

2-3 page summary that:
- Frames the strategy in one paragraph
- Lists all 10 candidates with one-line each
- Points to the rest of the package
- Is shareable as-is up Laura's chain (foundation director, CEO, board chair) without editing
- Surfaces the most consequential institutional finding (from Phase 0 audit) so leadership sees it

- [ ] **Step 2: Write the executive summary**

Create `artifacts/executive_summary.md`:

```markdown
# Nuvance Health Major-Gift Strategy — Executive Summary

**Prepared:** YYYY-MM-DD
**For:** Laura Eldridge, CFRE, Nuvance Health Foundation
**Authorized for re-sharing:** Foundation Director, CEO, Board Chair

## The strategy in one paragraph

(1 paragraph synthesizing the affinity-first methodology, the 10 candidates, the suggested gift table, and the institutional considerations)

## The 10 candidates

| Rank | Name | Tier | Suggested gift | Primary motivation | Top intro path |
|------|------|------|------|------|------|
| 1 | ... | ... | $XXM | Repayer | Connector Name |
| ... |

## Most consequential findings

### Finding 1: [Case-for-support audit headline]
(1-2 sentence headline plus 1 paragraph elaboration)

### Finding 2: [Net-new candidate vs. expected billionaire-only frame]
(1-2 sentence headline plus 1 paragraph)

### Finding 3: [Institutional gap finding from gift table]
(1-2 sentence headline plus 1 paragraph)

## What's in the rest of the package

- **Dossiers (10):** Full per-candidate research with wealth, giving history, motivation hypothesis, warm-intro paths, cultivation plan, risk flags — `dossiers/01_*.md` through `10_*.md`
- **Warm-intro network map:** Interactive visualization at `artifacts/intro_network_map/index.html`
- **Cheat sheets (10):** Printable one-page meeting prep cards at `artifacts/cheat_sheets/`
- **Benchmarking memo:** 8-12 comparable mega-gifts analyzed for pattern extraction — `research/phase_4_benchmarking/benchmarking_memo.md`
- **Cross-reference matrix:** Side-by-side candidate comparison at `artifacts/cross_reference_matrix.md`
- **Strategy playbook:** Tailored synthesis at `artifacts/playbook.md`
- **Presentation deck:** Designed deck for customization per donor at `artifacts/deck/index.html`

## Recommendations for Nuvance leadership

(itemized list of institutional moves required for the strategy to land at full scale, derived from Phase 0 audit and Section E of the playbook)
```

- [ ] **Step 3: Commit**

```bash
git add artifacts/executive_summary.md
git commit -m "Phase 7: Executive summary"
```

### Task 7.2: Build the ranked short-list artifact

**Files:**
- Create: `artifacts/ranked_short_list.md`

- [ ] **Step 1: Define success criteria**

A clean, polished version of the short list (vs. the working `research/phase_2_short_list/short_list.md`). Includes everything in the dossier summary plus the additional artifact-level polish.

- [ ] **Step 2: Write the document**

Create `artifacts/ranked_short_list.md`:

```markdown
# Ranked Short List — Final 10 Candidates

**Prepared:** YYYY-MM-DD
**For:** Laura Eldridge, CFRE

## How to use this list

Lay this alongside your internal 250-candidate portfolio. Compare:
- Which of these 10 are already in your portfolio (validation)
- Which are net-new (potential additions)
- Which are ranked differently by us vs. you (worth a conversation about why)

## The 10 in priority order

### Rank #1: [Name]
- **Tier:** Billionaire / Centi-millionaire
- **Wealth est:** $XB / $XM
- **Primary motivation:** [Prince's face]
- **Suggested first gift:** $XM
- **Suggested named opportunity:** [from Phase 0]
- **Top warm-intro path:** [connector]
- **Why rank #1:** (paragraph)

**Read the full dossier:** `dossiers/01_<slug>.md`
**Get pre-meeting:** `artifacts/cheat_sheets/01_<slug>.md`

(repeat for #2 through #10)

## Net-new vs. validation matrix

(reference: Laura's task is to map which of these 10 she already has vs. which are new — we don't fill this column, she does)
```

- [ ] **Step 3: Commit**

```bash
git add artifacts/ranked_short_list.md
git commit -m "Phase 7: Ranked short list final artifact"
```

### Task 7.3: Design and build the presentation deck

**Files:**
- Create: `artifacts/deck/index.html`
- Create: `artifacts/deck/style.css`
- Create: `artifacts/deck/deck.js`
- Create: `artifacts/deck/assets/` (any images)

This task invokes the `frontend-design` skill to ensure design rigor. The Skill should be invoked at the start of this task.

- [ ] **Step 1: Define success criteria**

A presentation deck that:
- Is HTML-based (not PowerPoint) — runs in browser, easy to update
- 10-15 slides
- Visually distinctive — not a generic template
- On-brand with Nuvance Health's visual identity (color palette, typography from Phase 0 research)
- Customizable per donor — explicit slots in the markup for swapping in candidate-specific motivation framing and named-opportunity
- Designed to be both presented AND left behind as a written document
- Built with care; uses real design principles (typographic hierarchy, white space, asymmetric grid where appropriate, considered color use, photographic treatment)

- [ ] **Step 2: Invoke the frontend-design skill**

Use the `Skill` tool to invoke `frontend-design:frontend-design`. Provide context:
- This is a presentation deck for major-gift solicitation
- Target audience: ultra-high-net-worth philanthropists
- Tone: confident, considered, refined — not aggressive, not "marketing-y"
- Reference brands: think how MIT Media Lab, Stanford Medicine, MoMA present — confident institutional design, not corporate-blandness
- Brand inputs: Nuvance's color palette and typography from Phase 0

- [ ] **Step 3: Outline deck content**

Standard slide flow (subject to design adjustment):

1. **Title slide** — Nuvance branding, project title, date, donor name slot
2. **Their why** — donor's specific connection / motivation (customizable slot)
3. **Where Nuvance is today** — institutional snapshot, 2-3 strategic differentiators
4. **The opportunity** — specific named opportunity tied to their motivation (customizable slot)
5. **The impact** — what this gift makes possible, told as patient story + statistical reach
6. **The model** — gift structure, naming, recognition, multi-year pledge if applicable
7. **The team** — clinical leadership the donor would partner with (photos, brief bios)
8. **The community** — peer donors and their commitments (social proof, customizable per cohort framing)
9. **The ask** — specific number, specific naming, specific timeline (customizable slot)
10. **What comes next** — proposed next steps, timeline, follow-up commitments
11. **Thank you** — closing with quote or brief vision statement

For longer decks (up to 15 slides), expand "The opportunity" and "The impact" into 2-3 slides each.

- [ ] **Step 4: Build the deck**

Following the frontend-design guidance from Step 2, build:
- `artifacts/deck/index.html` — slide structure with `<section>` elements for each slide
- `artifacts/deck/style.css` — design system (colors, typography, spacing, slide transitions)
- `artifacts/deck/deck.js` — minimal JS for keyboard navigation (left/right arrows, escape to overview)
- `artifacts/deck/assets/` — any images

Use real design principles. Specifically:
- Strong typographic hierarchy
- Considered use of white space
- Photographic treatment that feels institutional (not stock-photo-bland)
- Color palette restraint
- Asymmetric layouts where they serve the content
- No bullet-point cliché slides

- [ ] **Step 5: Test in browser**

Open `artifacts/deck/index.html` in a browser. Click/keyboard through all slides. Verify:
- All slides render
- Navigation works
- Customizable slots are clearly marked
- Visual polish is real

- [ ] **Step 6: Document customization instructions**

Create `artifacts/deck/README.md` explaining how Laura customizes the deck per donor:

```markdown
# Presentation Deck — Customization Guide

## Per-donor customization slots

Each slide marked `<!-- CUSTOMIZE: donor_name -->` contains a placeholder that should be replaced per donor.

| Slide | Slot ID | What to customize |
|-------|---------|---------------------|
| 1 | donor_name | Replace "[Donor Name]" with actual name |
| 2 | donor_why | Replace placeholder with donor's specific motivation framing (pull from dossier section X) |
| 4 | named_opportunity | Replace with specific named opportunity for this donor |
| 9 | specific_ask | Replace with specific gift number, naming, timeline |

## Workflow

1. Open `index.html` in a code editor
2. Search for `CUSTOMIZE` comments
3. Replace each slot per the donor's dossier and cheat sheet
4. Save and open in browser to verify
5. Print to PDF for the leave-behind version
```

- [ ] **Step 7: Commit**

```bash
git add artifacts/deck/
git commit -m "Phase 7: Designed presentation deck"
```

### Task 7.4: Final package review

**Files:**
- Create: `README.md` at project root

- [ ] **Step 1: Verify all eight artifacts exist**

```bash
cd /Users/marksenerth/_src/eldridge_research
ls -1 dossiers/ | wc -l    # Expect 10
ls -1 artifacts/cheat_sheets/ | wc -l  # Expect 10
ls -1 artifacts/intro_network_map/   # Expect index.html, style.css, network_data.json
ls -1 artifacts/deck/                # Expect index.html, style.css, deck.js, assets/, README.md
test -f artifacts/playbook.md
test -f artifacts/executive_summary.md
test -f artifacts/ranked_short_list.md
test -f artifacts/cross_reference_matrix.md
test -f research/phase_4_benchmarking/benchmarking_memo.md
```

All checks should pass.

- [ ] **Step 2: Create project README**

Create `/Users/marksenerth/_src/eldridge_research/README.md`:

```markdown
# Nuvance Health Major-Gift Strategy Package

**For:** Laura Eldridge, CFRE, Nuvance Health Foundation
**Prepared:** YYYY-MM-DD

## Start here

→ `artifacts/executive_summary.md` (2-3 page overview)

## The full package

| Artifact | Path | Purpose |
|---------|------|--------|
| 1. Dossiers | `dossiers/` | Full per-candidate research files |
| 2. Warm-intro network map | `artifacts/intro_network_map/index.html` | Interactive intro-path visualization |
| 3. Benchmarking memo | `research/phase_4_benchmarking/benchmarking_memo.md` | Comparable mega-gift patterns |
| 4. Cheat sheets | `artifacts/cheat_sheets/` | One-page printable meeting prep cards |
| 5. Ranked short list | `artifacts/ranked_short_list.md` | The 10 candidates ranked |
| Supplement: Cross-reference matrix | `artifacts/cross_reference_matrix.md` | Side-by-side comparison |
| 6. Strategy playbook | `artifacts/playbook.md` | Tailored synthesis (Sections A-G) |
| 7. Executive summary | `artifacts/executive_summary.md` | Shareable framing |
| 8. Presentation deck | `artifacts/deck/index.html` | Designed deck for customization |

## Research foundations

| Foundation | Path |
|------------|------|
| Institutional context | `research/phase_0_institutional_context/` |
| Long list | `research/phase_1_long_list/` |
| Short list | `research/phase_2_short_list/` |
| Benchmarking case studies | `research/phase_4_benchmarking/case_studies/` |
| Source index | `sources/source_index.md` |

## How to use this package

1. Read the **executive summary** first.
2. Compare the **ranked short list** to your internal portfolio.
3. For each candidate you'll cultivate, read the **dossier** + **cheat sheet**.
4. Use the **warm-intro network map** to identify the best intro path.
5. For pitch-stage candidates, customize the **presentation deck** (see `artifacts/deck/README.md`).
6. Reference the **playbook** for cultivation cadence and donor-psychology framing.
7. Reference the **benchmarking memo** for institutional-pattern context.

## Spec and plan

- Spec: `docs/superpowers/specs/2026-05-10-nuvance-fundraising-strategy-design.md`
- Implementation plan: `docs/superpowers/plans/2026-05-10-nuvance-fundraising-implementation.md`
```

- [ ] **Step 3: Final commit**

```bash
git add README.md
git commit -m "Add project README and final package index"
```

- [ ] **Step 4: Tag the milestone**

```bash
git tag -a v1.0 -m "Major-gift strategy package complete"
```

- [ ] **Step 5: Notify Mark**

Compose a final summary for Mark:
1. The eight-artifact package is complete
2. Final commit hash and tag
3. The key recommendation: who to start with, why, what next 30 days look like
4. The most consequential institutional finding from the Phase 0 audit (worth Mark mentioning to Laura first)
5. Any outstanding risks or open questions the package surfaces

---

# Appendices

## Appendix A — Dossier Template

For each candidate, the dossier follows this exact structure. Page target: 6-8 pages.

```markdown
# Dossier — [Candidate Full Name]

**Rank:** #N of 10
**Compiled:** YYYY-MM-DD
**Compiled by:** Mark Senerth (project lead) / [agent if executed by agent]
**Wealth tier:** Billionaire / Centi-millionaire
**Confidence:** High / Medium / Low (overall confidence in the dossier's actionable conclusions)

---

## 1. Snapshot

- **Full name:** ...
- **Age:** ... (year of birth: ...)
- **Primary residence:** ...
- **Secondary residence(s):** ...
- **Family:** spouse, children (with relevant philanthropic involvement noted), parents (if relevant for Dynast motivation)
- **Wealth source:** ... (industry, company, transaction history)
- **Estimated net worth:** $X.XB (range $X-Y) — **(confidence: known/inferred)**
- **Primary giving vehicles:** [Foundation Name, EIN] / [DAF provider] / direct
- **Social/club affiliations:** [most relevant — Augusta, Pine Valley, Pilgrims, NYC clubs, Greenwich Country Club, etc.]
- **One-paragraph elevator description:** (3-5 sentences summarizing who they are at the level Laura would brief her CEO in the elevator)

## 2. Wealth and liquidity analysis

- **Wealth composition:** (estimated breakdown — public equity, private holdings, real estate, cash/securities, family-office-managed assets)
- **Liquidity profile:** (what's liquid now, what's near-liquid, what's structurally illiquid)
- **Recent liquidity events:** (any IPO, M&A exit, large sale within the past 36 months, with citation)
- **Anticipated liquidity events:** (any planned or rumored — IPO filings, sale processes, etc., with citation)
- **Sources for wealth claims:** (numbered list with retrieval dates)

## 3. Giving history

A comprehensive inventory of every documented gift ≥ $100K to any nonprofit recipient, in the past 15 years where data is available. Sources: foundation 990-PFs (Schedule I grants paid), news archives, donor walls, annual reports.

| Year | Recipient | Cause | Amount | Vehicle | Source |
|------|-----------|-------|--------|---------|--------|
| 2024 | ... | ... | $XM | Foundation | ... |
| ... |

### Pattern analysis

- **Average gift size:** $X
- **Largest single gift:** $X to [recipient]
- **Time-of-year pattern:** (if visible — many give in December for tax reasons; some give around specific events)
- **Recipient pattern:** (clusters by cause, geography, institutional type)
- **Multi-year pledge pattern:** (do they make multi-year commitments? Single-shot gifts? Both?)
- **Anonymous-gift signals:** (any clues that they give anonymously? — large gaps between their wealth and their visible giving suggest anonymous activity)

## 4. Affinity signals (scored 1-5 each, per long-list methodology)

### S1 — Documented Nuvance connection (score: N/5)
(rationale with evidence and citations)

### S2 — Residential ties (score: N/5)
(rationale)

### S3 — Healthcare giving history (score: N/5)
(rationale, with explicit reference to S3 from giving history table)

### S4 — Cause affinity to Nuvance signature programs (score: N/5)
(rationale, referencing Phase 0 audit for what Nuvance's signature programs are)

### S5 — Giving vehicle sophistication (score: N/5)
(rationale, with foundation EIN and asset size)

### S6 — Life-stage signals (score: N/5)
(rationale, with age, succession status, recent liquidity events)

**Total affinity score:** N/30

## 5. Motivation hypothesis

### Primary face (per Prince & File): [Repayer / Dynast / Investor / Communitarian / Altruist / Socialite / Devout]

(2-3 paragraph case for this hypothesis with specific evidence from giving history, public statements, life events. Be explicit that this is *inferred*, not certain.)

### Secondary face: [face]

(1-2 paragraph rationale)

### What this means operationally

- **Cultivation approach:** (specific moves that work for this profile)
- **Pitch framing:** (specific framing for the first meeting)
- **Anti-patterns:** (specific moves that would *break* trust with this profile)

## 6. Warm-intro paths

### Primary path (most likely to work)
- **Connector:** [Name, role, organization]
- **Their relationship to the candidate:** (specific — board service, school, business, family, club)
- **Their relationship to Nuvance:** (specific — Nuvance board, foundation board, CEO contact, etc.)
- **Strength assessment:** Strong / Medium / Weak
- **How to activate:** (specific suggested ask of the connector — "introduce us at lunch", "host a small dinner", "make a phone call", etc.)

### Backup path
(same structure)

### Alternative path
(same structure)

## 7. Cultivation plan (12-18 months)

### Phase 1 — Qualification (months 0-3)
- Specific recommended first-touch (often via Primary Path)
- Specific questions to test during qualification
- Decision point: advance or drop

### Phase 2 — Cultivation (months 3-12)
- Recommended touchpoints, with specific people from Nuvance to involve at each (CMO, clinical director, board chair, etc.)
- Recommended events or convenings
- Pacing: how many touches, what intervals

### Phase 3 — Solicitation (months 12-18)
- **Suggested ask amount:** $XM
- **Suggested named opportunity:** (from Phase 0 inventory, matched to motivation hypothesis)
- **Who should be at the ask:** (specific roles — CEO + board chair + peer donor)
- **Setting recommendation:** (their setting, specific suggestion)
- **Specific opening, bridge, and ask language:** (3-4 sentences each, customized to this candidate)

### Phase 4 — Stewardship (months 18+)
- Recommended named-recognition event style
- Impact-reporting cadence (quarterly / annually)
- Clinical-leadership ongoing-access plan

## 8. Risk flags

- (any active litigation involving the candidate)
- (any family disputes affecting philanthropic decision-making)
- (any public controversies that could create reputational risk)
- (any competing institutional loyalties — board memberships, recent gifts to competitors)
- (any recent declined asks elsewhere, if documented)
- (any health or life-situation flags)

If no risk flags: explicitly note "No identified risk flags as of [date]."

## 9. Novel-strategy applicability

For each novel strategy in Playbook Section G, brief assessment of applicability:

- **G.1 DAF activation:** Applicable / Not applicable / Inferred applicable. (Rationale)
- **G.2 Family-office direct engagement:** ...
- **G.3 Peer-cohort:** ... (note specific cohort with other candidates if applicable)
- **G.4 Patient-advocate council:** ...
- **G.5 Advisor-ecosystem cultivation:** ...
- **G.6-G.10:** (assess each)

## 10. Sources

Numbered list of all sources cited in this dossier, with URL or filing identifier, retrieval date, and brief description. All sources also added to `sources/source_index.md`.
```

## Appendix B — Case Study Template

For each benchmarking case study, this exact structure:

```markdown
# Case Study — [Donor / Family] gift to [Institution] ([Year])

**Gift size:** $XM
**Type:** Lead / Principal / Major / Mid-tier
**Compiled:** YYYY-MM-DD

## 1. The gift in one paragraph

(2-3 sentence summary)

## 2. Donor profile

- Background, wealth source, age at time of gift, family composition
- Prior philanthropic history before this gift
- Primary motivation (per Prince's framework): [Repayer / Dynast / ...]
- Evidence for motivation classification

## 3. Recipient institution profile (at time of gift)

- Size, scale, strategic positioning
- Case for support — what they were raising for
- Existing donor base composition
- Foundation/Development infrastructure

## 4. The cultivation story

(Reconstructed from public sources — how the relationship started, what touchpoints occurred over what timeline, who was involved on the institutional side, when the formal ask happened, what the structure of the ask was)

## 5. The gift structure

- One-time vs. multi-year pledge
- Cash vs. appreciated stock vs. DAF grant vs. hybrid
- Naming rights structure
- Any restrictions or designations
- Any contingencies or performance clauses

## 6. Post-gift stewardship and follow-on

- What stewardship was provided
- Whether the donor made follow-on gifts (and at what scale)
- Any controversies or course-corrections post-gift

## 7. What worked — patterns to extract

(specific moves the institution made that landed the gift)

## 8. What didn't work or could have

(any documented missteps, near-failures, or post-hoc institutional learnings)

## 9. Applicability to Nuvance

(specific transfer to Nuvance's situation: which of our 10 candidates this pattern most applies to, and what Nuvance leadership would need to do to apply it)

## 10. Sources
```

## Appendix C — Cheat Sheet Template

One page. Designed to print on a single 8.5x11 sheet. Used by Laura immediately before a meeting.

```markdown
# Cheat Sheet — [Candidate Full Name]

**Rank:** #N | **Tier:** Billionaire / Centi-millionaire | **Suggested first gift:** $XM
**Primary motivation:** [Prince's face] | **Top intro path:** [Connector name]

---

## What you know (in 60 seconds)

- (one-sentence: who they are professionally)
- (one-sentence: their family / personal situation that matters)
- (one-sentence: their philanthropic posture)
- (one-sentence: their connection to Nuvance / health-region)
- (one-sentence: a recent life event or signal worth knowing)

## Three opening questions tailored to them

1. **(Question that activates their motivation profile)**
2. **(Question that surfaces their connection to health/Nuvance specifically)**
3. **(Question about their philanthropic philosophy that lets them feel expert)**

## Two reference points to mention naturally

1. **(A name they care about: peer, mentor, family member, mutual friend)**
2. **(A place or institution they care about: alma mater, club, town)**

## The single motivation hypothesis to test

**Hypothesis:** [Their primary face is X because of Y evidence]
**What confirms:** [Specific things they'd say or react to]
**What disconfirms:** [Specific things that would force a revised hypothesis]

## If conversation goes well: the gentle next step

(Not the ask. The next-meeting setup. Specific suggested ask-of-them: "Would you be open to a longer conversation with our CEO and CMO next month?" or "I'd love to walk you through what we're planning at [program X] — I could come by for an hour in [timeframe].")

## If asked "What can I do to help?" early (rare but happens)

(Specific response that doesn't undersell the relationship — never blurt the ask, but signal the scope: "We're in early thinking about [opportunity]. I'd love your perspective as we develop it.")

---

**Full dossier:** `dossiers/NN_<slug>.md`
**Compiled:** YYYY-MM-DD
```

---

# Self-Review (done by the plan author before delivery)

This section documents the review I performed against the spec.

**1. Spec coverage check:**
- ✓ Section 2 (strategic approach: affinity-first + calibrated tiers) — Phases 1-2 implement this
- ✓ Section 3 (research methodology) — Task 1.1 documents the methodology; Tasks 1.2-1.3 execute it
- ✓ Section 4 (eight deliverables) — Phases 3-7 produce all eight artifacts
- ✓ Section 5 (playbook contents Sections A-G) — Tasks 6.1-6.7 implement each section
- ✓ Section 6 (phasing) — Plan structure mirrors spec Phase 0-7 structure exactly
- ✓ Section 7 (data limitations) — Documented in Task 1.1 and referenced throughout
- ✓ Section 8 (out of scope) — No tasks attempt out-of-scope work
- ✓ Section 9 (success criteria) — Verifiable criteria (1-6) are met by quality-standards checks in each task; aspirational criteria (7-10) are documented in the executive summary and final-package README for post-hoc tracking

**2. Placeholder scan:** No "TBD", "TODO", "implement later", or "Add appropriate X" placeholders. All template structures have explicit fields. All commands are exact.

**3. Type consistency:** Naming conventions are consistent throughout — slugs are URL-safe with hyphens; file numbering is zero-padded `01`-`10`; section IDs are Section A, B, C, D, E, F, G consistently in the playbook; checkpoint labels are A, B, C, D, E consistently.

**4. Critical paths verified:**
- Phase 0 must complete before Phase 1 (data dependency — affinity scoring depends on Nuvance signature-program identification from Phase 0)
- Phase 1 must complete before Phase 2 (dataflow dependency)
- Phase 2 must complete before Phase 3 (short list determines dossier candidates)
- Phase 3 can run in parallel with Phase 4 (no shared data)
- Phase 5 depends on Phase 3 (dossiers feed cheat sheets and network map)
- Phase 6 depends on Phases 0-5
- Phase 7 depends on Phase 6

**5. Effort scaling:** Plan reflects the 6-10 weeks scope from spec. Heavier tasks (Phase 3 dossiers, Phase 4 benchmarking case studies) are explicitly enumerated. Lighter tasks (cheat sheets, executive summary) are explicit one-pass artifacts.

**6. Parallelization design:** The Parallelization Strategy section maps every parallelizable batch with subagent count, dependencies, and conflict-resolution approach. Parallel execution can compress the full scope from 6-10 weeks to 1.5-3 weeks, bottlenecked by 5 sequential human-review checkpoints and synthesis tasks. Self-contained Appendix templates (A, B, C) make per-unit parallel dispatch feasible.

The plan is ready for execution.
