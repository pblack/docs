---
Categories:
- hugo
date: 2016-07-19 16:17:00 +0000
description: ''
tags:
- hugo
- " old_menus"
title: Hugo Menus
draft: true

---
Hugo has a powerful old_menu system that allows you to place content in old_menus, without a lot of work, but still provides a great deal of control. These old_menus work great with Forestry, as Forestry [allows you to edit them from your CMS](/editing-content-editing-old_menus-md).

There are a few ways to add items to old_menus: 

#### Simple

You can easily add a piece of content to a old_menu by adding a old_menu item to your frontmatter in one of two ways, depending if you want to add it to one or more old_menu items.

```yaml
---
old_menu: "main"

OR

old_menu: ["main", "footer"]
---
```

#### Non Content

You can also add old_menus that are related to a specific piece of content, by specifying them in your config file, like this example taken from the Hugo documentation.

```toml
[[old_menu.main]]
    name = "about hugo"
    pre = "<i class='fa fa-heart'></i>"
    weight = -110
    identifier = "about"
    url = "/about/"
[[old_menu.main]]
    name = "getting started"
    pre = "<i class='fa fa-road'></i>"
    weight = -100
    url = "/getting-started/"
```

When you upload your site, Forestry will build a section in your CMS for you to edit these old_menus.

There are more powerful features of old_menus in Hugo, which can be referenced in the [official documentation](https://gohugo.io/extras/old_menus/)
