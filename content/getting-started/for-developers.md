---
date: '2013-07-24T00:00:00Z'
description: Introduction to Forestry for Developers
related:
- title: More on Backups
  url: "/docs/deployment-and-management/backups"
- title: More on Deployment
  url: "/docs/deployment-and-management/setting-up-deployment"
tags: ''
title: Forestry for Developers
menu:
  getting-started:
    weight: 3
draft: true

---
Forestry allows developers to build static sites using the technologies and tools they prefer, while still generating a fully-functioning CMS for their team.

Developers are able to set up whatever build process works for them (npm, gulp, grunt, Webpack, Paver, etc) to handle tasks like minifying images, processing JS and CSS, modifying files, and executing their static site generator of choice.

Static sites give the developers the benefits of not having to manage a complex server environment, as they build static HTML files and assets, and provide a fast, efficient, and performant site.

## Forestry

## Templating
Static sites work by passing a content file (.md, .yaml, etc) through an .html template, and return a final .html page with the merged in content.

Depending on the static site you use, different template languages are available.

## Deployment
Forestry will build an deploy your static site to a remote location of your choice, including GitHub pages, Amazon S3, GitLab, or to a remote server using FTP/SFTP or SSH.

We can also automatically build and deploy your site when changes are pushed to your source repository.

## Backups
Due to Forestry being a Git-based CMS, backups are free. Your commit history serves as your backups, and you can roll back a single file or you whole repository at a moments notice.

## API
A public API is not currently available. [Contact us][1] for information about the private API.

[1]:	mailto:contact@forestry.io
