### GH Pages + TailwindCSS

Quickly set up single-to-several page websites using TailwindCSS and Github Pages Hosting.

### Why?

[Github Pages](https://docs.github.com/en/pages) hosts websites from Github repositories for free (that's good). But you may discover this comes with some strings attached (that's bad).

[Pages can only be served from the root folder of your project, or a `docs` sub-folder.](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#about-publishing-sources). If your project isn't set up right, [links might not work correctly](https://github.com/orgs/community/discussions/23093), or [pages might not show up](https://github.com/orgs/community/discussions/23885).

This repo aims to save you some trouble when starting a new project. You do your work in the `/src/` folder, and any changes that are detected will be exported to the `/docs/` folder. The `/docs/` folder uses a flat file structure to keep linking simple.

**Compatibility is priority #1.** The libraries used in this project were tested on Linux, Mac and Windows systems. Libraries like `nodemon` and quotes are escaped (like this: `\"`) to ensure the scripts will run on more finicky setups. If you find a better/faster way to do things that works on your system, I salute you.

### Quick Start

1. Clone this repo to your local machine.
1. Open the root folder in your favorite IDE.
1. Open a terminal window and run `npm run start`.
1. Start coding in the `/src` directory.
1. Push your changes to your repo.
1. Enable Github Pages for your project.

### Command Documentation

**`npm run start` uses npm-run-all to run multiple npm scripts in parallel.** It first builds your CSS file, copies your HTML files, starts the local server, and then watches for changes in your CSS and HTML files. This is the main command that you would run during development to start your development server and to automatically rebuild files when changes are detected.

---

**`npm run build:css` uses PostCSS and TailwindCSS to compile your src/styles.css file** (which includes your Tailwind directives) into a fully processed CSS file at docs/styles.css. This file includes all the classes from Tailwind that are used in your HTML files, and this file is also minified for optimal loading speed.

**`npm run copy:html` uses a custom `copy-html.js` script to copy all HTML files from `src/pages/` to the `docs/` directory.** This is where your source HTML files are and where your served HTML files will reside.

**`npm run watch:css` uses _Nodemon_ to monitor any changes to CSS files in the `src/` folder.** Whenever a change is detected in these files, _Nodemon_ will run `npm run build:css`, which will recompile and minify your CSS file.

**`npm run watch:html` uses _Nodemon_ to monitor any changes to HTML files in the `src/pages/` folder.** When a change is detected, _Nodemon_ will run the command npm run copy:html && npm run build:css. The HTML files are first copied from src/pages to docs, and then the CSS is recompiled. This ensures that changes in your HTML (for instance, new Tailwind classes) are reflected in your final CSS file.

**`npm run serve` starts a local server using _Live Server_ at the docs/ directory**, so you can preview your web page in the browser. _Live Server_ also comes with live reloading which automatically refreshes your browser whenever files in the `docs/` directory are changed.

**`npm run watch` uses npm-run-all to run `watch:css` and `watch:html` in parallel**, which means it will monitor changes in both your CSS and HTML files and rebuild the necessary files whenever a change is detected.

---

By running npm run start, all your assets will be updated and served from the `docs/` directory. This setup allows you to use TailwindCSS with its powerful utility classes while also ensuring the CSS file is as small as possible by only including the classes that are actually used in your project.
