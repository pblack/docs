---
date: '2013-07-24T00:00:00Z'
description: ''
related:
- title: Jekyll Configuration Guide
  url: https://jekyllrb.com/docs/configuration/
- title: Hugo Configuration Guide
  url: https://gohugo.io/overview/configuration/
- title: Hugo URL Function Reference
  url: https://gohugo.io/templates/functions/#urls
tags: ''
title: Assets Not Loading
menu:
  troubleshooting:
    weight: 3
draft: true

---
Sometimes you’ll find your assets aren’t loading when you preview or publish your site. This is almost always due to *pathing issues*.

The best way to solve this issue is to ensure you're always using absolute URLs for the environment your viewing in.

For example, we have a CSS file named `main.css` that isn’t loading when viewing subpages.

In the dev environment, we’re serving the site from `localhost:4000`, meaning that `main.css` is served from `localhost:4000/main.css`.

The stylesheet code looks as follows:
`<link src="main.css" rel="stylesheet" type="text/css">`

When viewing any page at the root of the site, e.g, `localhost:4000` or `localhost:4000/about` we see the CSS as expected, but when loading a subpage such as `localhost:4000/blog/post-name` no CSS is rendered.

If we add the absolute URL to the stylesheet path, we solve this problem. In this case, the stylesheet looks like this in the built site:

`<link src="http://localhost:4000/main.css" rel="stylesheet" type="text/css">`

**However,** you don’t want to hard-code this value in, because then it will break in your staging or preview environment.

## Environment-based Base URLs
In order to solve this problem, Forestry sets the base URL of your site based on the environment your site is built in.

* For development, this is the `baseURL` set in your config file.
* For staging, this is set to the preview environments URL.
* For production, this is set to the `Site URL` defined in your CMS’ `Settings`, found on the `General` tab.

## Absolute URLs with Jekyll
In Jekyll, baseURL is the base *path* your site should be served from. In order words, if your site is located at `http://example.com/blog/` than baseURL is `/blog`.

In order to properly set up an absolute URL with Jekyll, a url should be built as follows:

`<link src="{{ "main.css | prepend {{ site.url }} ~ {{ site.baseurl }}" rel="stylesheet" type="text/css">`

*In this code we take the relative path to your css file, `main.css`, and we use `prepend` to add a string in front of it. That string is the combination of the site's URL, and the baseURL you set up in your config file. We use the `~` operator to add the two strings together.*

## Absolute URLs with Hugo
In Hugo, baseURL is the full path to your site, including domain. In order words, it’s `http://example.com/blog`.

Hugo has a built-in function for building absolute URLs called `absURL`, so setting this up is easy:

`<link src="{{ "main.css" | absURL }}" rel="stylesheet" type="text/css">`
