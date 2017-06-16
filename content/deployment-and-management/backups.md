---
date: '2013-07-24T00:00:00Z'
description: ''
tags: ''
title: Backups
menu:
  deployment-and-management:
    weight: 5
draft: true

---
## If You Imported Your Site With Git
If you set up and imported your site with Git, then backups are automatic!

Every time a change is made to content inside your Forestry CMS, we make a new commit to your Git repository. 

At any time, you can rollback these changes by reverting a commit.

Backups have never been easier!

## If You Imported Your Site from a Zip File
If you imported your site from a zip file, you can download the current version of your site at any time from your dashboard in zip format. 

This serves as an entire backup of all of your site’s content and layout files.

These zip files are formatted with the current date and time of the download, to make managing your backups easier. The format is:

	{{ site name }}-{{ YYYY }}-{{ MM }}-{{ DD }}-{{ UNIX TIMESTAMP }}