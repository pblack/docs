---
date: '2017-02-07T15:58:47-05:00'
description: Hugo will keep everything in the static folder when compiling your site
tags: []
title: Using a CNAME with Hugo
menu:
  faq:
    weight: 10

---
When building your site, the existing contents are replaced with the new site. This will cause your CNAME file to be removed.

Any file that is stored in the `/static/` directory will be copied into your built site as-is, so place your CNAME file at `/static/CNAME` in your Hugo project to have it persist during builds.
