# Vishal's portfolio

Plain HTML, CSS and JavaScript. No build step.

```
portfolio/
  index.html    page structure and SEO tags
  style.css     colours, fonts, layout (edit the :root block at the top)
  script.js     ALL your content lives in the CONFIG block at the top
  resume.pdf    you add this
  assets/
    photo.jpg   you add this
```

## Preview it

Double-click `index.html` to open it. For the resume preview to work, serve it instead:

```
cd portfolio
python -m http.server 8000
```

Then open http://localhost:8000. Check it at phone width too (browser DevTools, device toolbar).

## Checklist: what you need to replace

- [ ] **Photo**: save a square image as `assets/photo.jpg` (create the `assets` folder). It replaces the circle placeholder automatically.
- [ ] **Resume**: export your resume as `resume.pdf` and put it next to `index.html`. The download buttons and the preview use it.
- [ ] **Project 3**: fill in the third card in `CONFIG.projects` and delete its `placeholder: true` line.
- [ ] **Project tech tags**: the stacks for projects 1 and 2 are guesses. Change them to what you actually used.
- [ ] **Project links**: each card's `github` currently points at your profile. Put the real repo URLs, and add `live` links when you have demos (empty `live` shows a disabled "Live demo soon" button).
- [ ] **Skill levels**: the percentages are estimates. Set honest numbers in `CONFIG.skills`.
- [ ] **Achievements**: the four cards are sample slots, not real achievements. Replace each with something you did (hackathon, LeetCode or CodeChef rating, NPTEL or Coursera certificate) or delete it, and remove `sample: true`.
- [ ] **School names**: add your 12th and 10th school names (and years if you want) in `CONFIG.education`.
- [ ] **GitHub handle**: GitHub usernames normally can't contain underscores, so check that `github.com/vishalshar_dev` really exists and fix `CONFIG.github` and `githubHandle` if not.
- [ ] **Open to**: trim `CONFIG.openTo` to what you actually want.
- [ ] **SEO**: after deploying, uncomment `og:url` in `index.html` and set your real URL. Optionally add a preview image for `og:image`.
- [ ] **Contact form**: by default it opens the visitor's email app. To receive messages directly, create a free Formspree form and paste its URL into `CONFIG.formEndpoint`.

## Where to change things

| To change | Edit |
| --- | --- |
| Name, roles, tagline, bio, facts | `CONFIG` in `script.js` |
| Projects, skills, education, achievements | `CONFIG` in `script.js` |
| Email, phone, LinkedIn, GitHub | `CONFIG` in `script.js` |
| Colours (dark and light) | `:root` and `[data-theme="light"]` in `style.css` |
| Font | the Google Fonts `<link>` in `index.html` and `--font` in `style.css` |
| Favicon emoji | the `%F0%9F%9A%80` part of the favicon `<link>` in `index.html` |

## Push to GitHub

```
cd portfolio
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Create the empty `portfolio` repository on github.com first.

## Host free on GitHub Pages

1. In the repository, open **Settings > Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**, pick `main` and `/ (root)`, then Save.
3. After a minute your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.
4. Open it and test every link, the theme toggle and the mobile menu.

## Or host on Vercel

1. Go to vercel.com, choose **Add New > Project**, and import the GitHub repository.
2. Click **Deploy**. For a plain HTML project no build settings are needed.
3. Open the generated URL (for example `your-project.vercel.app`).
4. Make a small change, push it to GitHub, and Vercel redeploys automatically.
