+++
Categories = ["Github"]
date = "2016-06-10T15:15:00Z"
description = "Many users already have their own pipelines setup that watch their repositories for changes, and deploy their site for them. Forestry will allow you to keep this setup if you choose. You are free to connect Forestry to Github and Bitbucket without setting up hosting."
tags = []
title = "Using Github without hosting"

+++
In order to set Forestry up without hosting, simply follow the normal setup process, but when selecting the host, don't select one.

![](/docs/assets/images/Screen Shot 2016-06-10 at 12.18.35 PM.png)

Now forestry will commit changes back to your git provider, but will not build and deploy the site. This will allow you to maintain an existing pipeline if you so choose.