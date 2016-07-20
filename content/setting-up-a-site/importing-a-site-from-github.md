+++
Categories = []
date = "2016-06-09T17:21:00+00:00"
description = "Forestry and GitHub are a great pair. Forestry let's you edit your content, and GitHub will keep a history of all your changes, as well as keep everything synced up if you make changes outside of Forestry, such as changing the theme of a site."
draft = false
tags = []
title = "Importing a site from Github"
[menu.setting_up_a_site]
weight = 2

+++
If you are new to git and GitHub you can get started [here](https://help.github.com/articles/set-up-git/), and follow an interactive tutorial [here](https://try.github.io/levels/1/challenges/1). It is very easy to learn the basics, and over time you will learn more of the advanced features that make git a powerful tool.

To import a site from GitHub, you jut need to click on the GitHub button when you're setting up a new site, and select the repository and branch you want to import. You'll also be given a dialog asking you to sign in to GitHub and give Forestry read and write access to your repositores, as well as the ability add webhooks. We need the read write premision to pull sites from GitHub, as well as push any changes back to GitHub. The webhooks are needed in case you decide to make changes to your site locally (such as changing the theme) and then push to GitHub. Forestry will use the webhook to pull in any changes pushed to GitHub to keep everything in sync.

![](/docs/assets/images/Screen Shot 2016-06-09 at 1.40.48 PM.png)
![](/docs/assets/images/Screen Shot 2016-06-09 at 2.16.01 PM.png)

### GitHub Organizations
If you're trying to connect to a repository from your GitHub organization, ensure that you have enabled [3rd-party access](https://help.github.com/articles/enabling-third-party-application-restrictions-for-your-organization/). 

Forestry also alows you to host your sites for free on GitHub, with [Github pages](https://pages.github.com/). This is a great workflow for those who are already using Github, and best of all it's free! We have a doc [here](/docs/deployment-and-hosting/hosting-with-github-pages/) you can use to get started.