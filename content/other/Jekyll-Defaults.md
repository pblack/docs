+++
date = "2016-04-25T14:51:00Z"
description = "Set default front matter for new pages and posts."
tags = []
title = "Default Fields For New Pages and Posts"
[menu.setting_up_a_site]
name = "Default Fields for New Pages and Posts"
weight = 1

+++
Forestry will make UI fields from the front matter of your posts, pages, and collections/sections.

You can set up your site so Forestry will use default fields for new pages or posts. In the following example, we want all new pages to include a _Banner_ image, a _Categories_ field (array), and a _Description_ field.

![](/docs/assets/images/forestry-default-fields.png)

## Jekyll Default Fields

If you want these fields to show up in front matter (and Forestry UI) for new posts, you can define them in your `_config.yml` file (see the [Jekyll docs](https://jekyllrb.com/docs/configuration/#front-matter-defaults) for more info).

In the example below, all new posts (no matter what the path is) will get these fields.

    defaults:
      - scope:
            path: ""
            type: posts
        values:
            thumbnail: ""
            categories: []
            description: ""

## Hugo Default Fields

With Hugo, you'll need to add an [archetype](https://gohugo.io/content/archetypes/) file with these fields for each [section](https://gohugo.io/content/sections/). The following fields in /archetypes/default.md will result in the above UI.

    +++
    title = ""
    description = ""
    banner = ""
    categories = []
    +++

<div class="highlighted-block">

### Image upload fields

Be sure to include at least one page or post that uses an image file as a value for the thumbnail front matter. This way, when Forestry parses your site, it will know to treat that field as an image upload field. *</div>