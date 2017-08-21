---
aliases:
    - /front-matter-fields/date/
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to select a date and time from a datepicker
tags: ''
type: fields
title: Date Field
image: "/docs/assets/images/Date%20Preview.jpg"
weight: 1
config:
  code_samples:
    yaml: |
      type: datetime
      name: [String]
      label: [String]
      description: [String] 
      config:
        date_format: [String]
        time_format: [String] 
options_image: "/docs/assets/images/Date%20Options.jpg"
options:
- name: Hidden
  description: Hides this field in the UI, allowing for hidden default values.
  type: Toggle
- name: Date Format
  description: Formats the display of the date using [moment.js formatting](https://momentjs.com/docs/#/displaying/format/).
  type: Text
- name: Time Format
  description: Formats the display of the time using [moment.js formatting](https://momentjs.com/docs/#/displaying/format/).
  type: Text
how_to_use:
  hugo: 
    - code: "<h1>{{ .Params.publishDate }}</h1> "
  jekyll: 
    - code: "<h1>{{ page.publishDate }}</h1>"
subtypes: ''
output:
  json: "{ \n  \"publishDate\": \"YYYY-MM-DDTHH:MM:SS+-00:00\"\n} \n"
  toml: "+++ \npublishDate = \"YYYY-MM-DDTHH:MM:SS+-00:00\"\n+++ \n"
  yaml: "--- \npublishDate: YYYY-MM-DDTHH:MM:SS+-00:00 \n--- \n"
---
The date field always saves dates to front matter in a standardized format with the timezone configured in your site settings to ensure compatibility with each static site generator.

* **Hugo**: YYYY-MM-DDTHH:MM:SS+-00:00
* **Jekyll**: YYYY-MM-DD HH:MM:SS +-00:00
