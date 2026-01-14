# Vibe Coding Landing Page - Netlify Build

Ovaj folder sadrži sve fajlove potrebne za deploy na Netlify.

## Sadržaj

- `index.html` - Glavna landing stranica
- `styles.css` - CSS stilovi
- `script.js` - JavaScript funkcionalnosti
- `terms.html` - Uslovi korišćenja
- `privacy.html` - Politika privatnosti
- `cookies.html` - Politika kolačića
- `netlify.toml` - Netlify konfiguracija

## Kako da deploy-uješ na Netlify

1. Idite na [Netlify](https://app.netlify.com/)
2. Kliknite na "Add new site" → "Deploy manually"
3. Drag & drop ovaj `dist` folder ili kliknite "Browse to upload"
4. Netlify će automatski deploy-ovati sajt

Alternativno, možete koristiti Netlify CLI:
```bash
netlify deploy --dir=dist --prod
```

## Napomena

Svi fajlovi su već optimizovani i spremni za produkciju.

