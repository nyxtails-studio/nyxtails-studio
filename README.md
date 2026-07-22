# Nyxtails Studio — website concept

A cinematic, bilingual studio site for Nyxtails Studio, an independent game team from Türkiye. The experience is built around the studio's night-and-fox identity: obsidian surfaces, electric cyan signal lines, violet light, and a restrained blood-red pulse.

## Run locally

This is a dependency-free static site. From the repository root:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Included

- Full-screen Nyx / fox-tail hero with generated key art, parallax, orbit lines, metadata, and scroll cue.
- Bilingual EN / TR content switcher with localStorage persistence and mobile support.
- Responsive navigation with a full-screen mobile menu.
- Backrooms Manager — Together and Project Nyx game showcase cards.
- Studio story, creative principles, founder cards, journal / YouTube / GitHub links, careers invitation, contact CTA, and editorial footer.
- IntersectionObserver reveal animation, custom cursor, pointer glow, magnetic buttons, and subtle 3D game-card tilt.
- `prefers-reduced-motion` support and touch-friendly fallbacks.

## Files

- `index.html` — page structure and content hooks.
- `styles.css` — visual system, responsive layouts, and motion.
- `script.js` — language data, interaction layer, and reveal animation.
- `assets/` — locally stored cinematic concept imagery used by the hero and game cards.

## External destinations

- Steam: [Backrooms Manager — Together](https://store.steampowered.com/app/4895520/Backrooms_Manager__Together/)
- LinkedIn: [Nyxtails Studio](https://www.linkedin.com/company/135344316/admin/dashboard/)
- Founders: [Melih Kaan Şahin](https://www.linkedin.com/in/melih-kaan-%C5%9Fahin-200800386/) · [Ahmet Esat K.](https://www.linkedin.com/in/ahmetesatk/)
- YouTube: [Global](https://www.youtube.com/@nyxtails-studio) · [Türkçe](https://www.youtube.com/@nyxtails-studio-tr)
- GitHub: [nyxtails-studio](https://github.com/nyxtails-studio)
- Email: [nyxtails.studio@gmail.com](mailto:nyxtails.studio@gmail.com)
