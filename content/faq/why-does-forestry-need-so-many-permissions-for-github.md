---
date: 2016-07-21T05:50:00Z
description: ""
draft: "true"
tags: ""
title: "Why does Forestry need so many permissions for GitHub?"

---
Forestry needs to be able to have read and write permissions to your repositories in order to read content into the CMS for you to edit, and write your changes back out. We currently have no way of controlling which repositories you give us access to, since the GitHub API follows an all or nothing approach to permissions. There is, however, a solution that our users may implement if they have specific requirements that don't allow them to give full read write access. You can read about it [here][1].

**NOTE**: *Forestry will not read or write to any repository you do not explicitly tell it to.*

Forestry also needs permission to add webhooks to GitHub. This is required so Forestry can pull any changes made to the repository (such as a theme change). Whenever someone pushes to the repository from a source other than Forestry, GitHub will fire off the webhook, and Forestry will pull in the changes that were made.

[1]:	/docs/faq/how-can-i-control-which-github-repositories-forestry-has-access-to/