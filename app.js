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
      <td class="team-cell">
        <span class="team-dot dot-${conferenceKey}"></span>${r.team}
      </td>
      <td>${r.played}</td>
      <td>${r.won}</td>
      <td>${r.drawn}</td>
      <td>${r.lost}</td>
      <td>${r.pf}</td>
      <td>${r.pa}</td>
      <td>${r.diff > 0 ? "+" + r.diff : r.diff}</td>
      <td>${r.bonus}</td>
      <td class="pts">${r.points}</td>
    `;
    tbody.appendChild(tr);
  });
}

function statusLabel(m) {
  if (m.isGrandFinal) return m.played ? "FT" : "Not yet played";
  if (m.played) return "FT";
  const today = new Date();
  const matchDate = new Date(m.date);
  if (!isNaN(matchDate) && matchDate < today) return "Result pending";
  return "Upcoming";
}

function formatDate(dateStr) {
  if (!dateStr || dateStr.includes("TBC")) return "Date TBC";
  const d = new Date(dateStr + "T00:00:00Z");
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

function renderFixtures() {
  const container = document.getElementById("fixtures");
  container.innerHTML = "";

  const rounds = [...new Set(MATCHES.map(m => m.round))];

  rounds.forEach(round => {
    const roundMatches = MATCHES.filter(m => m.round === round);
    const section = document.createElement("section");
    section.className = "round-block";

    const heading = document.createElement("h3");
    heading.textContent = typeof round === "number" ? `Round ${round}` : `Finals Weekend — ${round}`;
    section.appendChild(heading);

    const list = document.createElement("div");
    list.className = "match-list";

    roundMatches.forEach(m => {
      const card = document.createElement("div");
      card.className = "match-card" + (m.isGrandFinal ? " is-final" : "");

      const homeConf = teamConference(m.home);
      const awayConf = teamConference(m.away);

      card.innerHTML = `
        <div class="match-meta">
          <span class="match-date">${formatDate(m.date)}${m.time ? " · " + m.time : ""}</span>
          <span class="match-venue">${m.venue}</span>
        </div>
        <div class="match-score-row">
          <span class="side ${homeConf ? "dot-" + homeConf : ""}">${m.home}</span>
          <span class="score">${m.played ? m.homeScore + " – " + m.awayScore : "vs"}</span>
          <span class="side ${awayConf ? "dot-" + awayConf : ""}">${m.away}</span>
        </div>
        <div class="match-status">${statusLabel(m)}</div>
      `;
      list.appendChild(card);
    });

    section.appendChild(list);
    container.appendChild(section);
  });
}

function renderLastUpdated() {
  const el = document.getElementById("last-updated");
  const d = new Date(LAST_UPDATED);
  el.textContent = isNaN(d)
    ? LAST_UPDATED
    : d.toLocaleString("en-GB", { dateStyle: "long", timeStyle: "short", timeZone: "UTC" }) + " UTC";
}

function init() {
  renderTable("north");
  renderTable("south");
  renderFixtures();
  renderLastUpdated();
}

document.addEventListener("DOMContentLoaded", init);
