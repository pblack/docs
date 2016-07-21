+++
Categories = []
date = "2016-07-21T21:46:00+00:00"
description = ""
draft = true
tags = []
title = "Keeping things in sync with Github and Bitbucket"
[menu.setting_up_a_site]
weight = 10

+++
When you setup a site with Forestry, and use Github or Bitbucket as your source, Forestry will setup a webhook with the repository you're using for your source. Whenever you push changes to the repository from outsite of Forestry (such as changing the theme) the webhook will get called, and Forestry will pull in the changes you made. This allows you to seemlessly make non content related changes to your site, while keeping Forestry up to date with these changes.