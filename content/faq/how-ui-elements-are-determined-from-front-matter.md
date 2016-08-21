+++
date = "2016-07-13T17:58:00+00:00"
description = ""
draft = true
tags = []
title = "How are UI elements determined  from Front Matter"

+++
Let's look at the following example of front matter from a **Jekyll** post:
<pre><code class="language-yml">`---`
title: "Example Post"
date: "2016-05-17 18:19:00"
thumbnail: "/assets/images/mountain-forestr.jpg"
tags:
- health
`---`
</code>
</pre>
When Forestry parses this front matter, the following UI will be generated.
![](/docs/forestryio/images/forestry-field-types-ui.png)

If you are setting up a site and find the front matter doesn't generate the UI elements that you have intended, you can change edit these by clicking three dots.

![](/docs/forestryio/images/forestry-edit-field-type.png)

<iframe src="https://player.vimeo.com/video/179596316?title=0&byline=0&portrait=0" width="700" height="445" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


The word "thumbnail" comes from the name of that field in front matter (see screenshot). If you want an "upload file" button in forestry, you will have to make sure you already have a post/page with that front matter field set to a file path.  This because Forestry reads through all of your posts/pages when you upload your site to determine what UI element to use for each front matter field. If it finds a path to a file for the "thumbnail" field, it will know to use an "upload" button  for all new posts that have a "thumbnail" field in their front matter.
