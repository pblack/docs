---
Categories: []
date: 2016-07-21T21:46:00Z
description: ""
draft: true
tags: []
title: Keeping things in sync with Github and Bitbucket
---

When you setup a site with Forestry, and use GitHub or Bitbucket as your source, Forestry will setup a webhook with the repository you're using for your source. Whenever you push changes to the repository from outside of Forestry (such as changing the theme) the webhook will get called, and Forestry will pull in the changes you've made. This allows you to seamlessly make non-content related changes to your site, while keeping Forestry up to date with these changes.
