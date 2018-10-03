---
title: Content
nav: true
---

# Part Two: Create Lesson Content

Edit the lesson Markdown files to create content. 
See [Markdown in a Minute](https://evanwill.github.io/_drafts/notes/markdown-minute.html).

Lorem ipsum `dolor sit amet`, consectetur adipiscing elit. Pellentesque eu velit felis. 
Duis *fermentum est nec* mollis scelerisque. 
Vivamus interdum **efficitur mauris**, et dignissim velit egestas vitae. Cras dignissim sagittis varius.
Pellentesque eu laoreet dui.
Praesent congue, eros eget accumsan euismod, lorem dui vulputate leo, tincidunt efficitur risus metus ut risus.

{% include figure.html file="College_of_Education_University_of_Idaho_Workshop_scene_2273.jpg" alt="workshop scene" caption="Make sure participants are on the same page!" width="75%" %}

> Sed pharetra ipsum orci, eu cursus turpis semper egestas. 
> Pellentesque sodales, felis auctor auctor rutrum, velit quam interdum erat, sit amet placerat urna nisl at justo.

## Components Includes

#### Alerts

`{% raw %}{% include alert.md text="This is a Bootstrap [Alert](https://getbootstrap.com/docs/4.1/components/alerts/)" color="success" %}{% endraw %}`

{% include alert.md text="This is a Bootstrap [Alert](https://getbootstrap.com/docs/4.1/components/alerts/)" color="success" %}

-----------

#### Link Buttons 

`{% raw %}{% include button.md text="Bootstrap Docs" link="https://getbootstrap.com/docs/4.1/components/buttons/" color="info" %}{% endraw %}`

{% include button.md text="Bootstrap Docs" link="https://getbootstrap.com/docs/4.1/components/buttons/" color="info" %}

---------

#### Cards

```{% raw %}
{% capture text %}
1. Can add more complex text using markdown.
2. Use a Liquid capture to create the text.
3. It magically becomes a [Bootstrap Card](https://getbootstrap.com/docs/4.1/components/card/).
{% endcapture %}
{% include card.md text=text header="Example Card" title="Title example" img="College_of_Education_University_of_Idaho_Workshop_scene_2273.jpg" %}{% endraw %}
```

{% capture text %}
1. Can add more complex text using markdown.
2. Use a Liquid capture to create the text.
3. It magically becomes a [Bootstrap Card](https://getbootstrap.com/docs/4.1/components/card/).
{% endcapture %}
{% include card.md text=text header="Example Card" title="Title example" img="College_of_Education_University_of_Idaho_Workshop_scene_2273.jpg" %}

------------

#### Modal

`{% raw %}{% include modal.md button="Try Me" color="success" title="Example Modal" text="This is a modal, with little text." %}{% endraw %}`

{% include modal.md button="Try Me" color="success" title="Example Modal" text="This is a modal, with little text." %}
