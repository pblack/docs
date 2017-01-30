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
When creating a new page in Forestry, you will be asked to select a**Front Matter Template**. This template determines which fields will be available on your new page and how they will be displayed.

Front Matter Templates give you complete control over the display of your front matter fields.

1.  Change the field _type_ (ex. change an input field to an image upload field)
2.  Change the order of fields in the CMS
3.  Customize the label and description for each field
4.  Mark a field as hidden (from non-developer roles)
5.  Set specific configurations for each field
6.  More options coming soon

## Setting up Front Matter Templates

Front Matter Templates can be created through the Forestry UI, or automatically created when importing a site with existing default fields (in your Jekyll _config.yml file or Hugo Archetype file).

### Creating Templates through the Forestry UI

Click on the Front Matter link in the sidebar to get to the list of available templates (this is only visible to people with _developer_ access).

![/docs/forestryio/images/front-matter-template.png](/docs/forestryio/images/front-matter-template.png)

 <span style="letter-spacing: 0.01em;"></span> 

<span style="letter-spacing: 0.01em;" class="">Here we have just one template, the</span> **default**<span style="letter-spacing: 0.01em;"> template.</span>  

Clicking on the green **"Add Template"** button at the top of the page will take you to the new Front Matter Template form. 

![/docs/forestryio/images/add-template.png](/docs/forestryio/images/add-template.png)

Give your new template a name and add default fields that you want to be displayed with pages that use this template.

![/docs/forestryio/images/New-Front-Matter-Template.png](/docs/forestryio/images/New-Front-Matter-Template.png)

 <span style="letter-spacing: 0.01em;"></span> 

<span style="letter-spacing: 0.01em;">To learn more about Front Matter Template Fields, see the section below.</span>  

### Automatically Create Templates When Importing a Site

Front Matter Templates can be created automatically when importing your site. How this is done depends on which static site generator you are using.

**Jekyll**

New templates will be created based off the [defaults](https://jekyllrb.com/docs/configuration/#front-matter-defaults) in your config file. A new Front Matter Template will be created for each scope in your defaults section.

**Hugo**

Templates for Hugo sites are created from your sites [archetype](https://gohugo.io/content/archetypes/) files.  Each archetype file will result in a Front Matter Template. 

**Note: Forestry can only read in Front Matter Templates from your site's source. Any changes to the template from within Forestry will not be written back to your config files.**

## Customizing Fields

Every field in your Front Matter Template will have at least five properties that you can customize:

1.  Type
2.  Name
3.  Hidden
4.  Label (Optional)
5.  Description (Optional)

The **"Type"** describes the type of data to be captured (and resulting UI element displayed). For example: text, dates, files etc. We'<span style="letter-spacing: 0.01em;">ll talk more about the different types of fields Forestry supports in the next section.</span>

**"Name"** is the key used to identify this field in the front matter.

The **"Hidden"** flag will hide this field from the user, effectively making the default value an unalterable value. By default, this is false.

The **"Label"** is the text shown above the input field. If this is left blank we will do our best to guess the label.

The **Description** gives more context to the user about the expected input.

### Field Types

As it stands, Forestry supports 11 field types, with more on the way. Here is a list of the currently supported field types:

*   Text
*   Textarea
*   Number
*   Minimum
*   Maximum
*   Step
*   Toggle
*   Date
*   Image/File Upload
*   Gallery/Multi-file Upload
*   Tag List
*   Sorted List
*   Field Group
*   Field Group List