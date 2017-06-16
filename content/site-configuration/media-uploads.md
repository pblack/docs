---
date: '2013-07-24T00:00:00Z'
description: ''
related: []
tags: ''
title: Media Uploads
menu:
  site-configuration:
    weight: 5
draft: true

---
In the settings for site’s CMS, you can configure how the media manager handles uploaded media.

You can configure:
* **Upload Folder:** the directory media is stored in
* **Front Matter File URL** how we should format the media URLs added to front matter fields
* **Content Body File URL:** how we should format the media URLs added to the body

### UPLOAD FOLDER
The upload folder is the actual directory we store your images in your repository.

Unless you have a special build process, this *should* live inside the `/static` folder so that your images are included in your built site.

### FRONT MATTER FILE URL
When you set up a Front Matter Template with an image upload, gallery or similar front matter field type, you may want to specify the folder you want files saved in and the url you want to serve them from. 

You can use the following variables here: :year:, :month:, :day:. The file name will be appended to the end of the path automatically.

For example, you may want to do relative requires for media included in the front matter. This means you need to include the relative path from the root of your built site. This means your URL may look like: 

`/public/images/`

### CONTENT BODY FILE URL
When you insert an image or other piece of media into the content body of your content, you may want to specify the folder you want files saved in and the url you want to serve them from. 

You can use the following variables here: :year:, :month:, :day:. The file name will be appended to the end of the path automatically.

For example, because you can’t apply filters or functions to media inside the content body (as it is automatically parsed and processed as markdown) you may need to include the full relative path that images will served from in your site. For example:

`/blog/public/images/`