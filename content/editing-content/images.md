+++
Categories = []
date = "2016-07-21T22:41:00+00:00"
description = ""
draft = true
tags = []
title = "Adding Images"
[menu.editing_content]
weight = 3

+++
Images may be added to posts directly in the main content body or through front matter fields. 

## Markdown Editor

To add an image to the markdown editor, simply click the "Add Image" button:

[ Image: Markdown editor, image button highlighted]

A modal will pop up where you can either upload a new image or select one that you've already uploaded.

[Image: The upload image modal for the markdown editor]

[Image: The gallery image for the markdown editor]

The image will be inserted into the editor like so:

`[](path/to/image)`

You can move the image by changing the location of this text. You can also supply alternative text (in case the image is unavailable) like so:

`[alternative text](path/to/image)`

Supplying this alternate text is also important for things like screen readers, as well as search engine ranking.

You are also able to use the image as a link with the following example:

`[![alt text](path/to/image)](/some/link/)`

## WYSIWYG

To add an image in the content body, click on the "Image" button on the top of the editor, and select the image you would like to add. 

[ Image: WYSIWYG editor, image button highlighted]

A modal will appear that will allow you to upload a new image, or select on that you've already uploaded:

[ Image: WYSIWYG upload image modal ]

[Image: WYSIWYG gallery modal]

In the WYSIWYG editor, the image is actually inserted into the editor.

[Image: Image in WYSIWYG editor}

Clicking on the image opens up a modal that allows you to change various settings on the image.

[ Image: Edit image modal]

- Title: Will serve as the alternative text
- Link: If supplied, clicking on the image will act as a link
- Open in new tab: Should the link open in a new tab

## Front matter

Adding an image to the front matter is very easy.

- Click "Add File"
- Select an image
- Done

[ Image: Front matter image, with select file highlighted ]