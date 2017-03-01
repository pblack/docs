---
Categories: ''
date: '2017-02-22T12:54:02Z'
description: Allows users to enter a single-line of text as front matter field.
tags: ''
type: fields
title: Text Field
image: "/docs/forestryio/images/text-field.png"
weight: 1
options:
- name: default
  description: The default value for the text field.
  type: text
- name: required
  description: Marks a field as required before publishing the page.
  type: toggle
output:
  json: |
    { 
      title: "value"
    } 
  toml: |
    +++ 
    title = "value"
    +++ 
  yaml: |
   --- 
   title: value 
   --- 
how_to_use:
  hugo: "<h1>{{ .Params.title }}</h1> "
  jekyll: "<h1>{{ page.textfield }}</h1>"
subtypes: ''

---
