# Matamis — Modern Filipino Desserts

> *məˈtɑː·mɪs* · adjective, Tagalog — **sweet**

A small, loving study of three beloved Filipino desserts — **leche flan**, **halo-halo**, and **ube halaya** — each traced from its traditional, home-style roots to the modern riff that made it famous again.

Built from scratch as a static site (no frameworks), publishable anywhere static files are served.

## The collection

| Dessert | Traditional | Modern |
|---|---|---|
| **Leche Flan** | Classic Leche Flan | Ube Leche Flan |
| **Halo-Halo** | Classic Halo-Halo | Razon's Halo-Halo |
| **Ube Halaya** | Ube Halaya (yam jam) | Ube Basque Cheesecake |

Each recipe includes full ingredients, a numbered method, notes, and a source link back to the trusted Filipino kitchen it was researched from.

## Stack

- Plain **HTML / CSS / JavaScript** — no build step, no dependencies
- **Fraunces** (display serif) + **Plus Jakarta Sans** (body) via Google Fonts
- Custom imagery generated in a cohesive *ube purple × warm cream × gold* palette
- Responsive, keyboard-accessible, `prefers-reduced-motion` aware

## Structure

```
matamis/
├── index.html          # single page (all sections)
├── css/
│   └── style.css       # design system + layout
├── js/
│   └── main.js         # recipe data + interactions
└── images/             # optimized WebP + favicon
```

## Run locally

Any static server works:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Publishable on **GitHub Pages**, Netlify, Vercel, or any static host — just point it at the repo root (the `index.html` is at the top level).

---

Recipes researched from Kawaling Pinoy, The Kitchn, and The Unlikely Baker (sources linked in each recipe). Custom imagery, not AI-scraped stock.
