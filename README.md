# sragvi.craft — Minecraft-themed portfolio

Plain HTML/CSS/JS, no build step. Deploy straight to GitHub Pages.

## Deploy in 3 steps
1. Create a new GitHub repo (e.g. `sragvi-portfolio` or `<yourusername>.github.io` for a root domain).
2. Upload **all files in this folder** to the repo root — `index.html`, `style.css`, `script.js`, and every `.svg` file — all flat, no subfolders needed (drag-and-drop on github.com works, or `git add . && git commit -m "site" && git push`).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → main → / (root) → Save**. Your site goes live at `https://<yourusername>.github.io/<repo-name>/` (or just `https://<yourusername>.github.io/` if you used the special repo name) within a minute or two.

⚠️ Keep every file in the same flat folder as `index.html`. An earlier version of this README asked you to put the `.svg` files in an `assets/` subfolder — that mismatch is what was causing the missing crafting-table icons, blank buttons, and empty sign posts. That's now fixed on both sides: the CSS points directly at the flat filenames, so just upload everything together and it works.

## What's inside
- **Hotbar nav** (bottom of screen, press 1–9): jumps between Home, About, Education, Quest Log (experience), Guilds (leadership), Crafting (skills), Achievements, Featured Build (ThisIsFine), and Contact.
- **Pixel-art block textures** (`.svg` files): grass, dirt, stone, oak plank, diamond/emerald ore, obsidian, cobble, bookshelf, chest, crafting table — hand-built original SVGs styled after Minecraft's look. These are not ripped from the game — actual Mojang texture files are copyrighted and won't be reproduced even with credit — so they're redrawn from scratch to match the palette and style. The footer has a short non-affiliation note for the same reason; keep it if you publish this publicly.
- **Landing page world**: a layered sky (gradient + pixel sun), two parallax rows of distant blocky hills, a treeline, drifting pixel clouds, and a grass-and-dirt ground strip — built entirely from CSS + the SVG textures, no external images.
- Content pulled directly from your resume — email, phone, and address are on the Contact section; your exact street address is left out on purpose since this is public. Add it back in `index.html` under `#contact` if you want it there.

## Fixes made in this pass
- **Missing textures**: buttons, inventory slots, chest/crafting icons, sign posts, and bookshelf cards were rendering as flat gray/brown blocks with no pixel detail. Cause: the CSS looked for files inside an `assets/` folder that didn't exist in the delivered files. Fixed by pointing the CSS at the flat filenames directly.
- **Invisible text**: headings on the About, Education, Leadership, and Crafting sections used a dark ink color that nearly disappeared into the dirt/stone tiled backgrounds. All section headings now use white text with a strong drop shadow so they read clearly against every background.
- **Empty-looking landing page**: the hero was a flat blue-to-white gradient. It now has a pixel sun, two parallax rows of distant hills, a small treeline, and blockier drifting clouds — closer to an actual Minecraft overworld skybox.

## Easy tweaks
- **Splash text**: edit the `splashes` array at the top of `script.js`.
- **Colors**: all defined as CSS variables at the top of `style.css` under `:root`.
- **Add a section**: copy a `<section class="screen ...">` block in `index.html`, then add a matching `<li>` in `#hotbar`.
- **Tune the landing scene**: hill shapes are CSS `clip-path` polygons (`.hills-back` / `.hills-front` in `style.css`); tree positions are the `.tree.t1`–`.t4` classes.
