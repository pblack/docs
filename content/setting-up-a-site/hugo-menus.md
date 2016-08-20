+++
Categories = ["hugo"]
date = "2016-07-19T16:17:00+00:00"
description = ""
draft = true
tags = ["hugo", " menus"]
title = "Hugo Menus"

+++
Hugo has a powerful menu system that allows you to place content in menus, without a lot of work, but still provides a great deal of control. These menus work great with Forestry, as Forestry [allows you to edit them from your CMS](/editing-content-editing-menus-md).

There are a few ways to add items to menus: 

#### Simple

You can easily add a piece of content to a menu by adding a menu item to your frontmatter in one of two ways, depending if you want to add it to one or more menu items.

```yaml
---
menu: "main"

OR

menu: ["main", "footer"]
---
```

#### Non Content

You can also add menus that are related to a specific piece of content, by specifying them in your config file, like this example taken from the Hugo documentation.

```toml
[[menu.main]]
    name = "about hugo"
    pre = "<i class='fa fa-heart'></i>"
    weight = -110
    identifier = "about"
    url = "/about/"
[[menu.main]]
    name = "getting started"
    pre = "<i class='fa fa-road'></i>"
    weight = -100
    url = "/getting-started/"
```

When you upload your site, Forestry will build a section in your CMS for you to edit these menus.

There are more powerful features of menus in Hugo, which can be referenced in the [official documentation](https://gohugo.io/extras/menus/)