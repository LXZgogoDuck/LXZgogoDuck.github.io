# xuanzhuoliu-site

Personal academic website for Xuanzhuo Liu. Next.js 14 (App Router) + Tailwind,
statically exported and served from GitHub Pages.

Content lives in `app/data/*.ts` and is rendered by components in `app/components/`.
To update the site, edit the data files — you rarely need to touch the components.

| File | Holds |
| --- | --- |
| `app/data/news.ts` | News items, newest first |
| `app/data/projects.ts` | Research projects (sorted by `featured`, then `date`) |
| `app/data/background.ts` | Education, experience, honors, coursework |
| `app/components/ProfileCard.tsx` | Hero bio and social links |

## Local dev

Requires Node 18+ (see `.nvmrc`; the system default here is Node 14, which
Next 14 will not run on).

```bash
nvm use          # picks up .nvmrc
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` (and `nextjs`) and
publishes `out/` to GitHub Pages. The repo's **Settings → Pages → Source** must be
set to **GitHub Actions**.

## Assets

- `public/images/xuanzhuo.jpg` — headshot
- `public/images/research/*.svg` — project figures
- `public/XuanzhuoLiu-CV.pdf` — CV linked from the hero

Institution logos other than CUHK-Shenzhen fall back to a lettermark in the
timeline; drop a file into `public/images/` and set `icon` in `background.ts` to
use a real logo.

## Credits

Layout and component structure are adapted from
[Wenli Xiao's site](https://github.com/WENLIXIAO-CS/wenlixiao-cs.github.io)
(`nextjs` branch), whose README invites reuse for personal sites.
