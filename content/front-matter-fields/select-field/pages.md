---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to select from existing site content
tags: ''
type: fields
hidden: true
title: Select Field (Pages)
image: "/docs/assets/images/Select%20Pages%20Preview.jpg"
weight: 5
config:
  code_samples:
    yaml: "type: select\nname: [String]\nlabel: [String]\ndescription: [String] \nhidden:
      [true|false]\nconfig:\n    source:\n      type: pages\n      section: [String]\n"
  instructions: |
    `section` maps to the content sections shown in the sidebar of the CMS.
options_image: "/docs/assets/images/Select%20Page%20Options.jpg"
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
- name: Collection
  description: Restrict options to a specific collection of content
  type: Select
how_to_use:
  hugo:
  - code: |
      {{ with .Site.GetPages "page" .Params.related_page }}
        <h2>{{ .Title }}</h2>
        <p>{{ .Summary }}</p>
      {{ end }}
  jekyll:
  - code: |
      {% for related_page in site.pages | where:"path", page.related_page %}
        <h2>{{ related_page.title }}</h2>
        <p>{{ related_page.excerpt }}</p>
      {% endfor %}
subtypes: ''
output:
  json: "{ \n  \"related_page\": \"path/to/page.md\"\n} \n"
  toml: "+++ \nrelated_page = \"path/to/page.md\"\n+++ \n"
  yaml: "--- \nrelated_page: path/to/page.md \n--- \n"

---
