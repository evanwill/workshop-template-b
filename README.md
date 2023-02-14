# workshop-template-b

`workshop-template-b` is a Jekyll template for a simple workshop website, with a [Bootstrap](https://getbootstrap.com/)-based theme, designed for hosting on [GitHub Pages](https://pages.github.com/).

Works best for about 5 pages of instructions, plus an index page, all written in Markdown. 
The navigation to the main pages is exposed at top and bottom of each page for easy stepping through the sections.

**Please note: the template was updated in Nov 2021 to Bootstrap 5!**

> For a more minimal version, try the original [workshop-template](https://github.com/evanwill/workshop-template)

## Why?

Rather than making slides for a workshop, why not make a website? 
It's easier to write, access, share, and reuse. 
GitHub and GitHub Pages makes this pretty easy.

It is a better Open Educational Resource since anyone can make a copy and adapt!

## How To Use Template

The [workshop-template-b repository](https://github.com/evanwill/workshop-template-b) is a template project --> to get started quickly, make a copy and replace the demo with your own content and customizations. 
The [demo site](https://evanwill.github.io/workshop-template-b/) demonstrates the output on GitHub Pages.
The content pages serve as documentation and examples to copy from.

Overview:

1. Click the green "Use this template" button on the [workshop-template-b repository](https://github.com/evanwill/workshop-template-b) to make your own new copy of the code (make sure you are logged into GitHub!).
2. Work on the GitHub web interface or clone to your local machine to edit files (tip: click `.` on any GitHub repository to [open the web editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)).
3. Edit the `_config.yml` with your info.
4. Edit/add the content pages in Markdown (found in the "content" folder).
5. Add any images to the "images" folder.
5. Commit on the web interface or push to GitHub.
6. In your repository's settings, activate GitHub Pages, using main branch.

### Basic Configuration

Edit the "_config.yml" to get your workshop website set up with the basics such as `title` and `author`.
Check comments (denoted by `#` in YAML) in the file for all the options!

Once you have edited the "_config.yml", you are ready to start editing your content pages.
All your content is written in Markdown in the "content" folder.

### Creating content pages

Content pages are written in markdown and can be enhanced using Liquid includes that are packaged with the template (see "_includes/" folder).
Start by editing the examples or creating new files in the "content" folder.

At the top of each page is "YAML front matter" used to configure the page.
Use these options:

- `nav:` add the text you want to appear in the the header and footer navigation. 
    - Alternatively, use `nav: true` to use the page's `title` value for the nav text. 
    - Do not include `nav` if you do not want the page to appear in the nav elements.
    - All pages with a `nav` value will appear in the header and footer navigation, sorted by order of filenames. For simplicity use leading numbers in the lesson page filenames to create correct order.
- `title:` value will appear as `h1` at the top of the page.
- `topics:` will appear as a small feature below the title (optional). 
- `description:` will appear as an indented text block below the title (optional). This gives you a chance to summarize the section contents. 
- `youtubeid:` will add an YouTube video embed (optional). Find the id in the YouTube link. For example, in `https://youtu.be/moJgWrD6dwg` or `https://www.youtube.com/watch?v=moJgWrD6dwg` the youtubeid is `moJgWrD6dwg`.
- Alternatively, if you don't want `title` or other options to appear on the page, you can over ride the section layout by adding `layout: page` 

### Components Includes

`workshop-template-b` contains a series of [Liquid "includes"](https://jekyllrb.com/docs/includes/) to simplify adding basic [Bootstrap 5 components](https://getbootstrap.com/docs/5.0/components/) to your Markdown content.
The includes can be found in the "_includes" folder. 
Check the comments at the top of each include file for details about options and how to use them.

#### Figures / Images

- put any images you want to use in the "images" folder, or use a full URL to external images.
- in a markdown file where you want the image to appear, use the "figure.html" include on its own line, following the pattern: `{% include figure.html img="my-cat.jpg" alt="cat" caption="My cat" width="50%" %}`
- figures will be centered, and can optionally be given a caption and percentage width.

Additional includes are available in the "_includes" folder, check the comments for how to use them.

### Style customization [optional]

The file "assets/css/styles.scss" exposes variables that can customize the basic style of website:

- `$top-border` adds a tiny splash of color on the header and footer borders. Try tweaking the color using an [HTML # value](https://www.w3schools.com/colors/colors_picker.asp).
- `$text-color` sets the body text color
- `$link-color` sets link color
- `$base-font-size` sets the body text size
- `$container-max` sets a maximum width for the text body--keeping it narrow can make it easier to read, but gives less screen space!

To use the Bootstrap defaults for *any* of these values, comment out the variable in "styles.scss", using `//` in front of the option's line (e.g. `// $text-color: #111 !default;` ).

To add your own custom CSS, use the file "_sass/_custom.scss".
Any CSS/SASS you add to this file will override the template and Bootstrap classes.

### Add Optional Analytics [optional]

To use Google Analytics, add your analytics id to "_config.yml" in `google-analytics-id:` (if `google-analytics-id` is blank, the GA code will not added).
To use an alternative analytics, paste the code snippet provided by the platform into the file "_includes/template/analytics.html".

The analytics code will only be added when using "production" environment. 
This happens automatically on GitHub Pages. 
To build manually you need to add "JEKYLL_ENV", like: `JEKYLL_ENV=production jekyll build`.

## Demos

- [Demo](https://evanwill.github.io/workshop-template-b/) (this repository)
- [Go Go GitHub Pages (v.2)](https://evanwill.github.io/go-go-ghpages-b/)
- [Make OER!](https://evanwill.github.io/make-oer/) (presentation)
- [Web Crash Course](https://evanwill.github.io/web-crash-course/) (workshop)
- [Write MD](https://evanwill.github.io/write-md/) (workshop)

My workshop sites using an [minimal version of this template](https://github.com/evanwill/workshop-template) (no bootstrap):

- [get-git](https://evanwill.github.io/get-git/)
- [hello-arduino](https://evanwill.github.io/hello-arduino/)
- [clean-your-data](https://evanwill.github.io/clean-your-data/)
- [go-go gh-pages](https://evanwill.github.io/go-go-ghpages/)

> Repository does not include a Gemfile because it is a very simple project. 
> Originally built using Ruby 2.5+ and Jekyll 3.7+; most recently used Ruby 3 and Jekyll 4.2.1.
> Designed for use with [GitHub Pages automatic build versions](https://pages.github.com/versions/).
