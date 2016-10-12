+++
Categories = []
date = "2016-10-12T12:10:00+00:00"
description = ""
draft = true
tags = []
title = "Image Paths are Broken"
[menu.troubleshooting]
weight = 1

+++
Ensure that you're prepending your paths with your baseurl. 

## Jekyll

<pre><code class="language-html">{{ page.img | prepend:site.baseurl }}
</code></pre>

Read this for clarity around Jekyll's baseurl: 
https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/

## Hugo

