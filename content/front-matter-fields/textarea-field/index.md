---
aliases:
    - /front-matter-fields/textarea/
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to enter a multiples lines of text
tags: ''
type: fields
title: Textarea Field
image: "/docs/assets/images/Textarea%20Preview.jpg"
weight: 2
config:
  code_samples:
    yaml: |
      type: textarea
      name: [String]
      label: [String]
      description: [String] 
      hidden: [true|false]
      config:
        wysiwyg: [true|false]
options_image: "/docs/assets/images/Textarea%20Options.jpg"
options:
- name: Hidden
  description: Hides this field in the UI, allowing for hidden default values.
  type: Toggle
- name: WYSIWYG
  description: Enables WYSIWYG input for the Textarea 
  type: Toggle
output:
  json: "{ \n  \"description\": \"value\"\n} \n"
  toml: "+++ \ndescription = \"value\"\n+++ \n"
  yaml: "--- \ndescription: value \n--- \n"
how_to_use:
  hugo: 
    - code: "<p>{{ .Params.description }}</p>"
  jekyll: 
    - code: "<p>{{ page.description }}</p>"
subtypes:
  - name: Textarea Field (WYSIWYG)
    page: /front-matter-fields/textarea-field/wysiwyg
---
