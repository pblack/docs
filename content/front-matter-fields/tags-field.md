---
aliases:
    - /front-matter-fields/tags-list/
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to add an array of tags 
tags: ''
type: fields
title: Tags Field
image: "/docs/assets/images/Tags%20Preview.jpg"
weight: 7
config:
  code_samples:
    yaml: |
      type: tag_list
      name: [String]
      label: [String]
      description: [String]
      hidden: [true|false]
options_image: "/docs/assets/images/Hidden-only%20Options.jpg"
options:
- name: Hidden
  description: Hides this field in the UI, allowing for hidden default values.
  type: Toggle
how_to_use:
  hugo: 
    - code: |
        {{ if .Params.tags }}
        <ul>
        {{ range .Params.tags }}
          <li>{{ . }}</li>
        {{ end }}
        </ul> 
        {{ end }}
    - code: |
        {{ delimit .Params.tags ", " }}
  jekyll: 
    - code: |
        {% if page.tags %}
        <ul>
        {{ for tag in page.tags }}
          <li>{{ tag }}</li>
        {% endfor %}
        </ul> 
        {% endif %}
    - code: |
        {{ page.tags | array_to_sentence_string }}
subtypes: ''
output:
  json: |
    {
      tags: ["Hugo", "Jekyll"]
    }
  toml: "+++ \ntags = [\"Hugo\",\"Jekyll\"]\n+++ \n"
  yaml: |
    ---
    tags:
      - Hugo
      - Jekyll
    ---
---
