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
    yaml: |
      type: select
      name: [String]
      label: [String]
      description: [String] 
      hidden: [true|false]
      config:
          source:
            type: [simple|data|pages]
            file: [String] // type: data
            path: [String] // type: data
          options: [Array] // type: simple
  instructions: |
    `file` only applies when `type` is set to `data`. The value is filename of the data file desired. If the data file is inside a subdirectory, include the path as well.

    `path` only applies when `type` is set to `data`. The value is the key in the data file to pull values from.

    `options` only applies when `type` is set to `simple`. Provide an array of string values.
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
  description: Provide the options available for the "custom" source type.
  type: Tags List
how_to_use:
  hugo: 
    - code: "<h1>{{ .Params.author }}</h1> "
  jekyll: 
    - code: "<h1>{{ page.author }}</h1>"
subtypes: ''
output:
  json: "{ \n  \"author\": \"value\"\n} \n"
  toml: "+++ \nauthor = \"value\"\n+++ \n"
  yaml: "--- \nauthor: value \n--- \n"
---
