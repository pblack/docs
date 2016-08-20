+++
Categories = []
date = "2016-07-19T04:28:00+00:00"
description = ""
draft = false
tags = []
title = "Setting up a site from a zip file"
[menu.setting_up_a_site]
weight = 5

+++
To set up your Forestry CMS, you can [import your site from a Git repository](/docs/setting-up-a-site/importing-a-site-from-github/) (Github, Bitbucket or GitLab) or [upload a zip file of your site](/docs/setting-up-a-site/uploading-a-zip-file/).  

<img src="/docs/forestryio/images/Screen Shot 2016-08-18 at 10.48.54 AM.png" class="large center">

## Importing from a zip

If you choose to upload a zip file, the maximum file size that we support is 250MB (note, if you import your site from a repo, there is no maximum file size).

### Deploying your site
If you set up your hosting credentials, all content changes through Forestry will be built and deployed to your host.

<img src="/docs/forestryio/images/download-backup-forestry.png" class="small right">
<hr>
### Working locally 
If you need to work on your site after some content editors have made some changes, you will need to download a backup from your Forestry dashboard. The backup will contain your entire Jekyll/Hugo project with all of the new content changes.  When you're done. Just  zip it up again and re-upload.