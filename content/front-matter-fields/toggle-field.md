---
aliases:
- "/front-matter-fields/toggle/"
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to toggle an option on or off
tags: ''
type: fields
title: Toggle Field
image: "/docs/assets/images/Toggle%20Preview.jpg"
weight: 4
config:
  code_samples:
    yaml: "type: boolean\nname: [String]\nlabel: [String]\ndescription: [String] \nhidden:
      [true|false]\n"
options_image: "/docs/assets/images/Hidden-only%20Options.jpg"
options:
- name: Hidden
  description: Hides this field in the UI, allowing for hidden default values.
  type: Toggle
how_to_use:
  hugo:
  - code: |
      // Show a banner if featured

      {{ if .Params.is_featured }}
        <img src="{{ .Params.banner }}">
      {{ end }}"
  - code: |
      // Gets all pages that are featured

      {{ range where .Site.Pages "Params.is_featured" "true" }}
        <h1>{{ .Title }}</h1>
        <p>{{ .Summary }}</p>
      {{ end }}"
  jekyll:
  - code: |
      // Show a banner if featured

      {% if page.is_featured %}
        <img src="{{ page.banner }}">
      {% endif %}
  - code: |
      // Get all posts that are featured

      {% for post in site.posts | where:"is_featured", "true" %}
        <h1>{{ page.title }}</h1>
        <p>{{ page.summary }}</p>
      {% endfor %}
output:
  json: "{ \n  \"is_featured\": \"true\"\n} \n"
  toml: "+++ \nis_featured = \"true\"\n+++ \n"
  yaml: "--- \nis_featured: true \n--- \n"

---
