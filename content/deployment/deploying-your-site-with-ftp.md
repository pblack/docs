+++
Categories = ""
date = "2017-03-29T17:05:55+00:00"
description = ""
tags = ""
title = "Deploying your site with FTP"
[menu.deployment]
weight = 7

+++
If you are hosting your static site on an FTP server, you should be aware that Forestry will delete all files from your destination directory before  writing the new, updated files.

This could be problematic if you keep non-website related files in your FTP account. &nbsp;If you don't want Forestry to empty all of your files, consider setting up your site in a clean subdirectory. &nbsp;To do so, see the advanced options when setting up your hosting credentials.

![](/docs/forestryio/images/Forestry.io-hosting-ftp.png)