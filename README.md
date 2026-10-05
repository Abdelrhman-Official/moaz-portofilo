# Moaz Hussein — Atelier Noir 2027 (Next.js)

Bilingual AR/EN portfolio. Dark `#07070b` + gold `#E8C15A`, Fraunces + Space Grotesk + El Messiri + Almarai.

## Run
```
npm install
npm run dev
npm run build && npm run start -- --port 3007
```

## Real files (all live)
- `public/moaz.jpg` — hero portrait
- `public/work/01.jpg` — Monster Zero spec ad
- `public/work/02.webp` — Eqqual Berry Blue
- `public/work/03.webp` — Eqqual Berry Pink
- `public/work/04.webp` — Nescafé Gold concept
- `public/work/05.jpg` — Studio Shodwe poster
- `public/work/06.webp` — Eqqual Berry Green

To swap a piece: replace the file, keep the name. Text lives in `lib/i18n.js` (`projects` + `EN`/`AR` dicts).

## Still needs your real data
- Phone/WhatsApp number → `components/ContactFooter.js` (currently `+20 00 000 0000`)
- Social links (Instagram/Behance/TikTok) → contact section
- Studio credit + school/certificate names → marked `[…]` in `lib/i18n.js` journey
