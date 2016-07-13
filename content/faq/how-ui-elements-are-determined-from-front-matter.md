+++
date = "2016-07-13T17:58:00+00:00"
description = ""
draft = true
tags = []
title = "How UI elements are Determined  from Front Matter"

+++
![](/docs/forestryio/images/Screen Shot 2016-07-13 at 5.59.22 PM.png)

The word "thumbnail" comes from the name of that field in front matter (see screenshot). If you want an "upload file" button in forestry, you will have to make sure you already have a post/page with that front matter field set to a file path.  This because Forestry reads through all of your posts/pages when you upload your site to determine what UI element to use for each front matter field. If it finds a path to a file for the "thumbnail" field, it will know to use an "upload" button  for all new posts that have a "thumbnail" field in their front matter.

![](/docs/forestryio/images/Screen Shot 2016-07-13 at 4.59.15 PM.png)