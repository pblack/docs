+++
Categories = []
date = "2016-06-23T14:21:00+00:00"
description = "Install the Forestry CMS on your site (mysite.com/admin/)"
draft = true
tags = []
title = "Forestry Remote "
[menu.managing_your_team]
weight = 2

+++
With Forestry Remote you can install the Forestry CMS on your static site and access it via _example.com/admin/_.  It doesn't matter where you host your site (Amazon S3, GitHub Page, etc), just tell Forestry where to put which directory to put your CMS.

![/docs/forestryio/images/forestry-remote.gif](/docs/forestryio/images/forestry-remote.gif)

<span style="letter-spacing: 0.01em;"></span>

### A full CMS in a single HTML file

<span style="letter-spacing: 0.01em;" class="">Forestry Remote is a single html file that you drop into your static site. It's a single-page Javascript application that communicates with our API and replaces 100's of PHP files that come with a legacy CMS (WordPress, Drupal, etc).  Since Forestry.io is hosting the Javascript that makes this UI work, you don't ever have to update your CMS. </span>

<span style="letter-spacing: 0.01em;" class="">For example, after deploying forestry remote, you can navigate to /admin/ like so:</span>

![/docs/forestryio/images/forestry-remote-cms.png](/docs/forestryio/images/forestry-remote-cms.png)

And you'll see a the full CMS after you log in:

![/docs/forestryio/images/forestry-remote-cms-2.png](/docs/forestryio/images/forestry-remote-cms-2.png)