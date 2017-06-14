---
date: 2013-07-24
description: "Introduction to Forestry for Content Managers"
draft: "true"
tags: ""
title: "Setting Up Deployment"
menu:
  deployment-and-management:
---
In Forestry, you get set up your CMS to deploy your site to your staging or production environment when you publish changes.

Depending on your needs, you may want Forestry to deploy straight to your production environment, as you can use our [preview feature][1] as your staging environment.

However, if you have a CI process or additional build steps, you may want to deploy your site to a staging site before following your existing process for deploying to production.

## Setting Up Deployment
You can deploy your site to multiple locations, including GitHub Pages, Amazon S3, or via FTP/SFTP. For instructions on setting this up, see one of our guides:

* [Deploying with Amazon S3][2]
* [Deploying with FTP/SFTP][3]
* [Deploying to GitHub Pages][4]

## Automatic Deployment
If your site was imported using a Git repository, Forestry can also handle automatic deployment as changes are pushed to the source repository.

This is great if you’re going to be making changes to content, layouts, or your site configuration in a development environment, as you won’t have to manually deploy those changes.

To enable this, go to the `Settings` page of your site, and on the `General` tab find `Deployment`. Turn the `Auto Deploy` toggle to on, and let us handle the rest!

[1]:	/docs/deployment-and-management/previewing/
[2]:	/docs/deployment-and-management/deploying-with-amazon-s3/
[3]:	/docs/deployment-and-management/deploying-your-site-with-ftp/
[4]:	/docs/deployment-and-management/deploying-with-github-pages/
