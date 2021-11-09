---
title: Reference & Resources
nav: Resources
---

To learn about using `workshop-template-b`, the content pages of this demo provide documentation and examples (also check the [README](https://github.com/evanwill/workshop-template-b/blob/master/README.md)).

Workshop sites using this template:

- [Demo](https://evanwill.github.io/workshop-template-b/) (this repository)
- [Go Go GitHub Pages (v.2)](https://evanwill.github.io/go-go-ghpages-b/) (workshop)
- [Get Started with OpenRefine](https://evanwill.github.io/openrefine-b/) (workshop)
- [Web Crash Course](https://evanwill.github.io/web-crash-course/) (workshop)
- [write-md: Markdown and Pandoc for Academic Writing](https://evanwill.github.io/write-md/) (workshop)
- [web-cites: Web Archiving to Fight Link Rot and Preserve Your Citations](https://evanwill.github.io/web-cites/) (workshop)
- [Hey API!](https://evanwill.github.io/hey-api/) (workshop)
- [Web Crash Course](https://evanwill.github.io/web-crash-course/) (workshop)
- [Try Linux!](https://evanwill.github.io/try-linux/) (workshop)
- [Make OER!](https://evanwill.github.io/make-oer/) (presentation)
- [Teaching Tech Hands-on](https://evanwill.github.io/tech-hands-on/) (presentation)

Other workshop sites an [minimal version of this template](https://github.com/evanwill/workshop-template) (no bootstrap):

- [get-git](https://evanwill.github.io/get-git/)
- [hello-arduino](https://evanwill.github.io/hello-arduino/)
- [clean-your-data](https://evanwill.github.io/clean-your-data/)
- [go-go gh-pages](https://evanwill.github.io/go-go-ghpages/)
- [Make @ the MILL](https://uidaholib.github.io/make-at-the-mill/)

If you need a Bootstrap 4 version, see older [v1.0 release](https://github.com/evanwill/workshop-template-b/releases/tag/v1.0). 

# Reference

## Git & GitHub

[GitHub](https://github.com/) is a popular web service for hosting Git repositories--with benefits!
It provides a handy web interface for editing and collaborating on repos, as well as, built in project management features and [free static web hosting](https://pages.github.com/) powered by [Jekyll](https://jekyllrb.com/).
Accounts are free.
To learn more check out Hello World on [GitHub Guides](https://guides.github.com/) or [GitHub Learning Lab](https://lab.github.com/).

## Markdown

[Markdown](https://daringfireball.net/projects/markdown/) is a standard to simplify writing content for the web. 
Markdown can be used any where on GitHub and in Jekyll.

- [Mastering Markdown GitHub Guide](https://guides.github.com/features/mastering-markdown/){:target="_blank" rel="noopener"}
- [GitHub Markdown documentation](https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax){:target="_blank" rel="noopener"}
- [Markdown in a Minute](https://evanwill.github.io/_drafts/notes/markdown-minute.html)

## Bootstrap 5

[Bootstrap](https://getbootstrap.com/) is a CSS framework designed to streamline developing user interfaces for your website.

[Bootstrap Icons](https://icons.getbootstrap.com/) are SVG-based icon set used to add graphics to your content.

## YAML

[YAML](http://www.yaml.org/) is a human readable plain text data format.
It is used in Jekyll for configuration, site data, and front matter.
Jekyll projects are [configured](https://jekyllrb.com/docs/configuration/) using the "_config.yml" file.

## Liquid

[Liquid](http://shopify.github.io/liquid/) is a flexible template language.
[In Jekyll]((https://jekyllrb.com/docs/liquid/) it allows you to layout pages built from modular components and data, using the "_includes", "_layouts", and "_data" directories.
Liquid includes features such as operators, loops, and filters to manipulate raw content. 
Liquid statements are enclosed by {% raw %}`{%  %}`{% endraw %} and variables in {% raw %}`{{  }}`{% endraw %}.

## Sass  

[Sass](http://sass-lang.com/) is a CSS extension / preprocessor. 
All normal CSS is valid SCSS, but Sass adds many powerful functions and programmatic features. 
Writing SCSS is often easier and more sensible, for example by supporting nesting, variables, and operators. 
Jekyll lets you write SASS in modular chucks called partials, in the "_sass" directory, that will be combined and compiled into normal CSS files when the site is built.
