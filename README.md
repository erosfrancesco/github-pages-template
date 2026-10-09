# GitHub Pages Template

**Live Demo:** https://erosfrancesco.github.io/github-pages-template/

A React + Vite app with TailwindCSS

## Features

- Simple API Call
- App secrets and tokens for API security
- Glow Theme

## Routing

The app is a single-page app using [React Router](https://reactrouter.com/) v7.

## Deploy to GitHub Pages

The project is configured for GitHub Pages deployment

### Automatic Deployment (GitHub Actions)

Push to `main` branch triggers the workflow in `.github/workflows/deploy.yml`:

1. Builds the app with tokens from repository secrets !important!
2. Deploys to GitHub Pages

**Setup:**

1. Go to repository Settings → Secrets and variables → Actions
2. Add repository secrets and tokens
3. Enable GitHub Pages: Settings → Pages → Source: "GitHub Actions"

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your API token and set in the .env file (copy the example and fill in your token):

   ```bash
   cp .env.example .env
   ```

3. Start the dev server:

   ```bash
   npm start
   ```

   Open <http://localhost:3000/> in your browser.

   > In GitHub Codespaces the dev server must bind to `--host` so the port-forward proxy can reach it:
   >
   > ```bash
   > npm start -- --host
   > ```

## Build for Production

```bash
npm run build
```

The production bundle is output to the `dist/` directory.

### Manual Deployment

```bash
npm run deploy
```

This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch.

> **Note:** On GitHub Actions, Vite reads the repository name automatically to set the GitHub Pages base path. Forks and renamed repositories therefore need no manual `base` update.

## Styling

The UI is built with [Tailwind CSS](https://tailwindcss.com/) v4 via `@tailwindcss/vite`.

- Utility classes live directly in the JSX components
- `src/index.css` contains the `@tailwind` directives and Material 3 CSS custom properties (color tokens, elevation, state layers, neon glow utilities)
- `tailwind.config.js` defines a custom dark palette (`primary`, `surface-container`, `error`, etc.) consumed by the component utilities
- Neon glow effects on header, inputs, and buttons using CSS custom properties

## Learn More

- [Vite](https://vitejs.dev/guide/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
