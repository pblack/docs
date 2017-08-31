---
date: 2013-07-24 00:00:00 +0000
description: ''
tags: ''
title: Remote Admin
menu:
  deployment-and-management:
    weight: 4

---
Forestry allows you to add a Remote Administration page to your site, so that users can access and manage the site without leaving your domain.

This is great for large businesses or white-label solutions where you don’t want your users accessing the CMS through the Forestry website.

## Setting Up The Remote Admin

To set up the Remote Admin, go to the `Settings` page for your site, found under "Site" in the sidebar of your CMS.

Select the `General` tab, and find the `Project Paths` option. From here you provide the path you want users to go to in order to access the CMS under `ADMIN PATH`.

*We recommend using `/admin`.*

### Deploying the Remote Admin

Before you can deploy the Remote Admin, you must set up deployment via the `Hosting`<span style="font-size: 1rem;">​ tab in your site's&nbsp;</span>`Settings`<span style="font-size: 1rem;">​. See the <a href="/docs/deployment-and-management/setting-up-deployment">Setting Up Deployment</a> doc for more info.</span>

Once Hosting is enabled, you can deploy the Remote Admin to your site by clicking the `Deploy Admin`<span style="font-size: 1rem;">​ button.</span>

Then you can access the admin from your hosted site at the path your specified.