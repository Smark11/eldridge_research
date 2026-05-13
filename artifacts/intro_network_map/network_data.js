// Network data — same content as network_data.json, exposed as a global
// so the page works over file:// (where fetch() of local JSON is blocked
// by CORS in modern browsers). Keep this file in sync with network_data.json.

window.NETWORK_DATA = {
  "_meta": {
    "compiled": "2026-05-12",
    "description": "Warm-intro network mapping the 7 short-list candidates, their named connectors, and Nuvance/Northwell anchors. Edge strengths reflect dossier evidence.",
    "node_types": {
      "candidate": "One of the 7 short-list candidates",
      "connector": "Person who can introduce or activate a candidate; not currently a candidate themselves",
      "nuvance_anchor": "Internal Nuvance/Northwell staff or board",
      "external_anchor": "External institution (Northwell flagship, NYP, etc.) shown for context"
    },
    "edge_strengths": {
      "strong": "Documented direct relationship, active engagement",
      "medium": "Documented relationship, less recent or less direct activity",
      "weak": "Inferred or indirect relationship",
      "avoid": "Existing relationship that should NOT be activated for this cultivation (competing institutional loyalty)"
    }
  },

  "nodes": [
    { "id": "cand_01_bauer", "name": "George & Carol Bauer", "type": "candidate", "rank": 1, "tier": "Centi-millionaire", "wealth": "$200-500M+", "town": "Wilton CT", "dossier": "dossiers/01_bauer.md" },
    { "id": "cand_02_dyson", "name": "Robert R. Dyson + family", "type": "candidate", "rank": 2, "tier": "Centi-millionaire", "wealth": "$300M-$1B", "town": "Millbrook NY", "dossier": "dossiers/02_dyson.md" },
    { "id": "cand_03_dalio", "name": "Ray & Barbara Dalio", "type": "candidate", "rank": 3, "tier": "Billionaire", "wealth": "$15.4B", "town": "Greenwich CT", "dossier": "dossiers/03_dalio.md" },
    { "id": "cand_04_whittingham", "name": "Adam Whittingham + G3 family", "type": "candidate", "rank": 4, "tier": "Centi-mill (modest)", "wealth": "$50-300M", "town": "Stamford CT", "dossier": "dossiers/04_whittingham.md" },
    { "id": "cand_05_rees", "name": "Michael & Allison Rees", "type": "candidate", "rank": 5, "tier": "Billionaire", "wealth": "$1.8B", "town": "New Canaan CT", "dossier": "dossiers/05_rees.md" },
    { "id": "cand_06_goldman_fowler", "name": "Amy Goldman Fowler", "type": "candidate", "rank": 6, "tier": "Billionaire", "wealth": "$3.0-3.3B", "town": "Rhinebeck NY", "dossier": "dossiers/06_goldman_fowler.md" },
    { "id": "cand_07_jasper_johns", "name": "Jasper Johns", "type": "candidate", "rank": 7, "tier": "Centi-millionaire", "wealth": "$300-500M", "town": "Sharon CT", "dossier": "dossiers/07_jasper_johns.md" },

    { "id": "anchor_laura", "name": "Laura Eldridge, CFRE", "type": "nuvance_anchor", "role": "AVP Development, Nuvance Health Foundation" },
    { "id": "anchor_dangelo", "name": "John D'Angelo, MD", "type": "nuvance_anchor", "role": "Northwell system CEO" },
    { "id": "anchor_robertson", "name": "Michelle Robertson", "type": "nuvance_anchor", "role": "Nuvance market president" },
    { "id": "anchor_cordeau", "name": "Peter Cordeau", "type": "nuvance_anchor", "role": "Norwalk Hospital president" },
    { "id": "anchor_tracey", "name": "Kevin J. Tracey, MD", "type": "nuvance_anchor", "role": "Feinstein Institutes president; Northwell EVP-Research" },
    { "id": "anchor_boruchov", "name": "Dr. Adam Boruchov", "type": "nuvance_anchor", "role": "Nuvance Cancer Institute system chair" },

    { "id": "conn_greg_smith", "name": "Greg Smith", "type": "connector", "org": "Maplewood Senior Living (CEO); Bauer Pavilion campaign co-chair", "notes": "Calls George Bauer his \"mentor\"; most authentic peer channel into next-gen Bauer engagement" },
    { "id": "conn_andrea_reynolds", "name": "Andrea L. Reynolds", "type": "connector", "org": "Dyson Foundation CEO ($252K comp); ex-CEO Community Foundations of the Hudson Valley", "notes": "Family-office equivalent (Strategy G.2 textbook case)" },
    { "id": "conn_christopher_dyson", "name": "Christopher C. Dyson", "type": "connector", "org": "Dyson Foundation Treasurer (son, age 48)", "notes": "Heir-apparent; Dutchess real estate + racing" },
    { "id": "conn_molly_dyson", "name": "Molly Dyson-Schwery", "type": "connector", "org": "Dyson Foundation Vice Chair (daughter, mid-40s)", "notes": "MSW Adelphi 2014, social worker — Repayer-cultivation match" },
    { "id": "conn_john_dyson", "name": "John S. Dyson + Kathe Dyson", "type": "connector", "org": "Brother of Rob; Millbrook Vineyards & Williams Selyem; separate foundation", "notes": "$250-500M; 2024 Williams Selyem majority sale; succession-stage 'children not interested'" },
    { "id": "conn_craig_irwin", "name": "Craig Irwin", "type": "connector", "org": "Vassar Brothers Hospital Foundation board chair", "notes": "Backup Dyson cultivation path" },
    { "id": "conn_rosa_ortiz", "name": "Rosa Ortiz", "type": "connector", "org": "Dalio Education Chief of Staff", "notes": "Direct Dalio Education contact; already-active relationship via June 2025 gift" },
    { "id": "conn_andrea_catino", "name": "Andrea Catino", "type": "connector", "org": "Dalio Education staff", "notes": "Dalio Education program-side contact" },
    { "id": "conn_katie_cullinan", "name": "Katie Cullinan", "type": "connector", "org": "Nuvance CHRO", "notes": "CURRENT channel for June 2025 $5.1M Career Academy gift; Laura must integrate here" },
    { "id": "conn_adam_whittingham", "name": "Adam Whittingham + Catalina", "type": "connector", "org": "G3 Whittingham principal (Andrew's son), Stamford CT", "notes": "Active in annual Cancer Center Walk; Mill River Park Collaborative board" },
    { "id": "conn_robyn_whittingham", "name": "Robyn Whittingham", "type": "connector", "org": "G3 Whittingham principal (Andrew's widow)", "notes": "Family relationship principal" },
    { "id": "conn_paul_whittingham", "name": "Paul Anthony + Terran Whittingham", "type": "connector", "org": "G3 Whittingham principal (Michael's son, mother) — Stamford CT", "notes": "Parallel G3 line; family-cohort approach" },
    { "id": "conn_lloyd_goldman", "name": "Lloyd Goldman", "type": "connector", "org": "BLDG Management, Solil Management; Northwell trustee; first cousin of Amy Goldman Fowler", "notes": "LARGEST SINGLE DONOR IN NORTHWELL HISTORY — $100M+; Goldman Medical Pavilion at Lenox Hill" },
    { "id": "conn_cary_fowler", "name": "Cary Fowler", "type": "connector", "org": "Amy Goldman Fowler's husband", "notes": "2024 World Food Prize laureate; Svalbard Seed Vault founder; CANCER SURVIVOR" },
    { "id": "conn_conley_rollins", "name": "Conley Rollins", "type": "connector", "org": "Low Road Foundation Director/Treasurer", "notes": "Jasper Johns's de facto local representative; decision-rights proxy" },

    { "id": "avoid_ehrenkranz", "name": "Joel Ehrenkranz", "type": "connector", "org": "Mt Sinai Vice Chairman; Low Road Foundation board", "notes": "AVOID activating — competing institutional loyalty inside Jasper Johns successor board" },

    { "id": "ext_nyp_dalio_center", "name": "Dalio Center for Health Justice @ NYP", "type": "external_anchor", "notes": "Ray Dalio's existing $50M (2021) — direct precedent for Nuvance institute architecture" },
    { "id": "ext_lenox_hill_goldman", "name": "Goldman Medical Pavilion @ Lenox Hill", "type": "external_anchor", "notes": "Lloyd Goldman's Northwell anchor; opens 2026" },
    { "id": "ext_feinstein", "name": "Feinstein Institutes for Medical Research (Northwell)", "type": "external_anchor", "notes": "Michael Rees board service location" },
    { "id": "ext_vassar_brothers", "name": "Vassar Brothers Medical Center (incl. Patient Pavilion + Dyson Center for Cancer Care)", "type": "external_anchor" },
    { "id": "ext_norwalk_hospital", "name": "Norwalk Hospital (incl. Bauer Family Pavilion + Whittingham Cancer Center + Smilow Family Breast Health Center)", "type": "external_anchor" },
    { "id": "ext_sharon_hospital", "name": "Sharon Hospital", "type": "external_anchor" }
  ],

  "edges": [
    { "source": "cand_01_bauer", "target": "anchor_laura", "type": "active_donor_relationship", "strength": "strong", "evidence": "Existing $35M+ donor; Laura's institutional relationship", "dossier_ref": "dossiers/01_bauer.md" },
    { "source": "cand_01_bauer", "target": "anchor_cordeau", "type": "institutional_relationship", "strength": "strong", "evidence": "Norwalk Hospital president; Bauer Pavilion lead institutional partner", "dossier_ref": "dossiers/01_bauer.md" },
    { "source": "cand_01_bauer", "target": "conn_greg_smith", "type": "mentor_peer", "strength": "strong", "evidence": "Greg Smith publicly calls George Bauer his \"mentor\"; Pavilion campaign co-chair", "dossier_ref": "dossiers/01_bauer.md" },
    { "source": "cand_01_bauer", "target": "anchor_robertson", "type": "institutional_relationship", "strength": "medium", "evidence": "Nuvance market president; new relationship post-Murphy", "dossier_ref": "dossiers/01_bauer.md" },
    { "source": "anchor_cordeau", "target": "ext_norwalk_hospital", "type": "institutional_role", "strength": "strong", "evidence": "Norwalk Hospital president" },
    { "source": "conn_greg_smith", "target": "ext_norwalk_hospital", "type": "campaign_role", "strength": "strong", "evidence": "Pavilion campaign co-chair" },

    { "source": "cand_02_dyson", "target": "conn_andrea_reynolds", "type": "family_office", "strength": "strong", "evidence": "Dyson Foundation CEO; institutional family-office equivalent", "dossier_ref": "dossiers/02_dyson.md" },
    { "source": "cand_02_dyson", "target": "conn_christopher_dyson", "type": "family_succession", "strength": "strong", "evidence": "Son; Foundation Treasurer; heir-apparent", "dossier_ref": "dossiers/02_dyson.md" },
    { "source": "cand_02_dyson", "target": "conn_molly_dyson", "type": "family_succession", "strength": "strong", "evidence": "Daughter; Foundation Vice Chair; Repayer-cultivation match (MSW social worker)", "dossier_ref": "dossiers/02_dyson.md" },
    { "source": "cand_02_dyson", "target": "conn_john_dyson", "type": "family_sibling", "strength": "medium", "evidence": "Brother; separate foundation; Williams Selyem succession 2024", "dossier_ref": "dossiers/02_dyson.md" },
    { "source": "cand_02_dyson", "target": "ext_vassar_brothers", "type": "named_facility", "strength": "strong", "evidence": "Dyson Center for Cancer Care + Dyson Breast Center; Rob served on Health Quest Systems board" },
    { "source": "conn_craig_irwin", "target": "ext_vassar_brothers", "type": "foundation_chair", "strength": "strong", "evidence": "Vassar Brothers Hospital Foundation board chair" },
    { "source": "cand_02_dyson", "target": "conn_craig_irwin", "type": "institutional_overlap", "strength": "medium", "evidence": "Vassar Brothers Foundation backup intro path", "dossier_ref": "dossiers/02_dyson.md" },

    { "source": "cand_03_dalio", "target": "conn_rosa_ortiz", "type": "active_donor_relationship", "strength": "strong", "evidence": "Dalio Education Chief of Staff; current channel for June 2025 Career Academy gift", "dossier_ref": "dossiers/03_dalio.md" },
    { "source": "cand_03_dalio", "target": "conn_andrea_catino", "type": "active_donor_relationship", "strength": "medium", "evidence": "Dalio Education program-side contact", "dossier_ref": "dossiers/03_dalio.md" },
    { "source": "conn_rosa_ortiz", "target": "conn_katie_cullinan", "type": "current_stewardship_channel", "strength": "strong", "evidence": "Dalio Education → Nuvance CHRO is the current relationship channel for June 2025 $5.1M gift", "dossier_ref": "dossiers/03_dalio.md" },
    { "source": "anchor_laura", "target": "conn_katie_cullinan", "type": "internal_integration_needed", "strength": "weak", "evidence": "Laura must integrate into Dalio stewardship channel that currently runs through CHRO not Foundation; critical structural fix", "dossier_ref": "dossiers/03_dalio.md" },
    { "source": "cand_03_dalio", "target": "ext_nyp_dalio_center", "type": "existing_named_giving", "strength": "strong", "evidence": "$50M Dalio Center for Health Justice at NYP (2021)" },
    { "source": "cand_03_dalio", "target": "anchor_dangelo", "type": "institutional_relationship", "strength": "weak", "evidence": "Northwell system CEO; relationship to develop", "dossier_ref": "dossiers/03_dalio.md" },

    { "source": "cand_04_whittingham", "target": "conn_adam_whittingham", "type": "family_principal", "strength": "strong", "evidence": "Adam is the G3 principal; same node as candidate", "dossier_ref": "dossiers/04_whittingham.md" },
    { "source": "cand_04_whittingham", "target": "conn_robyn_whittingham", "type": "family_widow", "strength": "strong", "evidence": "Andrew's widow", "dossier_ref": "dossiers/04_whittingham.md" },
    { "source": "cand_04_whittingham", "target": "conn_paul_whittingham", "type": "family_cousin", "strength": "medium", "evidence": "Michael's son line; parallel G3", "dossier_ref": "dossiers/04_whittingham.md" },
    { "source": "cand_04_whittingham", "target": "anchor_boruchov", "type": "institutional_relationship", "strength": "medium", "evidence": "Nuvance Cancer Institute system chair; clinical-leader cultivation lead", "dossier_ref": "dossiers/04_whittingham.md" },
    { "source": "cand_04_whittingham", "target": "anchor_laura", "type": "annual_event_relationship", "strength": "strong", "evidence": "Annual Whittingham Cancer Center Walk", "dossier_ref": "dossiers/04_whittingham.md" },
    { "source": "cand_04_whittingham", "target": "ext_norwalk_hospital", "type": "named_facility", "strength": "strong", "evidence": "Whittingham Cancer Center (named in family's honor since 1997)" },

    { "source": "cand_05_rees", "target": "anchor_tracey", "type": "institutional_relationship", "strength": "strong", "evidence": "Feinstein Institutes board service; direct working relationship with Tracey", "dossier_ref": "dossiers/05_rees.md" },
    { "source": "cand_05_rees", "target": "ext_feinstein", "type": "board_service", "strength": "strong", "evidence": "Feinstein Institutes for Medical Research Board of Directors" },
    { "source": "cand_05_rees", "target": "anchor_dangelo", "type": "institutional_relationship", "strength": "medium", "evidence": "Northwell system CEO; system-level signaling", "dossier_ref": "dossiers/05_rees.md" },
    { "source": "anchor_tracey", "target": "ext_feinstein", "type": "institutional_role", "strength": "strong", "evidence": "Feinstein Institutes president" },

    { "source": "cand_06_goldman_fowler", "target": "conn_lloyd_goldman", "type": "family_cousin", "strength": "strong", "evidence": "First cousin; structural intro path via Northwell system", "dossier_ref": "dossiers/06_goldman_fowler.md" },
    { "source": "conn_lloyd_goldman", "target": "ext_lenox_hill_goldman", "type": "lead_donor", "strength": "strong", "evidence": "$100M+ Northwell lifetime; Goldman Medical Pavilion at Lenox Hill (opens 2026)" },
    { "source": "conn_lloyd_goldman", "target": "anchor_dangelo", "type": "active_donor_relationship", "strength": "strong", "evidence": "Largest single donor in Northwell history; Northwell trustee; D'Angelo as system CEO leads this relationship" },
    { "source": "cand_06_goldman_fowler", "target": "anchor_dangelo", "type": "potential_path", "strength": "weak", "evidence": "Activation pathway: D'Angelo + Lloyd → Amy via family-cohort framing", "dossier_ref": "dossiers/06_goldman_fowler.md" },
    { "source": "cand_06_goldman_fowler", "target": "conn_cary_fowler", "type": "spouse", "strength": "strong", "evidence": "Husband; cancer survivor (Repayer-relevant); World Food Prize laureate", "dossier_ref": "dossiers/06_goldman_fowler.md" },
    { "source": "cand_06_goldman_fowler", "target": "ext_vassar_brothers", "type": "geographic_affinity", "strength": "strong", "evidence": "200-acre Rhinebeck NY farm directly in Vassar Brothers service area" },

    { "source": "cand_07_jasper_johns", "target": "conn_conley_rollins", "type": "decision_rights_proxy", "strength": "strong", "evidence": "Low Road Foundation Director/Treasurer; Johns's local representative at age 95", "dossier_ref": "dossiers/07_jasper_johns.md" },
    { "source": "cand_07_jasper_johns", "target": "avoid_ehrenkranz", "type": "board_relationship_AVOID", "strength": "avoid", "evidence": "Joel Ehrenkranz on Low Road Foundation board AND Mt Sinai Vice Chairman — competing institutional loyalty; do NOT activate this relationship for Nuvance cultivation", "dossier_ref": "dossiers/07_jasper_johns.md" },
    { "source": "cand_07_jasper_johns", "target": "ext_sharon_hospital", "type": "geographic_affinity", "strength": "strong", "evidence": "30-year continuous Sharon CT residence" },

    { "source": "anchor_laura", "target": "anchor_cordeau", "type": "institutional_team", "strength": "strong", "evidence": "Norwalk Hospital leadership team" },
    { "source": "anchor_laura", "target": "anchor_robertson", "type": "institutional_team", "strength": "strong", "evidence": "Foundation reports up through market president" },
    { "source": "anchor_robertson", "target": "anchor_dangelo", "type": "institutional_team", "strength": "strong", "evidence": "Nuvance market president reports to system CEO" },
    { "source": "anchor_tracey", "target": "anchor_dangelo", "type": "institutional_team", "strength": "strong", "evidence": "Feinstein president reports to system CEO as EVP-Research" },
    { "source": "anchor_boruchov", "target": "anchor_robertson", "type": "institutional_team", "strength": "strong", "evidence": "Nuvance Cancer Institute system chair" }
  ]
};
