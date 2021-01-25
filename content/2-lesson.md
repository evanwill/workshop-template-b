---
title: Get Started
nav: Start
topics: Template; Config; Lorem ipsum
---

The `workshop-template-b` [repository](https://github.com/evanwill/workshop-template-b) is a template project--to get started quickly, make a copy and fill in your own content and customizations.
This [site](https://evanwill.github.io/workshop-template-b/) demonstrates the output on GitHub Pages, and the content pages serve as examples.

{% capture text %}
1. Click the green "Use this template" button on the [workshop-template-b repository](https://github.com/evanwill/workshop-template-b) to make your own new copy of the code.
2. Work on the GitHub web interface or clone to your local machine to edit files.
3. Edit the `_config.yml` with your info.
4. Edit the content pages in markdown.
5. Add images to the "images" folder.
5. Push to GitHub or commit on the web interface.
6. In your repository's settings, activate GitHub Pages, using main branch.{% endcapture %}
{% include card.html header="Overview" text=text %}

## Basic Configuration

Edit the `_config.yml` to get your workshop website set up with the basics such as `title` and `author`.
Check comments in the file for all the options!

Once you have edited the `_config.yml`, you are ready to start editing your content pages.

## Advanced Options [optional]

### Using figure include

- put any images you want to use in the "images" folder.
- in a markdown file where you want the image to appear, use the `figure.html` include on its own line, following the pattern: `{% include figure.html img="my-cat.jpg" alt="cat" caption="My cat" width="50%" %}`
- figures will be centered, and can optionally be given a caption and percentage width.

Additional includes are available in the "_includes" folder, check the comments for how to use them (or see the next lesson page for demos).

### Basic style customization

- the `custom.scss` in the `assets/css` folder exposes variables that can customize the basic style of website.
- Give a tiny splash of color on the header and footer borders by tweaking the `$top-border` 
- `$link-color` colors links

### Add Optional Analytics

- To use Google Analytics, add your analytics id to `_config.yml` in `google-analytics-id:` (if `google-analytics-id` is blank, the GA code will not added)
- To use an alternative analytics, paste the code snippet provided by the platform into `_includes/template/analytics.html`
- analytics code will only be added when using "production" environment. This happens automatically on GitHub Pages. To build manually you need to add "JEKYLL_ENV", like: `JEKYLL_ENV=production jekyll build`
