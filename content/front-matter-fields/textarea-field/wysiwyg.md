---
Categories: ''
date: 2017-02-22 12:54:02 +0000
description: Allows editors to enter inline rich-text using a WYSIWYG
tags: ''
type: fields
title: WYSIWYG Textarea Field
image: "/docs/assets/images/Textarea%20WYSIWYG%20Preview.jpg"
weight: 1
output:
  json: "{ \n  \"description\": \"<b>Bold formatted text</b>\"\n} \n"
  toml: "+++ \ndescription = \"<b>Bold formatted text</b>\"\n+++ \n"
  yaml: "--- \ndescription: value \n--- \n"
how_to_use:
  hugo: 
    - code: "<h1>{{ .Params.description }}</h1> "
  jekyll: 
    - code: "<h1>{{ page.description }}</h1>"
---
The WYSIWYG sub-type outputs the rich-text content as an HTML string to be used in your content.
