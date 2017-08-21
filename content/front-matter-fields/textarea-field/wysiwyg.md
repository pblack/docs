---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to enter inline rich-text using a WYSIWYG
tags: ''
type: fields
title: Textarea Field (WYSIWYG)
image: "/docs/assets/images/Textarea%20WYSIWYG%20Preview.jpg"
weight: -1
hidden: true
output:
  json: "{ \n  \"description\": \"<b>Bold formatted text</b>\"\n} \n"
  toml: "+++ \ndescription = \"<b>Bold formatted text</b>\"\n+++ \n"
  yaml: "--- \ndescription: value \n--- \n"
how_to_use:
  hugo: 
    - code: "<p>{{ .Params.description }}</p>"
  jekyll: 
    - code: "<p>{{ page.description }}</p>"
---
The WYSIWYG sub-type outputs the rich-text content as an HTML string to be used in your content.
