---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows users to enter a single-line of text
tags: ''
type: fields
title: Text Field
image: "/docs/assets/images/Text%20Preview.jpg"
weight: 1
config:
  code_samples:
    yaml: |
      type: text
      name: [String]
      label: [String]
      description: [String]
      hidden: [true|false]
      config:
        required: [true|false]
options_image: "/docs/assets/images/Required-Hidden%20Options.jpg"
options:
- name: Hidden
  description: Hides this field in the UI, allowing for hidden default values.
  type: Toggle
- name: Required
  description: Require this field to be filled out before saving the page.
  type: Toggle
output:
  json: "{ \n  \"title\": \"value\"\n} \n"
  toml: "+++ \ntitle = \"value\"\n+++ \n"
  yaml: "--- \ntitle: value \n--- \n"
how_to_use:
  hugo: 
    - code: "<h1>{{ .Params.title }}</h1> "
  jekyll: 
    - code: "<h1>{{ page.title }}</h1>"
subtypes: ''

---
