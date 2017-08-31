---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to select from an array of options
tags: ''
type: fields
title: Select Field
image: "/docs/assets/images/Select%20Preview.jpg"
weight: 5
config:
  code_samples:
    yaml: "type: select\nname: [String]\nlabel: [String]\ndescription: [String] \nhidden:
      [true|false]\nconfig:\n    source:\n      type: simple\n    options: [Array]\n"
options_image: "/docs/assets/images/Select%20Custom%20Options.jpg"
options:
- name: Hidden
  description: Hides this field in the UI, allowing for hidden default values.
  type: Toggle
- name: Required
  description: Require this field to be filled out before saving the page.
  type: Toggle
- name: Source Type
  description: Source select options manually, from pages, or from a data file.
  type: Select
- name: Options
  description: Provide the options available for the custom/simple source type.
  type: Tags List
how_to_use:
  hugo:
  - code: "<p>{{ .Params.author }}</p>"
  jekyll:
  - code: "<p>{{ page.author }}</p>"
subtypes:
- name: Select Field (Pages)
  page: "/front-matter-fields/select-field/pages"
- name: Select Field (Data)
  page: "/front-matter-fields/select-field/data"
output:
  json: "{ \n  \"author\": \"value\"\n} \n"
  toml: "+++ \nauthor = \"value\"\n+++ \n"
  yaml: "--- \nauthor: value \n--- \n"

---
