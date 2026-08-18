# Developer Portfolio — Static HTML / CSS / JavaScript

A premium, responsive developer portfolio for showcasing certifications,
badges, projects, and skills. **Pure HTML, CSS, and vanilla JavaScript** —
no build step, no framework.

## File structure

```
portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js          # main app: renders data, wires interactions
│   ├── typed.js        # tiny typing-animation utility
│   └── protection.js   # image / shortcut deterrents
├── data/
│   └── portfolio.js    # ← EDIT THIS to customize all content
├── assets/
│   ├── profile.jpg
│   ├── hero-bg.jpg
│   └── resume.pdf      # drop your resume here
└── README.md
```

## Customizing

Open `data/portfolio.js` — every section (profile, about, certifications,
projects, skills) is defined there. Just edit, save, and refresh.

## Run locally

It's a static site, so any static server works:

```bash
# Option 1 — Python
python3 -m http.server 8080

# Option 2 — Node
npx serve .
```

Then open http://localhost:8080.

## Deploy

- **GitHub Pages**: push to a repo, enable Pages on the `main` branch.
- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop the folder.

## Image protection (deterrents only)

Implemented in `js/protection.js` and CSS:

- right-click disabled (except in form fields)
- image dragging disabled
- shortcuts blocked: `F12`, `Ctrl+S`, `Ctrl+U`, `Ctrl+Shift+I/J/C`
- badges rendered as CSS gradients (no raw image file)
- profile photo loaded via CSS `background-image` (no `<img>` src)
- watermark overlay on every badge
- light blur lifted on hover
- transparent shield over each badge to absorb clicks

Note: nothing prevents screenshots. These are deliberate **deterrents** for
casual saving, as discussed in the brief.

## Tech

- HTML5, CSS3 (custom properties, glassmorphism, responsive grid)
- Vanilla JavaScript (ES5-compatible)
- [AOS](https://michalsnik.github.io/aos/) for scroll-reveal animations
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Light / dark mode

Click the sun/moon button in the navbar. Preference is saved to
`localStorage`.
