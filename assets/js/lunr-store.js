---
# create lunr store 
---
var store = [ 
    {% for item in site.sections %} 
    { 
        "url": {{ item.url | relative_url | jsonify }},
        "title": {{ item.title | jsonify }},
        "text": {{ item.content | strip_html | jsonify | replace: "\n"," " }}
    }{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
];
