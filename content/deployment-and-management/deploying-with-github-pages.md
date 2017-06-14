---
date: 2013-07-24
description: "How to deploy your static site using Forestry & GitHub Pages"
draft: "true"
related:
  - title: 'GitHub "Hello World" Guide'
    url: https://guides.github.com/activities/hello-world/
  - title: GitHub Pages Whitelist
    url: https://pages.github.com/versions/
tags: ""
title: "Deploying with GitHub Pages"
---
## Deploying with GitHub Pages

With Forestry, you can deploy your static site using a branch on a GitHub repository. This requires you set up your site using a Git repository.

If you don’t have a GitHub account with a repository set up, the best way to learn about GitHub is their [hello world developer’s guide][1].

## How GitHub Pages works
GitHub pages allows you to use a specific branch from your repository to host a static website.

You build and deploy your static site to that branch, and GitHub will serve it for you at `http://username.github.io/repository`.

If you’re using Jekyll, please read the *Using Jekyll with GitHub Pages section*, otherwise move on to *Setting Up Forestry with GitHub Pages*

## Using Jekyll with GitHub Pages
Jekyll is built by GitHub, and due to this you can use Jekyll with GitHub pages:

1. You can let GitHub built your Jekyll site from your `master` source branch \*
2. You can create another branch and manually build your site there.

\* The only caveat with option 1 is that you can only use GitHub support Jekyll plugins. [See the full list][2].

### Using method 1
If you are using method one, then all you need to do is enable GitHub pages for your master branch which contains the source files for your Jekyll site.

GitHub will build your Jekyll site each time a new commit happens and serve it automatically.

### Using method 2
If you are using non-whitelisted Jekyll plugins, or have additional steps to your build process that GitHub pages doesn’t support, proceed to the next section.

## Setting Up Forestry for GitHub Pages
To deploy a static site to GitHub pages using Forestry, you must first set up a new branch on your repo, which you can do by going to your repository in GitHub and using the branch management dropdown.

![](/docs/assets/images/branch-management.png)

Once your new branch is created, head to the `Settings` page in your site in Forestry, select the `Hosting` tab.

![](/docs/assets/images/forestry-gh-pages-settings.png)

From here you must select GitHub pages from the dropdown menu, choose your repository, and select the new branch. From here on, every time you publish a page we’ll build your site and deploy to this branch.

### Enable GitHub Pages
To have GitHub pages begin serving from your new branch, go to the `Settings` page of your repository and scroll down to the `GitHub Pages` section.
 
Then select the branch that contains your built static site and click on the Save button.

![](/docs/assets/images/github-gh-pages-settings.png)

Your site should now be served at `http://username.github.io/repository`.

[1]: https://guides.github.com/activities/hello-world/
[2]: https://pages.github.com/versions/
