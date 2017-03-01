+++
date = "2017-03-01T15:30:14+00:00"
description = "A simple toggle to for saving a true/false value in front matter."
draft = true
image = "/docs/forestryio/images/Screen Shot 2017-03-01 at 4.38.27 PM.png"
title = "Toggle"
type = "fields"
[how_to_use]
hugo = "{{ if .Params.show_author }}\n  <div class=\"author\">\n    ...\n  </div>\n{{ end }}"
jekyll = "{% if page.show_author %} \n  <div class=\"author\">\n    ...\n  </div>\n{% endif %}"
[output]
json = "{\n  show_author: true\n}"
toml = "+++\nshow_author = true\n+++"
yaml = "---\nshow_author: True\n---"

+++
