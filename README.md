# workshop-template-b

A Jekyll template for a simple workshop website, with a [Bootstrap](https://getbootstrap.com/) theme, designed for hosting on [gh-pages](https://pages.github.com/).

Works best for about 5 pages of instructions, plus an index page, all written in Markdown. 
The navigation to the main pages is exposed at top and bottom of each page for easy stepping through the sections.

> Note: for a more minimal version, try the original [workshop-template](https://github.com/evanwill/workshop-template)

## Why?

Rather than making slides for a workshop, why not make a website? 
It's easier to write, access, share, and reuse. 
GitHub and gh-pages makes this pretty easy.

It is a better Open Educational Resource since anyone can fork and adapt!

## Details

This repo is the demo skeleton. 
The [site](https://evanwill.github.io/workshop-template-b/) demonstrates the output on gh-pages, and the content pages serve as examples.

Overview:

1. Copy the code to your own repository by clicking the green "Use this template" button, or import the [repository](https://github.com/evanwill/workshop-template-b) on GitHub.
2. Clone to your local machine, or work on the GitHub web interface to edit files.
3. Edit the `_config.yml` with your info (check the comments for details).
4. Edit the content pages in markdown (found in the "content" folder).
5. Add images to the "images" folder.
5. Push to GitHub (or commit on the web interface).
6. In your repo's settings, activate gh-pages, using main/master branch.

When creating content pages:

- to include a page in the header and footer navigation, add `nav:` push the text you want to appear to the file's yml front matter. Alternatively, add `nav: true` to use the page's `title:` value. All pages with a `nav` value will appear in the top-bar, sorted by order of filenames. For simplicity use leading numbers in the lesson page filenames to create correct order.
- `title:` value will appear as `h1` at the top of the page.
- `topics:` will appear as a small feature below the title (optional). 
- `description:` will appear as an indented text block below the title (optional). This gives you a chance to summarize the section contents. 
- if you don't want `title` to appear on the page (or topics and description options), you can over ride the layout to `layout: default` 

Using figure include:

- put all images in the `images` directory.
- figures will be centered, and can optionally be given a caption and percentage width.
- in a markdown file where you want the image to appear, use the `figure.html` include on its own line.
- pattern: `{% include figure.html img="my-cat.jpg" alt="cat" caption="My cat" width="50%" %}`

Basic style customization:

- the `custom.scss` in the `assets/css` folder exposes variables that can customize the basic style of website.
- Give a tiny splash of color on the header and footer borders by tweaking the `$top-border` 
- `$link-color` colors links

Using optional google analytics:

- add your analytics id to `_config.yml` in `google_analytics:` 
- if `google_analytics:` is blank, the ga code will not added
- analytics code will only be added when using "production" environment. This happens automatically on gh-pages. To build locally, use `JEKYLL_ENV=production jekyll build`

> Repository does not include a Gemfile because it is a very simple project. 
> Originally built using Ruby 2.5+ and Jekyll 3.7+; most recently used Jekyll 4.1.1.

## Demos

- [Demo](https://evanwill.github.io/workshop-template-b/) (this repository)
- [Make OER!](https://evanwill.github.io/make-oer/) (presentation)
- [Hey API!](https://evanwill.github.io/hey-api/) (workshop)
- [Web Crash Course](https://evanwill.github.io/web-crash-course/) (workshop)
- [Write MD](https://evanwill.github.io/write-md/) (workshop)

My workshop sites using an [minimal version of this template](https://github.com/evanwill/workshop-template) (no bootstrap):

- [get-git](https://evanwill.github.io/get-git/)
- [hello-arduino](https://evanwill.github.io/hello-arduino/)
- [clean-your-data](https://evanwill.github.io/clean-your-data/)
- [go-go gh-pages](https://evanwill.github.io/go-go-ghpages/)
