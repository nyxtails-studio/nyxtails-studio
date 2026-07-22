# Nyxtails Studio — PHP website concept

A cinematic, bilingual studio site for Nyxtails Studio. The experience is built around the studio's night-and-fox identity: obsidian surfaces, electric cyan signal lines, violet light, and a restrained blood-red pulse.

## Run locally

The page is now a PHP entry point. From the repository root:

```bash
php -S localhost:8080
```

Then open <http://localhost:8080>.

If PHP is not installed, use a local PHP-capable server such as XAMPP, Laragon, MAMP, or Docker. The language is selected from the browser on first visit; later choices persist in localStorage without a page refresh.

## Included

- `index.php` entry point with browser-language detection for English and Turkish.
- Full-screen Nyx / fox-tail hero with locally stored cinematic key art and a Steam image fallback for Backrooms Manager — Together.
- EN / TR content switcher with animated transition, localStorage persistence, desktop/mobile synchronization, and no refresh.
- Responsive navigation with a full-screen mobile menu and visible language control on mobile.
- Destination selector for game cards: official game site or Steam page. Cards without a Steam page gracefully fall back to their official site.
- Showcase cards for Backrooms Manager — Together, FILE COPY, COZY MINT, and Project Nyx.
- Studio story, creative principles, three co-founder cards, journal / YouTube / GitHub links, careers invitation, contact CTA, and editorial footer.
- IntersectionObserver reveal animation, custom cursor, pointer glow, magnetic buttons, and subtle 3D game-card tilt.
- `prefers-reduced-motion` support and touch-friendly fallbacks.

## Files

- `index.php` — PHP page structure, browser-language bootstrap, and content hooks.
- `styles.css` — visual system, typography, responsive layouts, and motion.
- `script.js` — bilingual copy, no-refresh language switching, game destination switching, and interaction layer.
- `assets/` — locally stored cinematic concept imagery used by the hero and game cards.

## External destinations

- Backrooms website: [the.backrooms.nyxtails.com](https://the.backrooms.nyxtails.com/)
- Backrooms Steam: [Backrooms Manager — Together](https://store.steampowered.com/app/4895520/Backrooms_Manager__Together/)
- FILE COPY: [filecopy.nyxtails.com](https://filecopy.nyxtails.com/)
- COZY MINT: [cozymint.nyxtails.com](https://cozymint.nyxtails.com/)
- LinkedIn: [Nyxtails Studio](https://www.linkedin.com/company/135344316/admin/dashboard/)
- Founders: [Melih Kaan Şahin](https://www.linkedin.com/in/melih-kaan-%C5%9Fahin-200800386/) · [Ahmet Esat K.](https://www.linkedin.com/in/ahmetesatk/) · [Talha Berat Bulut](https://www.linkedin.com/in/talha-berat-bulut-a57633390/)
- YouTube: [Global](https://www.youtube.com/@nyxtails-studio) · [Türkçe](https://www.youtube.com/@nyxtails-studio-tr)
- GitHub: [nyxtails-studio](https://github.com/nyxtails-studio)
- Email: [nyxtails.studio@gmail.com](mailto:nyxtails.studio@gmail.com)
