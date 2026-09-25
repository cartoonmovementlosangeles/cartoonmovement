# Cartoon Movement — setup guide

Plain HTML/CSS, no build tools, free forever on GitHub Pages.

## Pages in this site

- `index.html` — homepage: title block + about / comics / links
- `about.html` — description + workshop packet download
- `comics.html` — grid of comics, numbered 1–6
- `comics/comic-1/` through `comics/comic-6/` — one reader page per comic
- `links.html` — gif spot + a simple list of links

## If this is a brand new repo

1. Create a GitHub account and a repo named exactly `USERNAME.github.io`
   (see below for why the name matters).
2. Upload all these files through **Add file → Upload files**, keeping the
   folder structure (`assets/`, `comics/`, etc).
3. In **Settings → Pages**, set Source to "Deploy from a branch", branch
   `main`, folder `/(root)`. Save, wait a minute, visit your site.

## If you're updating an existing repo

Just upload these files the same way (**Add file → Upload files**) — they'll
overwrite the old ones with the same names. The site updates within a
minute or two of committing.

## Adding your own images

Every image block uses a background-color as a placeholder. To swap in
real art, add `background-image:url('path/to/your/file.jpg')` to that
block's `style` attribute — each file has a comment showing exactly how.
Images are never cropped: if a photo's proportions don't match the block,
the background color shows around the edges instead of cutting anything
off.

Drop your actual image files into `assets/images/` (create subfolders per
comic if that's easier to keep organized), then point each block at the
right filename.

## Adding a 7th comic (or more)

1. Duplicate one of the `comics/comic-N/` folders, rename it (e.g.
   `comics/comic-7/`).
2. In the new folder's `index.html`, update the panels to your own images.
3. In `comics.html`, copy one of the grid tiles, update the number and the
   link to point at your new folder.

## Notes

- No JavaScript is used anywhere in the live site — it's all plain links
  and CSS, so nothing to break.
- Keep image files reasonably small (under ~1–2MB each) so pages load
  fast.
- Filenames and paths are case-sensitive — if an image doesn't show up,
  that's almost always the cause.
