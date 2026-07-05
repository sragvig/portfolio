# sragvi.craft — Minecraft-themed portfolio

Plain HTML/CSS/JS, no build step. Deploy straight to GitHub Pages.

## Deploy in 3 steps
1. Create a new GitHub repo (e.g. `sragvi-portfolio` or `<yourusername>.github.io` for a root domain).
2. Upload `index.html`, `style.css`, `script.js`, and the whole `assets/` folder to the repo, keeping the same folder structure (drag-and-drop on github.com works, or `git add . && git commit -m "site" && git push`).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → main → / (root) → Save**. Your site goes live at `https://<yourusername>.github.io/<repo-name>/` (or just `https://<yourusername>.github.io/` if you used the special repo name) within a minute or two.

## What's inside
- **Hotbar nav** (bottom of screen, press 1–9): jumps between Home, About, Education, Quest Log (experience), Guilds (leadership), Crafting (skills), Achievements, Featured Build (ThisIsFine), and Contact.
- **`assets/` folder**: hand-built pixel-art block textures (grass, dirt, stone, oak plank, diamond/emerald ore, bookshelf, chest, crafting table) drawn as original SVGs in Minecraft's visual style. These are not ripped from the game — actual Mojang texture files are copyrighted and I won't reproduce them even with credit — so I redrew the look from scratch. The footer has a short non-affiliation note for the same reason; keep it if you publish this publicly.
- Content pulled directly from your resume — email, phone, and address are on the Contact section; I left out your exact street address on purpose since this will be public. Add it back in `index.html` under `#contact` if you want it there.

## Easy tweaks
- **Splash text**: edit the `splashes` array at the top of `script.js`.
- **Colors**: all defined as CSS variables at the top of `style.css` under `:root`.
- **Add a section**: copy a `<section class="screen ...">` block in `index.html`, then add a matching `<li>` in `#hotbar`.
