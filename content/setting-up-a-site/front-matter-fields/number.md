+++
date = "2017-03-01T15:16:02+00:00"
description = "Allows users to enter a number in a front matter field."
image = "/docs/forestryio/images/Screen Shot 2017-03-01 at 4.21.11 PM.png"
title = "Number"
type = "fields"
[how_to_use]
hugo = "{{ .Params.age }}"
jekyll = "{{ page.age }}"
[output]
json = "{\n  age: 23\n}"
toml = "+++ \nage = 23\n+++ \n"
yaml = "---\nage: 23\n---"
[[options]]
description = "The default value for this number"
name = "Default"
type = "Number"
[[options]]
description = "The maximum value for this field, which must not be less than its minimum value."
name = "Maximum"
type = "Number"
[[options]]
description = "The minimum value for this field, which must not be greater than its maximum value."
name = "Minimum"
type = "Number"
[[options]]
description = "Limits the increments at which a numeric value can be set"
name = "Step"
type = "Number"

+++
