---
date: 2016-07-13 17:58:00 +0000
description: ""
menu:
  faq:
    name: How UI elements are determined from front matter
    weight: 1
tags: []
title: How are UI elements determined  from front matter
---

Let's look at the an example of front matter from a **Jekyll** post:
<pre><code class="language-yml">`---`
title: "Example Post"
date: "2016-05-17 18:19:00"
thumbnail: "/assets/images/mountain-forest.jpg"
tags:
- health
`---`
</code>
</pre>
When Forestry parses this front matter, the following UI will be generated.
![][image-1]

### Detecting front matter values
Forestry parses your project to understand what UI elements to use.  For instance, if Forestry finds a file called resume.pdf and there's a front matter field set to "/files/resume.pdf". Forestry will use a "file upload" button for that front matter field.

If you find a front matter field does not generate the UI elements that you have intended, you can change it by clicking three dots.

![][image-2]

<iframe src="https://player.vimeo.com/video/179596316?title=0&byline=0&portrait=0" width="700" height="445" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

[image-1]:	/docs/forestryio/images/forestry-field-types-ui.png
[image-2]:	/docs/forestryio/images/forestry-edit-field-type.png
