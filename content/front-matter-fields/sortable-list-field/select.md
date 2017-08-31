---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to add a list of pre-defined values
tags: ''
type: fields
hidden: true
title: Sortable List Field (Select) 
image: "/docs/assets/images/Sortable%20List%20Select%20Preview.jpg"
options_image: "/docs/assets/images/Sortable%20List%20Select%20Options.jpg"
weight: -1
output:
  json: |
    {
      authors: ["James Appleseed", "John Doe"]
    }
  toml: "+++ \nauthors = [\"James Appleseed\",\"John Doe\"]\n+++ \n"
  yaml: |
    ---
    authors:
      - James Appleseed
      - John Doe
    ---
how_to_use:
  hugo: 
    - code: |
        <h2>Authors:</h2>
        <ul>
        {{ range .Params.authors }}
          <li>{{ . }}</li>
        {{ end }}
        </ul>
    - code: |
        <p>{{ delimit .Params.authors ", " }}</p>
        // Becomes <p>James Appleseed, John Doe</p>
  jekyll: 
    - code: |
        <h2>Authors:</h2>
        <ul>
          {% for author in page.authors }}
            <li>{{ author }}</li>
          {% endfor %}
        </ul>
    - code: |
          <p>{{ page.authors | array_to_sentence_string }}</p>
          // Becomes <p>James Appleseed, John Doe</p>
---
The sortable list select sub-type uses the same `config` options as the [select field and its sub-types](/docs/front-matter-fields/select-field/).
