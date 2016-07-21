+++
Categories = []
date = "2016-07-21T01:48:00+00:00"
description = "Forestry is designed to work great with [Github](https://github.com/). You can use Github to keep track of the changes you make to your site, as well host your site on Github with [Github-pages](https://pages.github.com/). "
draft = true
tags = []
title = "Forestry and Github"
[menu.deployment_and_hosting]
weight = 7

+++
Forestry is designed to work great with [Github](https://github.com/). You can use Github to keep track of the changes you make to your site, as well host your site on Github with [Github-pages](https://pages.github.com/). 

## Getting started

Getting started is really easy, just head over to [github.com](https://github.com) and make an accont.

## Why manage your source with github

Forestry can commit changes you make to your site back to github. This let's you keep a history of all the changes you make, and allows you to revert if you ever need to. There are also other features of git that advanced users will already know about. Knowing this advanced features however is not required to benifit from hosting on github. Other than keeping track of your version history, it also alows the developer of the site to commit changes to non content things on your site (such as changing the colour scheme or changing the theme) to Github, without having to reupload the site to forestry manually. 

## Hosting with Github

To host your site on Github pages all you need to do is create a `github-pages` branch in your repository, and point forestry to it during the setup process. Forestry will use this branch to push the result of building your site with either jekyll or hugo to.