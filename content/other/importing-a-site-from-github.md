---
Categories: []
date: 2016-06-09 17:21:00 +0000
description: Forestry and GitHub are a great pair. Forestry let's you edit your content,
  and GitHub will keep a history of all your changes, as well as keep everything synced
  up if you make changes outside of Forestry, such as changing the theme of a site.
tags: []
title: Importing a site from GitHub
draft: true

---
If you are new to Git and GitHub you can get started [here](https://help.github.com/articles/set-up-git/), and follow an interactive tutorial [here](https://try.github.io/levels/1/challenges/1). It is very easy to learn the basics, and over time you will learn more of the advanced features that make Git a powerful tool.

To import a site from GitHub, you just need to click on the GitHub button when you're setting up a new site, and select the repository and branch you want to import. You'll also be given a dialog asking you to sign in to GitHub and give Forestry read and write access to your repositories, as well as the ability to add webhooks. We need the read/write permission to pull sites from GitHub, as well as push any changes back to GitHub. The webhooks are needed in case you decide to make changes to your site locally (such as changing the theme) and then push to GitHub. Forestry will use the webhook to pull in any changes pushed to GitHub to keep everything in sync.

![](/docs/assets/images/Screen Shot 2016-06-09 at 1.40.48 PM.png)
![](/docs/assets/images/Screen Shot 2016-06-09 at 2.16.01 PM.png)
