---
aliases:
    - /front-matter-fields/toggle/
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to toggle an option on or off
tags: ''
type: fields
title: Toggle Field
image: "/docs/assets/images/Toggle%20Preview.jpg"
weight: 1
config:
  code_samples:
    yaml: |
      type: boolean
      name: [String]
      label: [String]
      description: [String] 
options_image: "/docs/assets/images/Hidden-only%20Options.jpg"
options:
  - name: Hidden
    description: Hides this field in the UI, allowing for hidden default values.
    type: Toggle
how_to_use:
  hugo: 
    - code: "<h1>{{ .Params.is_featured }}</h1> "
  jekyll: 
    - code: "<h1>{{ page.is_featured }}</h1>"
subtypes: ''
output:
  json: "{ \n  \"is_featured\": \"value\"\n} \n"
  toml: "+++ \nis_featured = \"value\"\n+++ \n"
  yaml: "--- \nis_featured: value \n--- \n"
---
