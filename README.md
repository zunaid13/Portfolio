# Md. Zunaid-Ul-Alam — Academic Portfolio

A clean, single-page static portfolio designed for **PhD and Master's
funding applications**. No build step, no framework — just HTML, CSS, and
a few lines of vanilla JS. Drop the folder on GitHub Pages and you're live.

> **TL;DR for editing**
> Open `index.html` in any text editor. Each section is clearly commented
> with `<!-- ====== SECTION NAME ====== -->`. Change the text inside the
> tags, save, commit, push — done.

---

## ✏️ What you can edit

All editable content lives in **`index.html`**. Look for the big comment
blocks — they mark the start of each section.

| What | Where |
| --- | --- |
| Name, photo, blurb, quick facts | `<!-- HERO -->` block |
| Personal summary | `<!-- ABOUT -->` |
| Degrees | `<!-- EDUCATION -->` |
| Research interests chips, thesis blurb | `<!-- RESEARCH -->` |
| Teaching &amp; industry jobs | `<!-- EXPERIENCE -->` &amp; `<!-- TEACHING -->` |
| Projects (copy a `<article class="card card--project">` to add one) | `<!-- PROJECTS -->` |
| Contest log, ratings, highlights | `<!-- COMPETITIVE -->` |
| Skills (language / framework / tool pills) | `<!-- SKILLS -->` |
| Awards &amp; scholarships | `<!-- AWARDS -->` |
| Email, phone, social links | `<!-- CONTACT -->` |

**Profile photo:** replace `assets/profile.jpg` with your own file
(roughly square, ~1000×1000 works best). Keep the same filename or update
the `src` in the `<!-- HERO -->` block.

**CV download button:** replace `assets/cv.pdf` with your own PDF (same
filename) to keep the download working.

---

## 🎨 Changing the look

The whole color scheme is controlled by **CSS variables** at the top of
`css/style.css`:

```css
:root {
  --color-accent:      #1d4ed8;   /* links, highlights        */
  --color-accent-soft: #eff6ff;   /* hero gradient, chip bg   */
  --color-text:        #0f172a;   /* main text                */
  --color-bg:          #ffffff;   /* page background          */
  --color-bg-alt:      #f8fafc;   /* alternating section bg   */
  ...
}
```

Change those, save, refresh — everything else re-themes automatically.

Want a different font? Update the `--font-sans` / `--font-serif`
variables, or change the Google Fonts link in `<head>`.

---

## 🛠 Local preview

You can open `index.html` directly in a browser, but to mirror what
GitHub Pages will serve, run a tiny static server:

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Or with Node:

```bash
npx serve .
```

---

## 🚀 Deploy to GitHub Pages (5 minutes)

1. **Create a new GitHub repo** (public), e.g. `zunaid-portfolio`.
2. **Push the contents of this folder** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:<your-username>/zunaid-portfolio.git
   git push -u origin main
   ```
3. **Enable Pages**:
   - Repo → **Settings** → **Pages**
   - Source: *Deploy from a branch*
   - Branch: `main`, folder: `/ (root)`
   - Save.
4. Your site is live at
   `https://<your-username>.github.io/zunaid-portfolio/` within ~1 minute.

### Using a custom domain?

Drop a `CNAME` file (no extension) containing your domain into the repo
root, then point your DNS to GitHub's servers. Full guide:
<https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>

---

## 🧩 Adding a new section (e.g. Publications)

Inside `index.html`, find the section you want to insert near (e.g. before
`<!-- CONTACT -->`) and paste a new block. **Two things must match** for
the top-nav and scroll-spy to keep working:

1. Give it an `id`: `<section id="publications" class="section">`
2. Add the link to the top nav:
   `<a href="#publications">Publications</a>`

That's it — the rest of the styling comes from `.section`, `.card`, etc.

---

## 🖨 Print to PDF

The page is print-styled. `Ctrl/Cmd + P` → "Save as PDF" produces a
clean one-page-per-section PDF you can attach to applications.

---

## 📁 Project structure

```
portfolio/
├── index.html        ← all content lives here
├── css/
│   └── style.css     ← theme tokens + layout
├── js/
│   └── main.js       ← scroll-spy + tiny reveal animation
├── assets/
│   ├── profile.jpg   ← your photo
│   ├── profile-small.jpg
│   └── cv.pdf        ← downloadable CV
└── README.md
```

---

## 📜 License

The code is yours to use however you like. The content (your bio, your
achievements) is, of course, yours. Good luck with the applications! 🎓
