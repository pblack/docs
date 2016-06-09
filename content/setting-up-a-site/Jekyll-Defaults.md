+++
date = "2016-04-25T14:51:00+00:00"
description = ""
draft = false
tags = []
title = "Jekyll Defaults"

+++
You can have forestry use default fields every time you create a new page or post. In the following example, we want a Banner image, a Categories field (array), and a Description field.
<img src="/docs/assets/images/forestry-default-fields.png">

### Jekyll
If you want these fields to show up in new posts, you can define them in your <code>_config.yml</code> file (see the <a href="https://jekyllrb.com/docs/configuration/#front-matter-defaults">Jekyll docs</a> for more info).

In the example below, all new posts (no matter what the path is) will get these fields.

<pre><code class="language-yml">
defaults:
  - scope:
      path: ""
      type: posts
    values:
        thumbnail: ''
        description: ''
        sub-title: ''
        tags: []
</code>
</pre>

This will save you from filling in the <a href="https://jekyllrb.com/docs/frontmatter/" target="_blank">Front Matter</a> for fields that will be the same for almost every new post.

In forestry it will look like this.
<img src="/docs/images/Screen Shot 2016-05-04 at 9.50.39 AM-1.png">

The fields defined in <code>_config.yml</code> will be auto populated, saving you from doing it for each new post.
