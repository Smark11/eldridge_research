# Pending Sources — Dossier 02 Dyson

**Compiled:** 2026-05-11
**Companion file to:** `/Users/marksenerth/_src/eldridge_research/dossiers/02_dyson.md`
**Purpose:** Track sources cited in the dossier that were not retrievable in full during the research session and require follow-up verification with live web access, or sources whose content was captured via web search summary rather than direct fetch.

---

## Direct-fetch failures during 2026-05-11 research session

These sources returned HTTP 403, 404, 429, or other access errors when WebFetch was attempted; their content was captured via WebSearch summary instead. Reverification at a future session with a different fetch strategy (different user agent, residential proxy, cached web archive, etc.) is advised before any external citation use.

| Source | URL | Error | Search-summary captured? | Follow-up action |
|---|---|---|---|---|
| White House Historical Association National Council — Robert Dyson | https://www.whitehousehistory.org/national-council/robert-dyson | 403 Forbidden | Yes — content via web search summary | Try Wayback Machine; or request from WHHA directly |
| Hudson Valley Magazine — John Dyson Millbrook Vineyards profile | https://hvmag.com/food/john-dyson-of-millbrook-vineyards-winery/ | 403 Forbidden | Yes — content via web search summary | Try Wayback Machine |
| Dyson Racing — Rob Dyson team bio | https://www.dysonracing.com/team/rob-dyson/ | 403 Forbidden | Partial — search summary | Try Wayback Machine |
| Dyson Racing — Chris Dyson team bio | https://www.dysonracing.com/team/chris-dyson/ | 403 Forbidden | Yes — content via search summary | Try Wayback Machine |
| Prabook — Robert R. Dyson biography | https://prabook.com/web/robert_r.dyson/1658789 | 403 Forbidden | Yes — birth year 1946 confirmed via search summary | Look for cross-reference in another biographical encyclopedia |
| Wikipedia — Rob Dyson | https://en.wikipedia.org/wiki/Rob_Dyson | (Not directly fetched in this session; flagged for next pass) | No | Direct fetch in next session |
| Bloomberg — Rob Dyson profile | https://www.bloomberg.com/profile/person/2134831 | 403 Forbidden | No | Bloomberg subscription required for full data |
| ProPublica full 990-PF for Dyson Foundation FY2024 — Schedule I | https://projects.propublica.org/nonprofits/organizations/136084888/202533179349103208/full | Did not return Schedule I line-item data via the prompt-based fetcher | Partial only | Download the raw PDF directly from ProPublica or IRS XML feed |
| Nuvance Health Leadership page | https://www.nuvancehealth.org/leadership/ ; http://www.nuvancehealth.org/leadership ; https://nuvancehealth.org/leadership | 301 redirect chain then 403 | No | Try post-merger Northwell consolidated site; or request from Laura directly |
| Dyson Foundation 2023 page | https://dysonfoundation.org/2023/ | Page exists but lacks individual recipient data without interactive query | Partial | Use dysonfoundation.org/awarded-grants/ search interface |
| Dyson Foundation Awarded Grants searchable database | https://dysonfoundation.org/awarded-grants/ | Search interface; cannot be queried by web fetcher | No | Interactive query needed by human researcher — query specifically: Vassar Brothers, Nuvance, Northern Dutchess Hospital, Putnam Hospital, hospital, healthcare |
| North Bay Business Journal Williams Selyem coverage | https://www.northbaybusinessjournal.com/article/industrynews/owner-of-williams-selyem-winery-in-healdsburg-sells-minority-stake-to-frenc/ | 301 to Press Democrat URL | Yes — content via redirect; some details captured | OK to cite Press Democrat redirect destination |

---

## Critical follow-up research items for Laura / next-phase agent

### High-priority (cultivation-critical)

1. **Dyson Foundation grant-by-grant FY2020-FY2024 Schedule I extraction** — required to confirm exact dollar amounts and dates of Vassar Brothers / Nuvance recipient grants. Specifically:
   - Has Dyson made any grant to Nuvance Health Foundation (vs. Vassar Brothers Hospital Foundation) since the 2019 merger? If so, what scale?
   - What is the precise multi-year structure of the $750K Patient Pavilion grant — single payment, multi-year tranche, or specific designation within the Pavilion budget?
   - Are there 2024-2025 Vassar Brothers grants below the public-announcement threshold ($100K-ish) that the news pages don't surface?
   
   *Method:* Download the FY2024 990-PF PDF directly from IRS or ProPublica; manually review Schedule I line items.

2. **Robert R. Dyson's exact current relationship to Nuvance Health board** — Phase 1 captured "Director, Health Quest Systems" (legacy entity). Post-2019 Nuvance merger and post-May-2026 Northwell merger, has Rob remained on a Nuvance-region governance body, or did the merger end his board service?
   
   *Method:* Direct ask of Laura. Internal knowledge.

3. **Nuvance Health Foundation Schedule B** — if 990 ungredacted, confirms Dyson Foundation as named major contributor and at what level.
   
   *Method:* Direct ask of Laura. Internal knowledge OR full ProPublica 990 download.

4. **Vassar Brothers Hospital Foundation board roster (full current)** — current chair Craig Irwin and vice chair Geeta Gorwara captured; full board composition required to identify Dyson-friendly peers for the warm-intro path.
   
   *Method:* Request from Laura OR Foundation development office.

5. **John S. Dyson + Kathe Dyson recent philanthropy post-2024 Williams Selyem majority sale** — has any new vehicle been established? Has the John And Kathe Dyson Foundation been capitalized with proceeds? Is John's giving going through Cornell, the Dyson Foundation, or new channels?
   
   *Method:* IRS exempt-organizations new-filings search; news monitoring; Cornell Dyson School development office (Rebekah Carmichael or current development director); Williams Selyem post-sale disclosure documents.

### Medium-priority (context-builders)

6. **Anne E. Dyson surviving family members' relationship to Dyson Foundation** — her sons Roberto and Mac Hull, stepson Ben Kramer (Millbrook), and husband Michael S. Kramer (former managing editor NY Daily News) — are any involved in foundation programs? Could be a Repayer-thread cultivation thread.

7. **Christopher C. Dyson personal philanthropic activity outside the Foundation** — any independent giving via personal channels (CD Racing-adjacent, Dutchess County real estate networks, motorsports philanthropy)? Could surface a personal-affinity hook independent of the family Foundation.

8. **Molly Dyson-Schwery personal philanthropic activity outside the Foundation** — her social-work background suggests potential personal Adelphi or direct-service relationships; identifying these could surface a personal-engagement hook.

9. **Peter L. Dyson** (third brother) — Winnetka IL; Dyson, Dyson and Dunn private-equity firm. Is he philanthropically active? Could matter if a coordinated Dyson-family cohort approach develops.

10. **DKM 2024-2026 acquisitions or portfolio transactions** — any signal of major deal flow that would indicate cash-flow capacity expansion or contraction.

### Low-priority (background fill)

11. **Charles H. Dyson estate disposition** — what did the founder's 1997 death distribute among Rob, John, Peter, and Anne's heirs? Relevant for understanding the family's intrinsic capital scale.

12. **Margaret Macgregor Dyson personal philanthropy** — she d. 1990; any specific gifts in her name?

---

## Source-index entries to add

Add to `/Users/marksenerth/_src/eldridge_research/sources/source_index.md`:

- Dyson Foundation Board and Officers page (current as of 2026-05-11)
- Dyson Foundation News (2024-2026 quarterly board grant releases)
- Dyson Foundation Financials page
- ProPublica Dyson Foundation profile (EIN 13-6084888)
- ProPublica John And Kathe Dyson Foundation profile (EIN 83-2348197)
- Cause IQ Dyson Foundation profile
- InfluenceWatch Dyson Foundation profile (political-giving caveats noted)
- Chris Dyson Wikipedia
- John S. Dyson Wikipedia
- DKM corporate history page
- Williams Selyem John and Kathe Dyson bio
- Wine Spectator / Wine Industry Advisor — Faiveley Williams Selyem 2020 minority + 2024 majority sale coverage
- Cornell Dyson School naming gift Cornell Chronicle
- Westfair Dyson Breast Center opening Aug 2015
- NY Senate Dyson Center for Cancer Care 2013
- Harvard Gazette Dana-Farber Anne Dyson Chair 2001
- Anne E. Dyson Community Pediatrics Training Initiative — PubMed + NYP page
- LittleSis Robert R. Dyson aggregate affiliations
- Vassar Brothers Hospital Foundation ProPublica
- Vassar Brothers Hospital Foundation Instrumentl 990 summary

---

**Document end.**
