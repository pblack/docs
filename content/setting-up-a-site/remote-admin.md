+++
Categories = []
date = "2016-06-23T14:21:00+00:00"
description = "Install the Forestry CMS on your site - mysite.com/admin/"
draft = false
tags = []
title = "Remote Admin"
[menu.managing_your_team]
weight = 2
[menu.setting_up_a_site]
name = "Remote Admin "
url = ""
weight = 1

+++
With Forestry Remote you can install the Forestry CMS on your static site and access it via <span style="color:rgba(0,0,255,0.7);">example.com/admin/</span>.  Your site can be hosted anywhere since Forestry Remote is our entire CMS in a single HTML file.

![/docs/forestryio/images/forestry-remote-1.gif](/docs/forestryio/images/forestry-remote-1.gif)

## Choose a Path

Go to **Site Settings** **> Remote Admin Path** and tell Forestry where to put your CMS

![/docs/forestryio/images/settings.png](/docs/forestryio/images/settings.png)

## Publish From Forestry

The next time you publish your site, Forestry will also deploy your CMS to the folder that you specified above (in this case, it's the /admin folder).

## Go to site.com/admin

Navigate to /admin/ like so

<span style="letter-spacing: 0.01em;"></span>

![/docs/forestryio/images/forestry-remote-cms-1.png](/docs/forestryio/images/forestry-remote-cms-1.png)

## <span style="letter-spacing: 0.01em;">Login to See the Full CMS</span>

<span style="letter-spacing: 0.01em;">Bam! The entire CMS is accessible from your domain.  You can also white label  it and use your own logo. </span>

![/docs/forestryio/images/forestry-remote-cms-2-1.png](/docs/forestryio/images/forestry-remote-cms-2-1.png)

## <span style="letter-spacing: 0.01em;">Under the hood</span>

<span style="letter-spacing: 0.01em;">Forestry Remote is a single-page Javascript application that communicates with our API and replaces 100's of PHP files that come with a legacy CMS (WordPress, Drupal, etc).  Since Forestry.io is hosting the Javascript that makes this UI work, you don't ever have to update your CMS. </span>
