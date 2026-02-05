
[![Site publicado](https://img.shields.io/badge/Site-Publicado-brightgreen)](https://paginattoebooks.github.io/upsell-pack-premium-figurinhas-instagram/)

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1mMAIe-8T5DylhqRfZA7hL7U7z6U4jGrz

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Build & Deploy

- Build for production:
   - `npm run build`
   - This will produce the `dist/` folder (Vite default).
- Preview the production build locally:
   - `npm run preview`

Notes for hosting:

- GitHub Pages (simple):
   1. Ensure `vite.config.ts` has `base: './'` (already configured).
   2. Option A — manual: build and push the `dist/` folder to the `gh-pages` branch or to the `docs/` folder on `main`.
   3. Option B — automated: install `gh-pages` and add scripts:
       - `npm install --save-dev gh-pages`
       - add to `package.json` scripts:
          - `"predeploy": "npm run build"`
          - `"deploy": "gh-pages -d dist"`
       - then run `npm run deploy` to publish.

- Netlify / Vercel:
   - Simply point the host to your repository and set the build command to `npm run build` and the publish folder to `dist`.
   - For Vercel, the platform will auto-detect and deploy with zero-config in most cases.

Troubleshooting:

- If pages load blank after deploy, check that `base` in `vite.config.ts` is set to `./` or the repository subpath.
- For GitHub Pages SPA routing, use a 404 redirect to `index.html` or use `hash` routing.

If you want, I can add the `gh-pages` devDependency and scripts for one-click `npm run deploy` — me diga se devo adicionar isso agora.

---

Site publicado: https://paginattoebooks.github.io/upsell-pack-premium-figurinhas-instagram/
