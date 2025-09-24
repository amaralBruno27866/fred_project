# FJK Real Estate — Static Website

This repository contains the production-ready static website for FJK Real Estate Ltd. The site
is a responsive, presentational React app (Vite + Bootstrap + CSS Modules) used to display
company information and contact details.

Contents
- Project Overview
- Quick Start
- Development
- Build & Preview
- CI (GitHub Actions)
- Image Optimization (local & CI)
- Deployment Notes
- Project Structure
- Maintainer Quick Checklist (for handoff)

Project Overview
----------------
The site is intentionally simple and focused on content delivery. It includes Home (hero), About,
Contact and Footer sections. Components are presentational and styling is scoped with CSS Modules.

Quick Start
-----------
Requirements
- Node.js v16+ (Node 18 recommended)
- npm (bundled with Node)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

Development
-----------
- Source: `src/`
- Entry: `src/main.jsx`
- Layout: `src/App.jsx`
- Components: `src/components/`
- Styles: `src/styles/*.module.css` (CSS Modules)

Build & Preview
---------------
Create a production build:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

CI (GitHub Actions)
-------------------
A GitHub Actions workflow is included at `.github/workflows/ci.yml`. It runs on pushes and
pull requests to `main` and performs:
- `npm ci` to install dependencies
- `npm run lint` to run ESLint
- `npm run optimize:images` (best-effort; will skip if imagemin not available)
- `npm run build` and uploads the `dist/` artifact

If you'd like me to open a PR that adds branch protection and requires this workflow to pass,
I can do that.

Image Optimization (local & CI)
------------------------------
A convenience script `optimize:images` is added to `package.json`. It uses `imagemin` via
CLI to compress images and produce WebP/optimized assets into `src/assets/pictures/optimized`.

Local usage (recommended before final delivery):

```bash
npm install
npm run optimize:images
```

Notes:
- The script requires the `imagemin` dev dependencies present in `package.json`. CI runs the
  command too (it is tolerated there if the command fails).
- After optimization, review the `src/assets/pictures/optimized/` folder and replace original
  images as needed. Keep backups of originals.

Deployment Notes
----------------
- Netlify/Vercel: connect repository, set build command to `npm run build`, publish directory `dist`.
- GitHub Pages: use a deployment action or `gh-pages` to publish `dist/`.

Project Structure
-----------------
- `index.html` — Vite template
- `package.json` — scripts and dependencies (see `optimize:images`)
- `src/` — application source
  - `main.jsx`, `App.jsx`, `components/`, `styles/`, `assets/`
- `public/` — static files served as-is
- `docs/` — architecture and maintenance notes
- `.github/workflows/ci.yml` — CI pipeline

Maintainer Quick Checklist (Handoff)
-----------------------------------
1. Install and verify:

```bash
npm ci
npm run dev
```

2. Validate production build:

```bash
npm run build
npm run preview
```

3. Optimize assets before final delivery:

```bash
npm run optimize:images
```

4. Confirm CI pipeline passes on `main` PRs (workflow added).

5. Add any secrets (API keys) to hosting platform if adding a backend form or analytics.

If you want I can:
- Run the image optimization locally and replace originals with optimized assets (I will keep backups).
- Create a PR with the CI workflow and README changes.
- Add a deployment GitHub Action that automatically publishes `dist/` to GitHub Pages, Netlify, or Vercel.
# FJK Real Estate — Static Website (Detailed)

This README is targeted at developers and maintainers who will receive the project
for handoff. It includes setup, development, CI behavior, troubleshooting, rollback
instructions, and a PR checklist to ensure smooth delivery.

Contents
- Project summary
- Quick start
- Development
- Build & preview
- CI and image optimization
- Troubleshooting & rollback
- PR checklist (for delivery)
- Handoff checklist
- Contact

Project summary
---------------
Static marketing website for FJK Real Estate Ltd. Built with React (via Vite), Bootstrap 5,
and CSS Modules. Purpose: present company information and contact details. The site is
deliberately small and focused on visual presentation.

Quick start
-----------
Prerequisites
- Node.js v16+ (Node 18 recommended)
- npm

Steps

```bash
git clone <repo>
cd aaron_appraisals
npm install
npm run dev
```

Open the address printed by Vite (usually `http://localhost:5173`).

Development
-----------
- Source code: `src/`
- Entry: `src/main.jsx`
- Top-level layout: `src/App.jsx`
- Components: `src/components/` (presentational)
- Styles: `src/styles/*.module.css` (CSS Modules)
- Static assets: `src/assets/pictures/`

Build & preview
----------------
Create a production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

CI and image optimization
-------------------------
We added a GitHub Actions workflow `.github/workflows/ci.yml` that runs on pushes and PRs
to `main`. Key behavior:

- Installs dependencies (`npm ci`).
- Runs linter (`npm run lint`).
- Runs `npm run optimize:images` (best-effort). This script generates optimized images under
  `src/assets/pictures/optimized/` and creates backups under `src/assets/pictures/original-backups/`.
- Copies optimized images from `optimized/` over the originals before building (so `dist/`
  contains the optimized assets).
- Builds the site (`npm run build`) and uploads `dist/` as an artifact for review.

Note: The CI step copies optimized files into the source tree before build. If you want a
different strategy (e.g., keep originals and serve optimized assets from a CDN), update
the workflow accordingly.

Local image optimization (recommended before final delivery)
---------------------------------------------------------
We provide a Node script that uses `sharp` to create WebP and compressed JPEG outputs and
keeps backups.

Commands:

```bash
npm install       # already required
npm run optimize:images
```

Outputs:
- `src/assets/pictures/optimized/` — generated optimized files (WebP + compressed JPG)
- `src/assets/pictures/original-backups/` — copies of the original files (safe rollback)

Troubleshooting & rollback
--------------------------
If something goes wrong after replacing images, you can restore originals quickly:

Restore all originals from backups:

```bash
cp -a src/assets/pictures/original-backups/* src/assets/pictures/
```

Restore a single file (example):

```bash
cp src/assets/pictures/original-backups/fdj_logo.png src/assets/pictures/fdj_logo.png
```

If `npm ci` fails because `package-lock.json` and `package.json` are out of sync:

```bash
npm install     # updates lockfile
# then run either npm ci or proceed with dev/build
npm run dev
```

PR checklist (for final delivery)
--------------------------------
- [ ] All changes documented in `README.md` and `docs/`
- [ ] CI passes on the PR (lint + build)
- [ ] `dist/` artifact generated by CI for QA
- [ ] Images optimized and approved (or originals backed up)
- [ ] Any secrets (API keys) added to hosting platform, not stored in repo
- [ ] Deployment configured (Netlify/Vercel/GitHub Pages)

Handoff checklist (what to give the client)
-----------------------------------------
- Git repository with history and a PR merging to `main`.
- `dist/` artifact or a deployed URL.
- Short note describing how to restore images and how to run the site locally.
- Contact details for follow-up maintenance.

Contact
-------
If you want me to proceed with any of the following, tell me which one:
- Commit and open a PR with all changes and the optimized images (recommended).
- Configure automated deploy to Netlify/Vercel/GitHub Pages.
- Create a small UI test to verify pages render after build.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
