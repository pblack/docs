+++
date = "2017-03-02T10:25:19+00:00"
description = "Collects an unsorted list of text values."
image = "/docs/forestryio/images/tags-demo.gif"
title = "Tag List"
type = "fields"
[how_to_use]
hugo = "<!-- By Context -->\n{{ range .Params.tags }}\n  {{ . }}\n{{ end }}\n\n<!-- Declaring value variable name -->\n{{range $element := array}}\n    {{ $element }}\n{{ end }}\n\n<!-- Declaring key and value variable name -->\n{{range $index, $element := array}}\n    {{ $index }}\n    {{ $element }}\n{{ end }}"
jekyll = "{{ for tag in page.tags }}\n  {{ tag }}\n{{ endfor }}"
[output]
json = "{\n  tags: [\"one\", \"two\", \"three\"]\n}"
toml = "+++\ntags =  [\"one\", \"two\", \"three\"]\n+++"
yaml = "---\ntags:  \n  - \"one\"\n  - \"two\"\n  - \"three\"\n---"

+++
