---
title: Get Started
nav: Start
topics: Template; Basic Config
---

The [workshop-template-b repository](https://github.com/evanwill/workshop-template-b) is a template project --> to get started quickly, make a copy and replace the demo with your own content and customizations.
This [demo site](https://evanwill.github.io/workshop-template-b/) demonstrates the output on GitHub Pages.
The content pages serve as documentation and examples to copy from.

{% capture text %}
1. Click the green "Use this template" button on the [workshop-template-b repository](https://github.com/evanwill/workshop-template-b) to make your own new copy of the code (make sure you are logged into GitHub!).
2. Work on the GitHub web interface or clone to your local machine to edit files (tip: click `.` on any GitHub repository to [open the web editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)).
3. Edit the "_config.yml" with your info.
4. Edit/add the content pages in Markdown (found in the "content" folder).
5. Add any images to the "images" folder.
5. Commit on the web interface or push to GitHub.
6. In your repository's settings, activate GitHub Pages, using main branch.{% endcapture %}
{% include card.html header="Overview" text=text %}

## Basic Configuration

Edit the "_config.yml" to get your workshop website set up with the basics such as `title` and `author`.
Check comments (denoted by `#` in YAML) in the file for all the options!

Once you have edited the "_config.yml", you are ready to start editing your content pages.
All your content is written in Markdown in the "content" folder.
See [Create Lesson Content]({{ '/content/3-lesson.html' | relative_url }}) for details and options.

## Style customization [optional]

The file "assets/css/styles.scss" exposes variables that can customize the basic style of website:

- `$top-border` adds a tiny splash of color on the header and footer borders. Try tweaking the color using an [HTML # value](https://www.w3schools.com/colors/colors_picker.asp).
- `$text-color` sets the body text color
- `$link-color` sets link color
- `$base-font-size` sets the body text size
- `$container-max` sets a maximum width for the text body--keeping it narrow can make it easier to read, but gives less screen space!

To use the Bootstrap defaults for *any* of these values, comment out the variable in "styles.scss", using `//` in front of the option's line (e.g. `// $text-color: #111 !default;` ).

To add your own custom CSS, use the file "_sass/_custom.scss".
Any CSS/SASS you add to this file will override the template and Bootstrap classes.

## Add Optional Analytics [optional]

To use Google Analytics, add your analytics id to "_config.yml" in `google-analytics-id:` (if `google-analytics-id` is blank, the GA code will not added).
To use an alternative analytics, paste the code snippet provided by the platform into the file "_includes/template/analytics.html".

The analytics code will only be added when using "production" environment. 
This happens automatically on GitHub Pages. 
To build manually you need to add "JEKYLL_ENV", like: `JEKYLL_ENV=production jekyll build`.
