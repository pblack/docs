---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to add a list of values
tags: ''
type: fields
title: Sortable List Field
image: "/docs/assets/images/Sortable%20List%20Preview.jpg"
weight: 8
config:
  code_samples:
    yaml: |
      type: list
      name: [String]
      label: [String]
      description: [String]
      hidden: [true|false]
      config:
        use_select: [true|false]
options_image: "/docs/assets/images/Sortable%20List%20Options.jpg"
options:
- name: Hidden
  description: Hides this field in the UI, allowing for hidden default values.
  type: Toggle
- name: Text/Select
  description: Toggle between allowing list items to be added through a text field, or a select field with pre-defined options.
  type: Toggle
how_to_use:
  hugo:
    - code: |
        <p>{{ delimit .Params.ingredients ", " }}</p>
        // Becomes <p>Butternut Squash, Onions, Butter, Carrots</p>
    - code: |
        <h2>Ingredients:</h2>
        <ul>
        {{ range .Params.ingredients }}
          <li>{{ . }}</li>
        {{ end }}
        </ul> 
  jekyll: 
    - code: |
        <p>{{ page.ingredients | array_to_sentence_string }}</p>
        // Becomes <p>Butternut Squash, Onions, Butter, Carrots</p>
    - code: |
        <h2>Ingredients:</h2>
        <ul>
          {% for ingredient in page.ingredients %}
            <li>{{ ingredient }}</li>
          {% endfor %}
        </ul> 
subtypes: ''
output:
  json: |
    {
      ingredients: ["Butternut Squash", "Onions", "Butter", "Carrots"]
    }
  toml: "+++ \ningredients = [\"Butternut Squash\",\"Onions\",\"Butter\",\"Carrots\"]\n+++ \n"
  yaml: |
    ---
    ingredients:
      - Butternut Squash
      - Onions
      - Butter
      - Carrots
    ---
subtypes:
  - name: Sortable List Field (Select)
    page: /front-matter-fields/sortable-list-field/select
---
