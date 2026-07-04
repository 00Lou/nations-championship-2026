/* ============================================================
   NATIONS CHAMPIONSHIP 2026 — DATA FILE
   ============================================================
   This is the ONLY file you need to touch to keep the site
   up to date. Everything else (tables, standings, finals
   projection) is calculated automatically from what's here.

   Source for the data currently in this file: Wikipedia,
   "2026 Nations Championship" (as of 4 July 2026).

   HOW TO UPDATE A RESULT
   -----------------------
   Find the match below (matched by round + teams) and fill in
   homeScore / awayScore, then flip played to true. homeBonus /
   awayBonus is the TOTAL bonus points a team earned in that
   match (0, 1, or 2) — under World Rugby rules a team can earn
   both a try-scoring bonus (4+ tries) AND a losing bonus
   (lost by 7 points or fewer) in the same match, so the max is 2.

   Example, before:
     { round: 2, date: "2026-07-11", venue: "Lang Park, Brisbane",
       home: "Australia", away: "France", homeScore: null, awayScore: null, played: false,
       homeBonus: 0, awayBonus: 0 }

   Example, after:
     { round: 2, date: "2026-07-11", venue: "Lang Park, Brisbane",
       home: "Australia", away: "France", homeScore: 28, awayScore: 21, played: true,
       homeBonus: 1, awayBonus: 0 }

   Save the file, commit, and push — GitHub Pages will rebuild
   the live site automatically within a minute or two.
   ============================================================ */

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
const LAST_UPDATED = "2026-07-04T22:00:00Z";

const MATCHES = [
  // ================= SOUTHERN HEMISPHERE SERIES (July) =================
  // Southern Hemisphere teams host, except Fiji (whose "home" games are all in Great Britain).

  // ---------------- ROUND 1 — 4 July 2026 ----------------
  { round: 1, date: "2026-07-04", venue: "Te Kaha, Christchurch",
    home: "New Zealand", away: "France", homeScore: 34, awayScore: 32, played: true,
    homeBonus: 1, awayBonus: 2 },

  { round: 1, date: "2026-07-04", venue: "Chichibunomiya Rugby Stadium, Tokyo",
    home: "Japan", away: "Italy", homeScore: 27, awayScore: 10, played: true,
    homeBonus: 0, awayBonus: 0 },

  { round: 1, date: "2026-07-04", venue: "Sydney Football Stadium (Allianz Stadium), Sydney",
    home: "Australia", away: "Ireland", homeScore: 31, awayScore: 33, played: true,
    homeBonus: 2, awayBonus: 1 },

  { round: 1, date: "2026-07-04", venue: "Cardiff City Stadium, Cardiff",
    home: "Fiji", away: "Wales", homeScore: 24, awayScore: 39, played: true,
    homeBonus: 0, awayBonus: 1 },

  { round: 1, date: "2026-07-04", venue: "Ellis Park Stadium, Johannesburg",
    home: "South Africa", away: "England", homeScore: 45, awayScore: 21, played: true,
    homeBonus: 1, awayBonus: 0 },

  { round: 1, date: "2026-07-04", venue: "Estadio Mario Alberto Kempes, Córdoba",
    home: "Argentina", away: "Scotland", homeScore: 38, awayScore: 47, played: true,
    homeBonus: 1, awayBonus: 1 },

  // ---------------- ROUND 2 — 11 July 2026 ----------------
  { round: 2, date: "2026-07-11", venue: "Wellington Regional Stadium, Wellington",
    home: "New Zealand", away: "Italy", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Lang Park, Brisbane",
    home: "Australia", away: "France", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Newcastle International Sports Centre, Newcastle, Australia",
    home: "Japan", away: "Ireland", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Hill Dickinson Stadium, Liverpool",
    home: "Fiji", away: "England", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Loftus Versfeld Stadium, Pretoria",
    home: "South Africa", away: "Scotland", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 2, date: "2026-07-11", venue: "Estadio San Juan del Bicentenario, San Juan",
    home: "Argentina", away: "Wales", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  // ---------------- ROUND 3 — 18 July 2026 ----------------
  { round: 3, date: "2026-07-18", venue: "Eden Park, Auckland",
    home: "New Zealand", away: "Ireland", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Japan National Stadium, Tokyo",
    home: "Japan", away: "France", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Perth Rectangular Stadium, Perth",
    home: "Australia", away: "Italy", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Murrayfield Stadium, Edinburgh",
    home: "Fiji", away: "Scotland", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Kings Park Stadium, Durban",
    home: "South Africa", away: "Wales", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 3, date: "2026-07-18", venue: "Estadio Único Madre de Ciudades, Santiago del Estero",
    home: "Argentina", away: "England", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  // ================= NORTHERN HEMISPHERE SERIES (November) =================
  // Northern Hemisphere teams host all matches (reverse of the July series).

  // ---------------- ROUND 4 — 6-8 November 2026 ----------------
  { round: 4, date: "2026-11-06", venue: "Aviva Stadium, Dublin",
    home: "Ireland", away: "Argentina", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 4, date: "2026-11-07", venue: "Juventus Stadium, Turin",
    home: "Italy", away: "South Africa", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 4, date: "2026-11-07", venue: "Murrayfield Stadium, Edinburgh",
    home: "Scotland", away: "New Zealand", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 4, date: "2026-11-07", venue: "Millennium Stadium, Cardiff",
    home: "Wales", away: "Japan", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 4, date: "2026-11-07", venue: "Groupama Stadium, Lyon",
    home: "France", away: "Fiji", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 4, date: "2026-11-08", venue: "Twickenham Stadium, London",
    home: "England", away: "Australia", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  // ---------------- ROUND 5 — 13-15 November 2026 ----------------
  { round: 5, date: "2026-11-13", venue: "Stade de France, Paris",
    home: "France", away: "South Africa", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 5, date: "2026-11-14", venue: "Stadio Luigi Ferraris, Genoa",
    home: "Italy", away: "Argentina", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 5, date: "2026-11-14", venue: "Millennium Stadium, Cardiff",
    home: "Wales", away: "New Zealand", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 5, date: "2026-11-14", venue: "Twickenham Stadium, London",
    home: "England", away: "Japan", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 5, date: "2026-11-14", venue: "Aviva Stadium, Dublin",
    home: "Ireland", away: "Fiji", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 5, date: "2026-11-15", venue: "Murrayfield Stadium, Edinburgh",
    home: "Scotland", away: "Australia", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  // ---------------- ROUND 6 — 21 November 2026 ----------------
  { round: 6, date: "2026-11-21", venue: "Twickenham Stadium, London",
    home: "England", away: "New Zealand", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 6, date: "2026-11-21", venue: "Murrayfield Stadium, Edinburgh",
    home: "Scotland", away: "Japan", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 6, date: "2026-11-21", venue: "Aviva Stadium, Dublin",
    home: "Ireland", away: "South Africa", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 6, date: "2026-11-21", venue: "Stadio Friuli, Udine",
    home: "Italy", away: "Fiji", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 6, date: "2026-11-21", venue: "Millennium Stadium, Cardiff",
    home: "Wales", away: "Australia", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: 6, date: "2026-11-21", venue: "Stade de France, Paris",
    home: "France", away: "Argentina", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  // ================= FINALS WEEKEND — Twickenham Stadium, London =================
  // Every team finishes pool play ranked 1st-6th within its own conference, then plays
  // its equivalently-ranked opponent from the other conference. Placeholders below will
  // be replaced with real team names once Round 6 concludes and final standings are set.

  { round: "11th Place Final", date: "2026-11-27", time: "16:40 GMT", venue: "Twickenham Stadium, London",
    home: "Northern #6", away: "Southern #6", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: "5th Place Final", date: "2026-11-27", time: "20:10 GMT", venue: "Twickenham Stadium, London",
    home: "Northern #3", away: "Southern #3", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: "9th Place Final", date: "2026-11-28", time: "13:10 GMT", venue: "Twickenham Stadium, London",
    home: "Northern #5", away: "Southern #5", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: "3rd Place Final", date: "2026-11-28", time: "16:40 GMT", venue: "Twickenham Stadium, London",
    home: "Northern #2", away: "Southern #2", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: "7th Place Final", date: "2026-11-29", time: "13:10 GMT", venue: "Twickenham Stadium, London",
    home: "Northern #4", away: "Southern #4", homeScore: null, awayScore: null, played: false,
    homeBonus: 0, awayBonus: 0 },

  { round: "Grand Final", date: "2026-11-29", time: "16:40 GMT", venue: "Twickenham Stadium, London",
    home: "Northern #1", away: "Southern #1", homeScore: null, awayScore: null, played: false,
    isGrandFinal: true, homeBonus: 0, awayBonus: 0 }
];
