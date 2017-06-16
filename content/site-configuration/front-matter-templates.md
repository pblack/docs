---
date: '2013-07-24T00:00:00Z'
description: ''
related:
- title: All Front Matter Field Types
  url: "/docs/front-matter-fields/"
- title: Jekyll Defaults
  url: https://jekyllrb.com/docs/configuration/#front-matter-defaults
- title: Hugo Archetypes
  url: https://gohugo.io/content/archetypes/
tags: ''
title: Front Matter Templates
menu:
  site-configuration:
    weight: 1

---


In Forestry, the user interface for the content and data file editor can be customized using *Front Matter Templates*.

In static sites, custom data for pages can be created by adding front matter to the top of the content file. This front matter can then be used to customize the content, appearance, and layout of a page inside of the page template.

*Front Matter Templates* allow you to customize how front matter appears in your custom CMS. They allow you to make a front matter field for an image appear as a file upload, or create beautiful galleries for users to upload images.

## How Front Matter Templates Work

You can create Front Matter Templates *per site*. These templates can then be configured to apply to specific content types, pages, or data files.

When we first import your static site into Forestry and generate your CMS, we generate Front Matter Templates for you based on your configuration. From then on, any changes made to your site configuration or content files *will not* be reflected in your CMS.

You can access these templates from the *"front matter"* menu item in the sidebar.

It’s important to note that any additional front matter fields added to a content file that **are not part of the Front Matter Template** will not be displayed in the Forestry editor.

## Setting up Front Matter Templates

Front Matter Templates can be created through the Forestry UI, or automatically created when importing a site with existing default fields (in your Jekyll `_config.yml` file or Hugo Archetype file).

### CREATING TEMPLATES THROUGH THE FORESTRY UI

Click on the Front Matter link in the sidebar to get to the list of available templates (this is only visible to people with *developer* access).

Here we have just one template, the **default** template.
Clicking on the green **"Add Template"** button at the top of the page will take you to the new Front Matter Template form.

Give your new template a name and add default fields that you want to be displayed with pages that use this template.

To learn more about Front Matter Template Fields, see the section below.

### AUTOMATICALLY CREATE TEMPLATES WHEN IMPORTING A SITE

Front Matter Templates can be created automatically when importing your site. How this is done depends on which static site generator you are using.

**Jekyll**
New templates will be created based off the [defaults](https://jekyllrb.com/docs/configuration/#front-matter-defaults) in your config file. A new Front Matter Template will be created for each scope in your defaults section.

**Hugo**
Templates for Hugo sites are created from your sites [archetype](https://gohugo.io/content/archetypes/) files. Each archetype file will result in a Front Matter Template.

**Note: **Forestry can only read in Front Matter Templates from your site’s source. Any changes to the template from within Forestry will not be written back to your config files.

### CREATING TEMPLATES FROM EXISTING PAGES

Front Matter Template can be created from an existing page’s front matter.
Click the "Missing or Extra Fields?" button on the right side of the page.

This will pop a new modal asking you if you want to create a new template. Clicking "Create Template" will create a new Front Matter Template based off the page you are viewing, and then redirect you to the edit page for the template.

**Note:** that fields in the new template will mostly be simple types, like text, date, boolean, and date.

## Customizing Fields

You can customize the way front matter fields appear by configuring the front matter field type in the frontmatter templates. They are many front matter field types to choose from. For more information, [see the documentation for each](/docs/front-matter-fields/).

## Modifying Front Matter Templates

### CHANGING THE Front Matter Template FOR AN EXISTING PAGE

You can change the *Front Matter Template* for an existing page without losing your existing front matter data.

The chosen template only effects which input fields are displayed to the user, it does not effect what is inside the file.

Switching a Page’s *Front Matter Template* follows a "no modification" rule – it will not remove or modify values added to that Page with the previous template.

### CHANGING THE Front Matter Template INSIDE HUGO PROJECTS

In Hugo, the only exception to the "no modification" rule is the type field.

If a *Front Matter Template* has a default value for type, then switching to that *Front Matter Template* will change the Page’s type to the new default value. Otherwise, it will be set to the name of the new *Front Matter Template*.

Note that if the *Front Matter Template’s* name does not match a type in your project, Hugo will fall back to the section’s default type.

Also, the type is not tied back to the *Front Matter Template*, so changing the type does not change the Page’s *Front Matter Template*.

### ADDING NEW FIELDS

Any fields added to a *Front Matter Template* will appear in the CMS for all Pages using that *Front Matter Template*.

However, when a field is added with a default value, that default value is *not* set in the front matter of any page currently using that *Front Matter Template*. The default value will only be set for new pages.

It’s also important to note that any front matter fields added to a content file will *not* be shown in the editor unless that field is added to the corresponding *Front Matter Template*.

### DELETING FIELDS

Deleting fields from a *Front Matter Template* does not remove that data from existing pages using that *Front Matter Template*.

However, that field will no longer be visible within the CMS.

### MODIFYING EXISTING FIELDS

Modifying the default value of an *front matter field* will *not* change the value in the front matter of any page currently using that *Front Matter Template*. The new default will only effect new pages.
