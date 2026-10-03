# xuanzhuoliu.github.io

Personal site. Plain HTML homepage + a small Jekyll blog. GitHub Pages builds it automatically on push.

## Layout
- `index.html` — homepage (static; edit directly). Styles live in `assets/site.css`.
- `images/`, `media/` — photo, thumbnails, demo videos (keep clips < 3 MB).
- `XuanzhuoLiu-CV.pdf` — linked from the header.
- `_posts/` — blog posts in Markdown. `_layouts/post.html` — post template.
- `blog/index.html` — list of all posts. `blog/posts.json` — feeds the "Blog" section on the homepage.

## New blog post
1. Add `_posts/YYYY-MM-DD-short-title.md` with this header:
   ```
   ---
   layout: post
   title: "Title"
   kind: notes          # thoughts | notes | reading
   description: "One-line summary."
   math: false          # true if the post uses LaTeX ($$ ... $$)
   ---
   ```
2. Write in Markdown and push. The newest three posts show on the homepage automatically.
   (Opening `index.html` straight from disk won't show them; they appear on the live site.)

## Before publishing
- Remove `class="draft"` from `<body>` in `index.html` to hide the yellow TODO marks.
- Delete `_check.html` (a preview helper).

## Fonts
Bitstream Charter, self-hosted in `fonts/` (free license, see `fonts/LICENSE.txt`).

## Dark mode
Follows the visitor's system setting; the moon/sun button in the top bar overrides it and is remembered per browser.

## Custom domain
After buying a domain: GitHub repo → Settings → Pages → Custom domain → enter it → Save → tick "Enforce HTTPS".
DNS at the registrar:
- apex (`@`): four A records → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www`: CNAME → xuanzhuoliu.github.io
Then update `url:` in `_config.yml`.
