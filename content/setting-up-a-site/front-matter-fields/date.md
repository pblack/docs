+++
date = "2017-03-01T21:09:14Z"
description = "Provides a date-time picker for populating front matter."
image = "/docs/forestryio/images/Screen Shot 2017-03-02 at 10.14.21 AM.png"
title = "Date"
type = "fields"
[how_to_use]
hugo = "{{  .Params.data.Format \"Jan 2 2006\" }}"
jekyll = "{{ page.date | date: \"%b %-d, %Y\" }}"
[output]
json = "{\n  date: '2016-12-05 11:02:00'\n}"
toml = "+++\ndate = '2016-12-05 11:02:00'\n+++"
yaml = "---\ndate: '2016-12-05 11:02:00'\n---"

+++
