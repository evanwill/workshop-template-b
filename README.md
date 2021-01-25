# workshop-template-b

A Jekyll template for a simple workshop website, with a [Bootstrap](https://getbootstrap.com/)-based theme, designed for hosting on [GitHub Pages](https://pages.github.com/).

Works best for about 5 pages of instructions, plus an index page, all written in Markdown. 
The navigation to the main pages is exposed at top and bottom of each page for easy stepping through the sections.

> Note: for a more minimal version, try the original [workshop-template](https://github.com/evanwill/workshop-template)

## Why?

Rather than making slides for a workshop, why not make a website? 
It's easier to write, access, share, and reuse. 
GitHub and GitHub Pages makes this pretty easy.

It is a better Open Educational Resource since anyone can make a copy and adapt!

## How To Use Template

The `workshop-template-b` [repository](https://github.com/evanwill/workshop-template-b) is a template project--to get started quickly, make a copy and fill in your own content and customizations. 
The [site](https://evanwill.github.io/workshop-template-b/) demonstrates the output on GitHub Pages, and the content pages serve as examples.

Overview:

1. Copy the code to your own repository by clicking the green "Use this template" button (alternatively import the [repository](https://github.com/evanwill/workshop-template-b) on GitHub or manually copy the files into a new repo).
2. Work on the GitHub web interface to edit files or clone to your local machine.
3. Edit the `_config.yml` with your info (check the comments for details).
4. Edit the content pages in markdown (found in the "content" folder).
5. Add images to the "images" folder.
5. Push to GitHub or commit on the web interface.
6. In your repository's settings, activate GitHub Pages, using main branch.

### Creating content pages

Content pages are written in markdown and can be enhanced using Liquid includes that are packaged with the template.
Start by editing the examples or creating new files in the "content" folder.
At the top of each page is "YML front matter" used to configure the page.
Use these options:

- to include a page in the header and footer navigation, add `nav:` push the text you want to appear to the file's yml front matter. Alternatively, add `nav: true` to use the page's `title:` value. All pages with a `nav` value will appear in the top-bar, sorted by order of filenames. For simplicity use leading numbers in the lesson page filenames to create correct order.
- `title:` value will appear as `h1` at the top of the page.
- `topics:` will appear as a small feature below the title (optional). 
- `description:` will appear as an indented text block below the title (optional). This gives you a chance to summarize the section contents. 
- `youtubeid:` will add an YouTube video embed (optional). Find the id in the YouTube link. For example, in `https://youtu.be/moJgWrD6dwg` or `https://www.youtube.com/watch?v=moJgWrD6dwg` the youtubeid is `moJgWrD6dwg`.
- Alternatively, if you don't want `title` or other options to appear on the page, you can over ride the layout by adding `layout: default` 

### Using figure include

- put any images you want to use in the "images" folder.
- in a markdown file where you want the image to appear, use the `figure.html` include on its own line, following the pattern: `{% include figure.html img="my-cat.jpg" alt="cat" caption="My cat" width="50%" %}`
- figures will be centered, and can optionally be given a caption and percentage width.

Additional includes are available in the "_includes" folder, check the comments for how to use them.

### Basic style customization

- the `custom.scss` in the `assets/css` folder exposes variables that can customize the basic style of website.
- Give a tiny splash of color on the header and footer borders by tweaking the `$top-border` 
- `$link-color` colors links

### Using optional analytics

- To use Google Analytics, add your analytics id to `_config.yml` in `google-analytics-id:` (if `google-analytics-id` is blank, the GA code will not added)
- To use an alternative analytics, paste the code snippet provided by the platform into `_includes/template/analytics.html`
- analytics code will only be added when using "production" environment. This happens automatically on GitHub Pages. To build manually you need to add "JEKYLL_ENV", like: `JEKYLL_ENV=production jekyll build`

## Demos

- [Demo](https://evanwill.github.io/workshop-template-b/) (this repository)
- [Go Go GitHub Pages (v.2)](https://evanwill.github.io/go-go-ghpages-b/)
- [Make OER!](https://evanwill.github.io/make-oer/) (presentation)
- [Hey API!](https://evanwill.github.io/hey-api/) (workshop)
- [Web Crash Course](https://evanwill.github.io/web-crash-course/) (workshop)
- [Write MD](https://evanwill.github.io/write-md/) (workshop)

My workshop sites using an [minimal version of this template](https://github.com/evanwill/workshop-template) (no bootstrap):

- [get-git](https://evanwill.github.io/get-git/)
- [hello-arduino](https://evanwill.github.io/hello-arduino/)
- [clean-your-data](https://evanwill.github.io/clean-your-data/)
- [go-go gh-pages](https://evanwill.github.io/go-go-ghpages/)

> Repository does not include a Gemfile because it is a very simple project. 
> Originally built using Ruby 2.5+ and Jekyll 3.7+; most recently used Jekyll 4.1.1.
> Designed for use with [GitHub Pages automatic build versions](https://pages.github.com/versions/).
