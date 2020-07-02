{% comment %}
    Bootstrap Card, https://getbootstrap.com/docs/4.4/components/card/
    Options:
    - "text" = main card text, can use markdown formatting. Use a Liquid capture to add more complex content.
    - "header" = card header text (in bar above card content)
    - "title" = card title text inside card content area
    - "img" = give filename of image in your "images" folder, will create a card cap image
    - "alt" = alt text for image
    - "width" will use Bootstrap sizing to set the % size, choose from "25", "50", "75", or "100"
    - "float" will use Bootstrap float utility to add float, choose from "left" or "right"
{%- endcomment -%}
<div class="card mb-3 {% if include.float %}float-{{ include.float }} {% endif %}{% if include.width %}w-{{ include.width }}{% endif %}">
{% if include.img %}<img class="card-img-top" src="{{ '/images/' | append: include.img | relative_url }}" alt="{{ include.alt | default: 'Card image' }}">{% endif %}
{% if include.header %}<h5 class="card-header">{{ include.header }}</h5>{% endif %}
<div class="card-body">
{% if include.title %}<h5 class="card-title">{{ include.title }}</h5>{% endif %}
<div class="card-text" markdown="1">

{{ include.text }}

</div>
</div>
</div>
