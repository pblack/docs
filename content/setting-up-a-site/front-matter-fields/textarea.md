+++
Categories = ""
date = "2017-03-01T14:00:19+00:00"
description = "Allows users to enter multi-line text as a front matter field. "
draft = true
image = "/docs/forestryio/images/Screen Shot 2017-03-01 at 3.06.24 PM.png"
tags = ""
title = "Textarea"
type = "fields"
[how_to_use]
hugo = "<p>\n{{ .Params.description }}\n</p>"
jekyll = "<p>\n{{ page.description}}\n</p>"
weight = 13
[output]
json = "{\n  description: \"Hello\\nWorld\"\n}"
toml = "+++\ndescription = \"Hello\\nWorld\"\n+++"
yaml = "---\ndescription: \"Hello\\nWorld\"\n---"

+++
