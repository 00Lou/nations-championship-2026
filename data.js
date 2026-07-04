const CONFERENCES = {
  north: {
    label: "European Conference (Northern Hemisphere)",
    teams: ["England", "France", "Ireland", "Italy", "Scotland", "Wales"]
  },
  south: {
    label: "Rest of World Conference (Southern Hemisphere)",
    teams: ["Argentina", "Australia", "Fiji", "Japan", "New Zealand", "South Africa"]
  }
};

// Last updated timestamp shown in the site footer — update this whenever you edit results.
const LAST_UPDATED = "2026-07-04T21:00:00Z";

const MATCHES = [
  // ---------------- ROUND 1 — 4 July 2026 ----------------
  { round: 1, date: "2026-07-04", venue: "One NZ Stadium, Auckland",
    home: "New Zealand", away: "France", homeScore: 34, awayScore: 32, played: true,
    homeBonus: 1, awayBonus: 1 },

  { round: 1, date: "2026-07-04", venue: "Prince Chichibu Memorial Stadium, Tokyo",
    home: "Japan", away: "Italy", homeScore: 27, awayScore: 10, played: true,
    homeBonus: 1, awayBonus: 0 },

  { round: 1, date: "2026-07-04", venue: "Allianz Stadium, Sydney",
    home: "Australia", away: "Ireland", homeScore: 31, awayScore: 33, played: true,
    homeBonus: 1, awayBonus: 1 },

  { round: 1, date: "2026-07-04", venue: "Cardiff City Stadium, Cardiff",
    home: "Fiji", away: "Wales", homeScore: 24, awayScore: 39, played: true,
    homeBonus: 0, awayBonus: 1 },

  { round: 1, date: "2026-07-04", venue: "Ellis Park, Johannesburg",
    home: "South Africa", away: "England", homeScore: 45, awayScore: 21, played: true,
    homeBonus: 1, awayBonus: 0 },

  { round: 1, date: "2026-07-04", venue: "Estadio Mario Alberto Kempes, Córdoba",
    home: "Argentina", away: "Scotland", homeScore: 38, awayScore: 47, played: true,
    homeBonus: 0, awayBonus: 0 },

  // ---------------- ROUND 2 — 11 July 2026 ----------------
  { round: 2, date: "2026-07-11", venue: "New Zealand (venue TBC)",
    home: "New Zealand", away: "Italy", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Australia (venue TBC)",
    home: "Australia", away: "France", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Japan (venue TBC)",
    home: "Japan", away: "Ireland", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Great Britain (Fiji home fixture)",
    home: "Fiji", away: "England", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "South Africa (venue TBC)",
    home: "South Africa", away: "Scotland", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Argentina (venue TBC)",
    home: "Argentina", away: "Wales", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  // ---------------- ROUND 3 — 18 July 2026 ----------------
  { round: 3, date: "2026-07-18", venue: "New Zealand (venue TBC)",
    home: "New Zealand", away: "Ireland", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Japan (venue TBC)",
    home: "Japan", away: "France", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Australia (venue TBC)",
    home: "Australia", away: "Italy", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Great Britain (Fiji home fixture)",
    home: "Fiji", away: "Scotland", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "South Africa (venue TBC)",
    home: "South Africa", away: "Wales", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Argentina (venue TBC)",
    home: "Argentina", away: "England", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  // ---------------- ROUND 4-6 — November 2026 (reverse fixtures, Northern hemisphere hosts) ----------------
  // Exact dates/venues for the November window had not been confirmed at the time this
  // site was built. Add each match here in the same format once World Rugby / Six Nations
  // publish the November fixture list — the tables will pick them up automatically.
  { round: 4, date: "2026-11-TBC", venue: "TBC",
    home: "France", away: "New Zealand", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },
  { round: 4, date: "2026-11-TBC", venue: "TBC",
    home: "Italy", away: "Japan", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },
  { round: 4, date: "2026-11-TBC", venue: "TBC",
    home: "Ireland", away: "Australia", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },
  { round: 4, date: "2026-11-TBC", venue: "TBC",
    home: "Wales", away: "Fiji", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },
  { round: 4, date: "2026-11-TBC", venue: "TBC",
    home: "England", away: "South Africa", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },
  { round: 4, date: "2026-11-TBC", venue: "TBC",
    home: "Scotland", away: "Argentina", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  // ---------------- FINALS WEEKEND — 27-29 November 2026, Allianz Stadium, Twickenham ----------------
  // Placement matches: 1st-place teams meet in the Grand Final; 2nd vs 2nd, 3rd vs 3rd,
  // etc. across the weekend. Fill in the actual pairings once pool play finishes —
  // they depend on final standings, so they're left blank for now.
  { round: "Final", date: "2026-11-29", venue: "Allianz Stadium, Twickenham, London",
    home: "TBC (North #1)", away: "TBC (South #1)", homeScore: null, awayScore: null, played: false,
    isGrandFinal: true, homeBonus: 0, awayBonus: 0 }
];
