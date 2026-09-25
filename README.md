# Cartoon Movement — setup guide

This is a small static website: plain HTML/CSS/JS, no build tools, free to
host forever on GitHub Pages.

## 1. Make a new GitHub account

Since you want this separate from any personal account:

1. Go to https://github.com/join
2. Sign up with an email you're happy to use publicly (or a separate one).
3. Pick a username. **This matters**: your site's default URL will be
   `https://USERNAME.github.io`, so choose something you'd want in a link —
   e.g. `cartoonmovement` or similar (check it's free as you type it).

## 2. Create the repository

1. While logged into the new account, click the **+** in the top right →
   **New repository**.
2. Name the repository **exactly** `USERNAME.github.io` (swap in your real
   username). This exact name is what makes GitHub serve it as a website.
3. Set it to **Public**. Don't add a README/gitignore (we already have
   files). Click **Create repository**.

## 3. Upload these files

Easiest path with no command line:

1. On the new repo's page, click **Add file → Upload files**.
2. Drag in everything from this folder (`index.html`, `README.md`, the
   `assets` folder, and the `comics` folder), keeping the folder structure.
3. Scroll down, click **Commit changes**.

(If you later get comfortable with git, `git clone` + `git push` works the
same way — but uploading through the browser is completely fine to start.)

## 4. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", Source should be **Deploy from a branch**,
   Branch: **main**, folder **/(root)**. Save.
3. Give it a minute or two, then visit `https://USERNAME.github.io`. Your
   site should be live.

## 5. Adding a new comic

For each new comic (say it's called "Rooftop"):

1. Make a folder `assets/images/rooftop/` and drop your panel images in
   there (numbered however you like: `panel-01.jpg`, `panel-02.jpg`, ...).
2. Copy `comics/example-comic/index.html` into a new folder,
   `comics/rooftop/index.html`.
3. In that new file, update the `<title>`, the `<h1>`, and the list of
   `<img class="panel">` tags to point at your new images.
4. In `index.html` (the homepage), copy one `.comic-card` block, update the
   title, description, cover image, and the link href to
   `comics/rooftop/index.html`.
5. Upload the new/changed files through **Add file → Upload files** again
   (or commit via git). The live site updates within a minute or two.

## Notes

- Keep panel images reasonably sized (under ~1–2MB each) so pages load
  fast — most image editors have an "export for web" option.
- The vertical scroll strip has a white background on purpose (like most
  webtoon readers); the rest of the site uses the warm paper tone.
- Everything is plain files — no npm, no build step, no server. If
  something looks broken, it's almost always a filename/path mismatch
  (case-sensitive!) between the HTML and the actual file.
