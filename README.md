# luckysahani.com

Personal site — Astro, static, deployed to GitHub Pages at `www.luckysahani.com`.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build      # outputs to dist/
```

## Structure

- `src/layouts/Base.astro` — shell: head, theme, header, footer
- `src/styles/global.css` — design tokens and the editorial type system
- `src/components/Figure.astro` — full-bleed figure with a margin caption
- `src/pages/` — one file per route
