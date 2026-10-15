# The 48 Laws of Power — Bilingual Reader's Guide

Static site (HTML/CSS/JS, no build, no backend, no analytics). Data lives in `data/laws.json`; code in `app.js`.

## Two modes
| | Public build (this repo) | Personal reading |
|---|---|---|
| Contains | 48 law titles, a few **original sample summaries** (EN + BN) | Same, plus your own PDF |
| Book text | **None** — the PDF is never in the repo (`.gitignore`) | Rendered as page images from a PDF you pick on your device; never uploaded |
| Bengali | Summaries only for the 6 sample laws, labelled as samples; no translation | Same — no translation is bundled |

Open any law → "Read from my PDF" → choose the file → press "Show pages". PDF.js loads from cdnjs only when you use this.
Printed page → PDF page offset defaults to 23 (derived from the scan: printed p.37 = PDF p.60); change it if your copy differs. Printed page numbers are known for 32 of 48 laws; for the rest, type the PDF page yourself.

## Run locally
`cd reader48 && python3 -m http.server 8000` → open http://localhost:8000 (opening index.html via file:// blocks the JSON fetch).

## Publish free on GitHub Pages
1. Create a new **public** repository on github.com (e.g. `48-laws-reader`).
2. Upload the *contents* of this folder (index.html, app.js, styles.css, data/, README.md, .gitignore) — **never the PDF**.
3. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch `main`, folder `/ (root)` → Save.
4. After about a minute the site is live at `https://<username>.github.io/<repo>/`. All paths are relative, so no base-path setting is needed.
5. To update: edit files on GitHub (or push) — Pages redeploys automatically.
Remember a public Pages site is public: only publish content you have the right to publish.

## Adding content
Edit `data/laws.json`: fill `summary_en` / `summary_bn` (and `title_bn`) with your **own** words. Keep `id` values unchanged — bookmarks, notes and progress key on them.

## Privacy
Notes, bookmarks, progress and settings are stored in your browser's localStorage only. Clearing browser data or switching device removes them — use Settings → Export / Import. Fonts load from Google Fonts (fallback fonts are used if blocked).

## Status
See the chat reply for what was and was not tested. Not tested in a real browser; see below.
