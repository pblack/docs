+++
Categories = []
date = "2017-02-07T13:03:47-05:00"
description = "Git Submodules allow you to have a repo within your repo"
draft = true
tags = []
title = "Using a Git Submodule for Your Theme"
[menu.setting_up_a_site]
weight = 9

+++
If you have a repository for your Jekyll or Hugo project and you want use a different repository for your theme, you should set this up as a [Git Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

To add a theme as a Git Submodule, run the following command from the root of your project:

<pre class="hljs">git submodule add https://github.com/spf13/hyde.git themes/hyde</pre>

Be sure to add the correct **URL** to the repo to be added and the correct **path** to where you want this repo to live within your project.

![/docs/forestryio/images/submodules-1.png](/docs/forestryio/images/submodules-1.png)

Once added, you'll need to add and commit this from your parent repository. You should also notice a .gitsubmodules file in your parent repository.

![/docs/forestryio/images/git submodule.png](/docs/forestryio/images/git%20submodule.png)

Going forward, if you make a change to your child repository and commit it. You'll also need to commit from your parent repository if you want Forestry to pick up on that change.