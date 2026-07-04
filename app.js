/* ============================================================
   NATIONS CHAMPIONSHIP 2026 — APP LOGIC
   You shouldn't need to edit this file. Edit data.js instead.
   ============================================================ */

const POOL_ROUNDS = [1, 2, 3, 4, 5, 6];

function teamConference(team) {
  if (CONFERENCES.north.teams.includes(team)) return "north";
  if (CONFERENCES.south.teams.includes(team)) return "south";
  return null;
}

function buildStandings(conferenceKey) {
  const teams = CONFERENCES[conferenceKey].teams;
  const rows = {};
  teams.forEach(t => {
    rows[t] = { team: t, played: 0, won: 0, drawn: 0, lost: 0, pf: 0, pa: 0, bonus: 0 };
  });

  MATCHES.forEach(m => {
    if (!m.played || typeof m.round !== "number" || !POOL_ROUNDS.includes(m.round)) return;

    [ { name: m.home, isHome: true }, { name: m.away, isHome: false } ].forEach(side => {
      if (!(side.name in rows)) return; // team not in this conference
      const row = rows[side.name];
      const own = side.isHome ? m.homeScore : m.awayScore;
      const opp = side.isHome ? m.awayScore : m.homeScore;
      const ownBonus = side.isHome ? (m.homeBonus || 0) : (m.awayBonus || 0);

      row.played += 1;
      row.pf += own;
      row.pa += opp;
      row.bonus += ownBonus;

      if (own > opp) row.won += 1;
      else if (own === opp) row.drawn += 1;
      else row.lost += 1;
    });
  });

  const table = Object.values(rows).map(r => {
    const matchPoints = r.won * 4 + r.drawn * 2 + r.bonus;
    return { ...r, diff: r.pf - r.pa, points: matchPoints };
  });

  table.sort((a, b) => b.points - a.points || b.diff - a.diff || b.pf - a.pf);
  return table;
}

function renderTable(conferenceKey) {
  const table = buildStandings(conferenceKey);
  const tbody = document.querySelector(`#table-${conferenceKey} tbody`);
  tbody.innerHTML = "";
  table.forEach((r, i) => {
    const tr = document.createElement("tr");
    if (i === 0) tr.classList.add("is-leader");
    tr.innerHTML = `
      <td class="rank">${i + 1}</td>
      <td class="team-cell">${r.team}</td>
      <td>${r.played}</td>
      <td>${r.won}</td>
      <td>${r.drawn}</td>
      <td>${r.lost}</td>
      <td>${r.diff > 0 ? "+" + r.diff : r.diff}</td>
      <td class="pts">${r.points}</td>
    `;
    tbody.appendChild(tr);
  });
}

function completedRounds() {
  let completed = 0;
  for (const r of POOL_ROUNDS) {
    const roundMatches = MATCHES.filter(m => m.round === r);
    if (roundMatches.length && roundMatches.every(m => m.played)) completed = r;
    else break;
  }
  return completed;
}

function poolStageFinished() {
  return completedRounds() === POOL_ROUNDS[POOL_ROUNDS.length - 1];
}

// Resolves a placeholder like "Northern #3" or "Southern #3" to the team
// currently sitting in that position, using the standings as they stand
// right now. Returns null if it isn't a placeholder (i.e. a real team name
// has already been filled in by hand).
function resolvePlaceholder(label) {
  const match = /^(Northern|Southern) #(\d+)$/.exec(label);
  if (!match) return null;
  const conferenceKey = match[1] === "Northern" ? "north" : "south";
  const rank = parseInt(match[2], 10);
  const table = buildStandings(conferenceKey);
  const row = table[rank - 1];
  return row ? { team: row.team, conferenceKey } : null;
}

function statusLabel(m) {
  if (m.played) return null;
  const today = new Date();
  const matchDate = new Date(m.date);
  if (!isNaN(matchDate) && matchDate < today) return "Pending";
  return null;
}

function formatDate(dateStr) {
  if (!dateStr || dateStr.includes("TBC")) return "TBC";
  const d = new Date(dateStr + "T00:00:00Z");
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
}

function renderFixtures() {
  const container = document.getElementById("fixtures");
  container.innerHTML = "";

  const allRounds = [...new Set(MATCHES.map(m => m.round))];
  const poolRoundsPresent = allRounds.filter(r => typeof r === "number");
  const finalsRoundsPresent = allRounds.filter(r => typeof r !== "number");

  poolRoundsPresent.forEach(round => {
    const roundMatches = MATCHES.filter(m => m.round === round);
    container.appendChild(buildRoundSection(`Round ${round}`, roundMatches, { projected: false }));
  });

  if (finalsRoundsPresent.length) {
    const finished = poolStageFinished();
    const done = completedRounds();

    const note = document.createElement("div");
    note.className = "finals-note";
    note.textContent = finished
      ? "Finals Weekend — 27–29 November, Twickenham."
      : `Finals Weekend, 27–29 November — projected from standings after Round ${done} of 6.`;
    container.appendChild(note);

    finalsRoundsPresent.forEach(round => {
      const roundMatches = MATCHES.filter(m => m.round === round);
      container.appendChild(buildRoundSection(round, roundMatches, { projected: !finished }));
    });
  }
}

function buildRoundSection(title, roundMatches, opts) {
  const section = document.createElement("section");
  section.className = "round-block";

  const heading = document.createElement("h3");
  heading.textContent = title;
  section.appendChild(heading);

  const list = document.createElement("div");
  list.className = "match-list";

  roundMatches.forEach(m => {
    const row = document.createElement("div");
    row.className = "match-row" + (m.isGrandFinal ? " is-final" : "");

    const homeResolved = resolvePlaceholder(m.home);
    const awayResolved = resolvePlaceholder(m.away);
    const homeName = homeResolved ? homeResolved.team : m.home;
    const awayName = awayResolved ? awayResolved.team : m.away;
    const isProvisional = opts.projected && (homeResolved || awayResolved);

    const status = statusLabel(m);
    const tag = isProvisional ? `<span class="tag">Projected</span>` : (status ? `<span class="tag">${status}</span>` : "");

    row.innerHTML = `
      <span class="date">${formatDate(m.date)}</span>
      <span class="home">${homeName}</span>
      <span class="score">${m.played ? m.homeScore + "–" + m.awayScore : "v"}${tag}</span>
      <span class="away">${awayName}</span>
    `;
    list.appendChild(row);
  });

  section.appendChild(list);
  return section;
}

function renderLastUpdated() {
  const el = document.getElementById("last-updated");
  const d = new Date(LAST_UPDATED);
  el.textContent = isNaN(d)
    ? LAST_UPDATED
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" }) +
      ", " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "UTC" }) + " UTC";
}

function init() {
  renderTable("north");
  renderTable("south");
  renderFixtures();
  renderLastUpdated();
}

document.addEventListener("DOMContentLoaded", init);
