+++
Categories = ""
date = "2017-03-01T14:00:19Z"
description = "Allows users to enter multi-line text as a front matter field. "
draft = true
image = "/docs/forestryio/images/Screen Shot 2017-03-01 at 3.06.24 PM.png"
tags = ""
title = "Textarea"
type = "fields"
[how_to_use]
hugo = "<p>\n{{ .Params.description }}\n</p>"
jekyll = "<p>\n{{ page.description}}\n</p>"
[menu.setting_up_a_site]
weight = 13
[output]
json = "{\n  description: \"Hello\\nWorld\"\n}"
toml = "+++\ndescription = \"Hello\\nWorld\"\n+++"
yaml = "---\ndescription: \"Hello\\nWorld\"\n---"

+++
