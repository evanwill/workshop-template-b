{% comment %}
    Bootstrap Button link, https://getbootstrap.com/docs/4.5/components/button/
    Options:
    - "text" = main button text, can use markdown formatting.
    - "link" = button link
    - "color" = bootstrap color options: primary, info, secondary, etc. 
    - "size" = optional btn size, choose from "lg", "sm" (defaults to normal size)
    - "width" = will use Bootstrap sizing to set the % size, choose from "25", "50", "75", or "100" 
    - "float" = will use Bootstrap float utility to add float, choose from "left" or "right" 
{%- endcomment -%}
<div class="text-center">
<a class="btn{% if include.size %} btn-{{ include.size }}{% endif %} btn-{{ include.color | default: 'secondary' }}{% if include.float %} float-{{ include.float }}{% endif %}{% if include.width %} w-{{ include.width }}{% endif %}" href="{{ include.link }}" target="_blank" rel="noopener" markdown="1">{{ include.text }}</a>
</div>
