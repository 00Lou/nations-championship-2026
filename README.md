# Nations Championship 2026 — Live Tracker

A lightweight, no-build-step website that tracks the inaugural 2026 Nations
Championship rugby pool stage and Finals Weekend. It's plain HTML/CSS/JS —
no npm install, no framework — so GitHub Pages can serve it as-is.

Files:
- `index.html` — the page structure
- `styles.css` — the look (pitch green, chalk lines, gold try-line accent)
- `data.js` — **the only file you need to edit** to update scores/fixtures
- `app.js` — builds the standings tables and fixture list from `data.js`

---

## 1. Get this onto GitHub

### Option A — using the GitHub website (no command line needed)

1. Go to [github.com](https://github.com) and log in (or create a free account).
2. Click the **+** icon top-right → **New repository**.
3. Name it something like `nations-championship-2026`, leave it **Public**,
   and click **Create repository**.
4. On the new repo's page, click **Add file → Upload files**.
5. Drag in all four files (`index.html`, `styles.css`, `data.js`, `app.js`)
   from this folder, plus this `README.md` if you'd like.
6. Scroll down and click **Commit changes**.

### Option B — using git from the command line

```bash
cd nations-championship-2026
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nations-championship-2026.git
git push -u origin main
```

(Create the empty repo on GitHub first via **New repository**, without a README, then run the above.)

---

## 2. Turn on GitHub Pages

1. In your repository, click **Settings** (top right of the repo, not your
   account settings).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
5. Wait about 30–60 seconds. Refresh the Pages settings screen and you'll
   see a banner: *"Your site is live at…"* with a link.

Your site will be at:

```
https://YOUR-USERNAME.github.io/nations-championship-2026/
```

(Replace `YOUR-USERNAME` with your actual GitHub username, and the repo
name if you called it something else.)

---

## 3. Visit the site

Just open that URL in any browser — phone, tablet, or desktop. Bookmark
it. There's nothing to log into; it's a public static page.

---

## 4. Updating results as matches are played

This is the main thing you'll do every week during the tournament:

1. On GitHub, open `data.js` in your repository (click the file, then the
   pencil/edit icon — or edit it locally and `git push` if you used the
   command line).
2. Find the match. Each one looks like this:

   ```js
   { round: 1, date: "2026-07-04", venue: "Estadio Mario Alberto Kempes, Córdoba",
     home: "Argentina", away: "Scotland", homeScore: null, awayScore: null, played: false,
     homeBonus: 0, awayBonus: 0 }
   ```

3. Fill in the scores and flip `played` to `true`:

   ```js
   { round: 1, date: "2026-07-04", venue: "Estadio Mario Alberto Kempes, Córdoba",
     home: "Argentina", away: "Scotland", homeScore: 28, awayScore: 21, played: true,
     homeBonus: 1, awayBonus: 0 }
   ```

   Set `homeBonus`/`awayBonus` to `1` if that team scored a bonus point
   (4+ tries, or lost by 7 points or fewer) — leave at `0` otherwise if you
   don't want to track bonus points precisely.

4. Update the `LAST_UPDATED` line near the top of `data.js` to the current
   date/time, so visitors can see how fresh the data is.
5. Commit the change (on GitHub.com, scroll down and click **Commit
   changes**; from the command line, `git add data.js && git commit -m
   "Update round 1 result" && git push`).
6. GitHub Pages automatically rebuilds — refresh the live site after
   30–60 seconds and the new score, updated standings, and table order
   will all be there. No other file needs to change.

### Adding the November fixtures

The November fixture list (Rounds 4–6) wasn't confirmed when this site was
built, so those rows are placeholders (`date: "2026-11-TBC"`). Once World
Rugby/Six Nations publish the November schedule, add the real dates and
venues the same way you update a score — just edit the relevant object in
`data.js`.

### Setting the Finals Weekend pairings

The Grand Final entry at the bottom of `data.js` is a placeholder
(`TBC (North #1)` vs `TBC (South #1)`) until the pool stage finishes and
final standings are known. Once you know who topped each conference,
replace those two names with the actual teams, and do the same for any
other placement matches you want to add (2nd vs 2nd, 3rd vs 3rd, etc.) by
copying that match object and adjusting `home`/`away`.

---

## Notes

- Not affiliated with World Rugby, Six Nations Rugby, or SANZAAR — this is
  a fan-made tracker.
- Table points use the standard rugby union scoring: 4 for a win, 2 for a
  draw, 0 for a loss, plus any bonus points you've recorded.
- If you'd rather not use GitHub Pages, any static host (Netlify, Vercel,
  Cloudflare Pages) will serve these four files just as easily — just drag
  the folder in.
