# SMFX Portfolio

Static site (HTML, CSS, vanilla JS). No build step, no dependencies, no secrets in the code.

## Edit content
All text, services, skills, process steps, contact details and **projects** live in `content.js`.
- Replace `hello@example.com` with your real email; optionally add a WhatsApp number and social links.
- In `skills`, list only tools you actually use (empty list hides the chips).
- Add a project: copy the example comment in `content.js` into `projects: [ ... ]`, put a screenshot (WebP, ~1280×800) in `assets/projects/`.
- Add a profile photo by editing the `.portrait` block in `index.html` (`<img src="assets/profile.webp" alt="Your name">`).
- Colours: change `--accent` (and others) at the top of `styles.css`. The blue-purple theme comes from `--accent` and `--grad`, matched to the logo.

## Run locally
```
cd smfx-portfolio
python3 -m http.server 8000     # or: npx serve
```
Open http://localhost:8000

## Contact form
Browsers can't send email by themselves, and secrets must not live in frontend code.
1. Create a free form at Web3Forms or Formspree and copy its endpoint URL (Formspree endpoints are public by design).
2. Paste it into `formEndpoint` in `content.js`.
Until then, the form opens the visitor's email app as a fallback.

## Deploy (GitHub Pages)
1. Push the folder to a GitHub repo.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Replace `https://YOUR-SITE-URL` in `index.html` (canonical and `og:image`) with your live address.
Netlify and Cloudflare Pages also work: drag and drop the folder.

## Checklist before launch
- [ ] Email, WhatsApp and social links set
- [ ] Form endpoint set and a test enquiry received
- [ ] Canonical and og:image URLs updated
- [ ] Mobile menu, keyboard Tab order and all links checked
