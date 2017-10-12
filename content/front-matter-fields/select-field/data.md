---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to reference content stored in a data file
tags: ''
type: fields
hidden: true
title: Select Field (Data)
image: "/docs/assets/images/Select%20Preview.jpg"
weight: 5
config:
  code_samples:
    yaml: "type: select\nname: [String]\nlabel: [String]\ndescription: [String] \nhidden:
      [true|false]\nconfig:\n    source:\n      type: datafiles\n      file: [String]\n
      \     path: [String]\n"
  instructions: |
    The value of `file` is the slugged file path. E.g, `data/characters.toml` becomes `characters-toml`.

    The value of `path` is the key of a field in the data file that editors can select from. If left unset, all top-level fields in the data file are available.
options_image: "/docs/assets/images/Select%20Data%20Options.jpg"
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
- name: File
  description: The file containing the data that will populate this select field.
  type: Select
- name: Field (Optional)
  description: The name of the field to pull the list of options from.
  type: Select
how_to_use:
  hugo:
  - description: |
      In this example, values are being pulled from a simple array and stored in front matter.

      in `data/characters.toml`:
      ```
      +++
      characters = ["Jake Appleseed", "John Doe"]
      +++
      ```

      In this scenario, we can use the value as-is.
    code: |
      <p>{{ .Params.author }}</p>
  - description: |
      In this example, values are being pulled from an object, and a reference key is stored in front matter.

      In `data/characters.toml`:
      ```
      +++
      [[characters.Jake]]
        name = "Jake Appleseed"
        image = "/uploads/2017/01/01/jake.jpg"
      [[characters.John]]
        name = "John Doe"
        image = "/uploads/2017/01/01/john.jpg"
      +++
      ```

      In this scenario, you use the reference key to lookup the data from the data file.
    code: |
      {{ with index (.Site.Data.characters .Params.author) }}
        <img src="{{ .image }}">
        <p>{{ .name }}</p>
      {{ end }}
  jekyll:
  - description: |
      In this example, values are being pulled from a simple array and stored in front matter.

      In `data/characters.yml`:
      ```
      ---
      characters:
        - Jake Appleseed
        - John Doe
      ---
      ```

      In this scenario, we can use the value as-is.
    code: |
      <p>{{ page.author }}</p>
  - description: |
      In this example, values are being pulled from an object, and a reference key is stored in front matter.

      In `data/characters.yml`:
      ```
      ---
      characters:
        John:
          name = "John Doe"
          image = "/uploads/2017/01/01/john.jpg"
      ---
      ```

      In this scenario, you use the reference key to lookup the data from the data file.
    code: |
      {% assign author = site.data.characters[page.author] %}
      {% if author != '' %}
        <img src="{{ author.image }}">
        <p>{{ author.name }}</p>
      {% endif %}
subtypes: ''
output:
  json: "{ \n  \"author\": \"value\"\n} \n"
  toml: "+++ \nauthor = \"value\"\n+++ \n"
  yaml: "--- \nauthor: value \n--- \n"

---
The data select sub-type works by storing a reference to a field's key in the data file. The reference can then be used in your templates to get the value from the data file.

Array with groups of fields are not supported.
