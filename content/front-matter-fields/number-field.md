---
aliases:
    - /front-matter-fields/number/
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to enter a number within an optional range
tags: ''
type: fields
title: Number Field
image: "/docs/assets/images/Number%20Preview.jpg"
weight: 1
config:
  code_samples:
    yaml: |
      type: number
      name: [String]
      label: [String]
      description: [String] 
      config:
        min: [Number]
        max: [Number]
        step: [Number]
options_image: "/docs/assets/images/Number%20Options.jpg"
options:
  - name: Hidden
    description: Hides this field in the UI, allowing for hidden default values.
    type: Toggle
  - name: Minimum
    description: Set a minimum value allowed. Can not be greater than maximum.
    type: Number
  - name: Maximum
    description: Set a maximum value allowed. Can not be less than minimum.
    type: Number
  - name: Step
    description: Limits the field to increment by a fixed amount.
    type: Number
how_to_use:
  hugo: 
    - code: "<h1>{{ .Params.price }}</h1> "
  jekyll: 
    - code: "<h1>{{ page.price }}</h1>"
subtypes: ''
output:
  json: "{ \n  \"price\": \"value\"\n} \n"
  toml: "+++ \nprice = \"value\"\n+++ \n"
  yaml: "--- \nprice: value \n--- \n"
---
