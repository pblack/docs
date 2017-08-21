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
    - code: "<h1>{{ .Params.tags }}</h1> "
  jekyll: 
    - code: "<h1>{{ page.tags }}</h1>"
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
