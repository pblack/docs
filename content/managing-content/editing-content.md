+++
title = ""

+++
description: Edit front matter and markdown content
menu:
  managing-content:
    weight: 2
related:
- title: Jekyll Collections
  url: https://jekyllrb.com/docs/collections/
- title: Hugo Sections
  url: https://gohugo.io/content/sections/
tags: ""
title: Editing Content
---
Forestry has a fully-featured content editor that allows you to edit your page’s *front matter* (or "fields") and *content body*.

## Front Matter

Front matter are the fields available to a page to customize it’s appearance, behaviour or content. *For example, date, title, and tags.*

These fields are [customizable by a developer](/docs/site-configuration/front-matter-templates). Fields can be configured to display as different types *(e.g, text, select, toggle, etc)*, can be hidden, and [much more](/docs/front-matter-fields).

For a full list of field types and their configuration options, [see here](/docs/front-matter-fields).

## Content Body

The content body is an optional long form WYSIWYG body for your content. When enabled, it allows users to create long-form content such as blog posts, privacy policies, terms of service, and much more.

The content body comes with a suite of power-features that regular text or texture fields don’t have, such as:

* WYSIWIG Input

* Multiple editing modes

* Embedding images from the media library

### Markdown, WYSIWIG & HTML

The content body allows you to edit your content with in three different modes:

* **WYSIWIG Mode:** which allows users to manipulate content in a rich text format similar to Microsoft Word or Apple Pages

* **Markdown Mode:** which allows users to manipulate content using markdown syntax

* **HTML Mode:** which allows users to manipulate content by writing HTML Markup

## Saving Changes

The content editor allows you to save changes to your content. Depending on how you imported your site, this stores in your content in different ways:

* If your site was imported with Git, we sync all of your changes back to Git

* If your site was imported as a zip archive or from a demo site, we store your changes in the cloud.

More importantly, the editor allows you to save changes in three ways:

* As working copies, which are stored in the cloud until you save them as a draft or publish them. *Working copies are shared with your team.*
* As drafts, which aren’t included when your site is built and deployed

* As published pages, which are included when your site is built and deployed

## Previewing Changes

The editor allows you to preview your changes before saving them. For more information, see the doc [Previewing](/docs/deployment-and-management/previewing).
