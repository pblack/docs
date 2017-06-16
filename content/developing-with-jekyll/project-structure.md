---
date: '2013-07-24T00:00:00Z'
description: ''
related:
- title: "“Jekyll Directory Structure Reference”"
  url: https://jekyllrb.com/docs/structure/
tags: ''
title: Project Structure
menu:
  developing-with-jekyll:
    weight: 3

---
In Jekyll, project structure and naming is very important. The way you structure and name your project directly effects the organization of your built static site.

For example, a Jekyll site may look like this:

	.
	├── _config.yml
	├── _data/
	|   └── members.yml
	├── _drafts/
	|   ├── begin-with-the-crazy-ideas.md
	|   └── on-simplicity-in-technology.md
	├── _includes/
	|   ├── footer.html
	|   └── header.html
	├── _layouts/
	|   ├── default.html
	|   └── post.html
	├── _posts/
	|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
	|   └── 2009-04-26-barcamp-boston-4-roundup.md
	'' ├── _sample/
	'' |   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
	├── _sass/
	|   ├── _base.scss
	|   └── _layout.scss
	├── _site/
	├── .jekyll-metadata
	└── index.html

For a full breakdown on how this directory structure works, [see the Jekyll docs][1].

## How Forestry Parses Jekyll
Based on the example structure above, let’s explain how Forestry parses your site.

## Content
Forestry parses the root of your project for any `.html` files, as well your `_drafts/` folder and your `_posts/` folder for content and displays them under the "Content" section of the CMS.

Any `.html` files get added to the `Page` content type, and can be accessed from there in the CMS.

Content found in both the `_drafts/` and `_posts/` folder are parsed as a `Post` content type, and can be accessed from there in the CMS.

Any other folder following the `_NAME/` format are parsed as additional content types, and a new section is added to the CMS.
*For example, everything in the `_sample/` folder will be added to the `Sample` content type and can be accessed from there in the CMS.*

## Data Files
Any files found inside the `_data/` folder are parsed as data files and are displayed individually in the CMS under the "Data" section.

## Front Matter
Upon initial import, we will parse the content files for each content type inside your project and build a list of fields for them.

We then create a *Front Matter Template* with for each section using all of the fields found.

After import, any fields manually added to a content file will *not* be automatically added to your *Front Matter Templates*. More information on this in the [Front Matter Template doc][2].

## Themes
Jekyll also supports Gem based themes. See the references below for more information.


[1]:	https://jekyllrb.com/docs/structure/
[2]:	/docs/site-configuration/front-matter-templates
