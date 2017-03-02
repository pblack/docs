+++
date = "2017-03-02T10:25:52+00:00"
description = "Groups a number of "
draft = true
title = "Field Group"
type = "fields"
[output]
json = "{\n  author: {\n    first_name: \"George\",\n    last_name: \"O'Jungle\"\n  }\n}"
toml = "+++\n[author]\n    first_name = \"George\"\n    last_name = \"O'Jungle\"\n+++"
yaml = "---\nauthor:\n  first_name: \"George\"\n  last_name: \"O'Jungle\"\n---"
[[options]]
description = "A sortable list of fields to be displayed together."
name = "Fields"
type = "Text"

+++
