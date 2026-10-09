# GitHub Pages Template

Template React + Vite + TypeScript con una chiamata API di esempio e deploy su GitHub Pages.

## Avvio

```bash
npm install
cp .env.example .env
npm start
```

Imposta `VITE_API_TOKEN_TEMPLATE` nel file `.env` solo se l'API richiede un token. Le variabili `VITE_*` sono incluse nel bundle client: non usarle per credenziali segrete.

Per creare la build locale:

```bash
npm run build
```

## GitHub Pages

1. In **Settings → Pages**, imposta la sorgente su **GitHub Actions**.
2. Se necessario, aggiungi `VITE_API_TOKEN_TEMPLATE` tra i repository secrets.
3. Ogni push su `main` avvia il deploy. Il percorso Pages viene ricavato automaticamente dal nome del repository.
