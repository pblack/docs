+++
Categories = ""
date = "2017-03-01T14:00:19Z"
description = "Allows users to enter multi-line text as a front matter field. "
image = "/docs/forestryio/images/Screen Shot 2017-03-01 at 3.06.24 PM.png"
tags = ""
title = "Textarea"
type = "fields"
[how_to_use]
hugo = "<p>\n{{ .Params.description }}\n</p>\n<code>{{ .Params.code_example }}</code>"
jekyll = "<p>\n{{ page.description}}\n</p>\n<code>{{ page.code_example }}</code>"
[output]
json = "{\n  description: \"Hello\\nWorld\",\n  code_sample: \"var message = 'Bonjour';\\nconsole.log(message)\"\n}"
toml = "+++ \ndescription = \"Hello\\nWorld\"\ncode_sample = \"var message = 'Bonjour';\\nconsole.log(message)\"\n+++ \n"
yaml = "---\ndescription: \"Hello\\nWorld\"\ncode_sample: \"var message = 'Bonjour';\\nconsole.log(message)\"\n---"

+++
