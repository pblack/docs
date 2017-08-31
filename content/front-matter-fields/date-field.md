---
aliases:
- "/front-matter-fields/date/"
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to select a date and time from a datepicker
tags: ''
type: fields
title: Date Field
image: "/docs/assets/images/Date%20Preview.jpg"
weight: 6
config:
  code_samples:
    yaml: "type: datetime\nname: [String]\nlabel: [String]\ndescription: [String]
      \nhidden: [true|false]\nconfig:\n  date_format: [String]\n  time_format: [String]
      \n"
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
subtypes: ''
output:
  json: "{ \n  \"publishdate\": \"YYYY-MM-DDTHH:MM:SS+-00:00\"\n} \n"
  toml: "+++ \npublishdate = \"YYYY-MM-DDTHH:MM:SS+-00:00\"\n+++ \n"
  yaml: "--- \npublishdate: YYYY-MM-DDTHH:MM:SS+-00:00 \n--- \n"
how_to_use:
  hugo:
  - code: |
      <time datetime="{{ .PublishDate }}">{{ .PublishDate.Format "January 2, 2006" }}</time>
  jekyll:
  - code: |
      <time datetime="{{ page.publishdate }}">{{ page.publishdate | date: "%B, %-d, %Y" }}</time>

---
The date field always saves dates to front matter in a standardized format with the timezone configured in your site settings to ensure compatibility with each static site generator.

* **Hugo**: YYYY-MM-DDTHH:MM:SS+-00:00
* **Jekyll**: YYYY-MM-DD HH:MM:SS +-00:00
