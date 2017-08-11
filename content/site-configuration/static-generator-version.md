---
date: 2013-07-24 00:00:00 +0000
description: ''
related: []
tags: ''
title: Static Generator Version
menu:
  site-configuration:
    weight: 5

---
On a per site basis, you can configure which version of your static site generator we use to build your site when previewing and publishing. 

You may want to do this if your site is built using an older version of your static site generator, and will not build correctly with the latest version.

## Changing Versions with Hugo
In the settings for site’s CMS, you can select your preferred version from a dropdown.

## Changing Versions with Jekyll
With Jekyll, you configure your Jekyll version using your projects `.Gemfile`.

With the `.Gemfile`, you can configure different version requirements by specifying an exact version number, and optionally adding a modifier:
* `~>`: greater than
* `~<`: less than
* `>=`: greater than or equal to
* `<=`: less than or equal to

For example, if you want to use Jekyll 3.2.1, your `.Gemfile` should look as follows:

`source 'https://rubygems.org'  
gem 'jekyll', '3.2.1'  
group :jekyll_plugins do  
    gem 'example-plugin', '>=0.7.0`
