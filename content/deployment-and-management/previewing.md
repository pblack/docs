---
date: 2013-07-24 00:00:00 +0000
description: ""
menu:
  deployment-and-management:
    weight: 2
related:
- title: Jekyll Asset Pipeline
  url: /developing-with-jekyll/asset-pipeline/
- title: Hugo Asset Pipeline
  url: /developing-with-hugo/asset-pipeline/
tags: ""
title: Previewing
---

Forestry allows you to preview changes to your site before you save them by saving as a draft or publishing.

Previewing runs the same commands that publishing does, which is **only** the default command for your static site generator of choice.* (e.g, `$ jekyll build` or `$ hugo build`)*

If you have any external build processes that are required for your site to build properly, *previewing will not work*. For more information on this, see the Asset Pipelines documentation for your static site generator listed below.

## Caching Changes
To allow you to make changes and preview what they will look like, Forestry caches any changes you make to a piece of content *before* you save or publish them *until you log out*. These changes will persist even after you close the browser.

You can discard these changes at any time by using the `Discard Changes` menu option.
