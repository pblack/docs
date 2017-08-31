---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to edit a group of related fields
tags: ''
type: fields
title: Field Group Field
image: "/docs/assets/images/Field%20Group%20Preview.jpg"
weight: 11
config:
  code_samples:
    yaml: |
      type: field_group
      name: [String]
      label: [String]
      description: [String]
      hidden: [true|false]
      fields:
        - [Field]
  instructions: |
    The `fields` array accepts the YAML configuration for any field type.
options_image: "/docs/assets/images/Hidden-only%20Options.jpg"
options:
- name: Hidden
  description: Hides this field in the UI, allowing for hidden default values.
  type: Toggle
how_to_use:
  hugo:
  - code: |
      {{ with .Params.author }}
      <div class="author">
        <h2>{{ .name }}</h2>
        <small>{{ .bio }}</small>
        <img src="{{ .image }}" alt="Photo of {{ .name }}">
      </div>
      {{ end }}
  jekyll:
  - code: "{% if page.author != '' %}\n<div class=\"author\">\n  <h2>{{ page.author.name
      }}</h2>\n  <small>{{ page.author.bio }}</small>\n  <img src=\"{{ page.author.image
      }}\" alt=\"Photo of {{ page.author.name }}\">\n</div>\n{% endif %} \n"
output:
  json: |
    {
      "author":
      {
        "name": "Sarah Jane",
        "bio": "Sarah is a writer for the post"
        "image": "/uploads/:year:/:month:/:day:/filename.ext"
      }
    }
  toml: |
    +++
    [author]
      name = "Sarah Jane"
      bio = "Sarah is a writer for the post"
      image = "/uploads/:year:/:month:/:day:/filename.ext"
    +++
  yaml: "---\nauthor: \n  name: Sarah Jane\n  bio: Sarah is a writer for the post\n
    \ image: /uploads/:year:/:month:/:day:/filename.ext\n---\n"

---
