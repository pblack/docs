---
Categories: []
date: 2016-10-12 12:10:00 +0000
description: ''
tags: []
title: Image Paths are Broken
menu:
  troubleshooting:
    weight: 7
draft: true

---
Ensure that you're prepending your paths with your baseurl. 

## Jekyll

<pre><code class="language-html">{{ page.img | prepend:site.baseurl }}
</code></pre>

Read this for clarity around Jekyll's baseurl: 
https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/

## Hugo

