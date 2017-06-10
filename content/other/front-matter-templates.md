+++
Categories = ""
date = "2017-01-30T09:23:05-05:00"
description = "Front Matter Templates let you choose which front matter fields appear when editing your content."
tags = ""
title = "Front Matter Templates"
[old_menu.setting_up_a_site]
weight = 8

+++
When creating a new page in Forestry, you will be asked to select a **Front Matter Template (FMT)**. This template determines which fields will be available on your new page and how they will be displayed.

Front Matter Templates give you complete control over the display of your front matter fields.

1.  Change the field _type_ (ex. change an input field to an image upload field)
2.  Change the _order_ of fields in the CMS
3.  Customize the _label_ and _description_ for each field
4.  Mark a field as _hidden_ (from non-developer roles)
5.  Set field specific configurations
6.  More options coming soon

## Setting up Front Matter Templates

Front Matter Templates can be created through the Forestry UI, or automatically created when importing a site with existing default fields (in your Jekyll _config.yml file or Hugo Archetype file).

### Creating Templates through the Forestry UI

Click on the Front Matter link in the sidebar to get to the list of available templates (this is only visible to people with _developer_ access).

![/docs/forestryio/images/front-matter-template.png](/docs/forestryio/images/front-matter-template.png)

<span style="letter-spacing: 0.01em;"></span>

<span style="letter-spacing: 0.01em;" class="">Here we have just one template, the</span> **default**<span style="letter-spacing: 0.01em;"> template.</span>

Clicking on the green **"Add Template"** button at the top of the page will take you to the new Front Matter Template form.

![/docs/forestryio/images/add-template-1.png](/docs/forestryio/images/add-template-1.png)

<span style="letter-spacing: 0.01em;">Give your new template a name and add default fields that you want to be displayed with pages that use this template.</span>

![/docs/forestryio/images/New-Front-Matter-Template.png](/docs/forestryio/images/New-Front-Matter-Template.png)

<span style="letter-spacing: 0.01em;"></span>

<span style="letter-spacing: 0.01em;">To learn more about Front Matter Template Fields, see the section below.</span>

### Automatically Create Templates When Importing a Site

Front Matter Templates can be created automatically when importing your site. How this is done depends on which static site generator you are using.

**Jekyll**

New templates will be created based off the [defaults](https://jekyllrb.com/docs/configuration/#front-matter-defaults) in your config file. A new Front Matter Template will be created for each scope in your defaults section.

**Hugo**

Templates for Hugo sites are created from your sites [archetype](https://gohugo.io/content/archetypes/) files. Each archetype file will result in a Front Matter Template.

**Note: Forestry can only read in Front Matter Templates from your site's source. Any changes to the template from within Forestry will not be written back to your config files.**

### Creating Templates from Existing Pages

Front Matter Template can be created from an existing page's front matter.

Click the "Missing or Extra Fields?" button on the right side of the page.

![/docs/forestryio/images/Screen Shot 2017-02-08 at 5.13.46 PM.png](/docs/forestryio/images/Screen%20Shot%202017-02-08%20at%205.13.46%20PM.png)

This will pop a new modal asking you if you want to create a new template. Clicking "Create Template" will create a new Front Matter Template based off the page you are viewing, and then redirect you to the edit page for the template.

Note that fields in the new template will mostly be simple types, like text, date, boolean, and date.

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

*   [Text](/docs/setting-up-a-site/front-matter-fields/text-field/)
*   [Textarea](/docs/setting-up-a-site/front-matter-fields/textarea/)
*   [Number](/docs/setting-up-a-site/front-matter-fields/number/)
*   [Toggle](/docs/setting-up-a-site/front-matter-fields/toggle/)
*   [Date](/docs/setting-up-a-site/front-matter-fields/date/)
*   Select
*   Image/File Upload
*   Gallery/Multi-file Upload
*   [Tag List](/docs/setting-up-a-site/front-matter-fields/tag-list/)
*   Sorted List
*   Field Group
*   Field Group List

## Modifying Front Matter Templates

### Changing the FMT for an existing Page

You can change the FMT for an existing page without losing your existing FM data.

The chosen template only effects which input fields are displayed to the user, it does not effect what is inside the file.

Switching a Page's FMT follows a "no modification" rule–it will not remove or modify values added to that Page with the previous template.

### Changing the FMT inside Hugo Projects

In Hugo, the only exception to the "no modification" rule is the type field.

If a FMT has a default value for type, then switching to that FMT will change the Page's type to the new default value. Otherwise, it will be set to the name of the new FMT.

Note that if the FMTs name does not match a type in your project, Hugo will fall back to the section's default type.

Also, the type is not tied back to the Front Matter Template, so changing the type does not change the Page's FMT.

### Adding New Fields

Any fields added to a FMT will appear in the CMS for all Pages using that FMT.

However, when a field is added with a default value, that default value is NOT set in the front matter of any page currently using that FMT. The default value will only be set for new pages.

### Deleting Fields

Deleting fields from a FMT does not remove that data from existing pages using that FMT.

However, that field will no longer be visible within the CMS.

### Modifying Existing Fields

Modifying the default value of an FMT field will NOT change value in the front matter of any page currently using that FMT. The new default will only effect new pages.
