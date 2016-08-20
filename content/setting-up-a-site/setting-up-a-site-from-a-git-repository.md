+++
Categories = []
date = "2016-08-18T17:56:00+00:00"
description = "To set up your Forestry CMS, you can [import your site from a Git repository](/docs/setting-up-a-site/importing-a-site-from-github/) (Github, Bitbucket or GitLab) or [upload a zip file of your site](/docs/setting-up-a-site/uploading-a-zip-file/).  "
draft = false
tags = []
title = "Setting up a site from a Git repository"
[menu.setting_up_a_site]
weight = 11

+++
<img src="/docs/forestryio/images/Screen Shot 2016-08-18 at 10.48.54 AM.png" class="large center">

## Importing from a repo
If you import your site from a repository, Forestry will commit all content changes back to that repo.  Finally, all of your content updates will be in version control! 

![](/docs/forestryio/images/github-content-version-control-jekyll-hugo.png)

### Deploying your site
If you want Forestry to build and deploy your site (Amazon S3, GitHub Pages, FTP, etc), you can also set up hosting. Input your hosting information and whene someone clicks "publish" in Forestry, their changes will be committed to your repo AND the site will be built and deployed to your host. 

### Working locally 
Just <code>git pull</code> and work on your site locally. Forestry will watch your repo for chnages