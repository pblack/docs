+++
Categories = []
date = "2017-01-30T09:23:05-05:00"
description = ""
draft = true
tags = []
title = "Front Matter Templates"
[menu.setting_up_a_site]
weight = 8

+++
<span style="letter-spacing: 0.01em;">When creating a new page in Forestry, you will be asked to select a</span> <span style="letter-spacing: 0.01em;"></span>**Front Matter Template**<span style="letter-spacing: 0.01em;"> </span><span style="letter-spacing: 0.01em;">format for the new page. The selected template determines which fields will be available and how they will be displayed.</span>

<span style="letter-spacing: 0.18px;">Front Matter Templates will allow you to:</span>

1.  Change the order of fields in the CMS
2.  Set the label and description of the field
3.  Mark a field as hidden
4.  Set specific configurations for each field

## Setting up Front Matter Templates

Front Matter Templates can be created either through the user interface, or automatically when the site is imported.

### Creating Templates in the CMS

Click on the Front Matter link in the sidebar to get to the list of available templates.

![](/docs/forestryio/images/Screen%20Shot%202017-01-30%20at%2011.08.18%20AM-3.png)

Here we have just one template, the **default** template.

Clicking on the green **"Add Template"** button at the top of the page will take you to the new Front Matter Template form. To create the new template, you need only enter the name and press **"Create"**.

![](/docs/forestryio/images/Screen%20Shot%202017-01-30%20at%2012.33.11%20PM.png)

You can now begin to add fields to your templates. To learn more about Front Matter Template Fields, see the section below.

### Importing Templates with Site

Front Matter Templates can be created automatically when importing your site. How this is done depends on which static site generator you are using.

For Jekyll sites, new templates will be created based off the [defaults](https://jekyllrb.com/docs/configuration/#front-matter-defaults) in your config file. This works by creating a new template for each scope in your defaults.

Templates for Hugo sites are created from your sites [archetype](https://gohugo.io/content/archetypes/) files. 

**Note: Forestry can only read in Front Matter Templates from your site's source. Any changes to the template from within Forestry will not be written back to your config files.**

## Fields

Every field in your Front Matter Template will have at least five properties:

1.  Type
2.  Name
3.  Hidden
4.  Label (Optional)
5.  Description (Optional)

The **"Type"** is describes the type of data to be captured. For example: text, dates, files etc. Well talk more about the different types of fields Foresty supports in the next section.

**"Name"** is the key used to identify this field in the front matter.

The **"Hidden"** flag will hide this field from the user, effectively making the default value an unalterable value. By default, this is false.  

The **"Label"** is the user friendly text shown above the input field. If this is left blank we will do our best to guess the label.

The **"Description" **gives more context to the user about the expected input.