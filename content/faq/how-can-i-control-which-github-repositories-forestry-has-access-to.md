+++
date = "2016-07-20T03:30:00+00:00"
description = ""
draft = true
tags = []
title = "How can I control which Github repositories forestry has access to?"

+++
Many users have restrictions on what repositories they can expose to forestry. While the Github API does not allow fine grain control over which repositories forestry get's acsess to, there is a solution. The solution involves creating a "machine user" (really just a new github account) and give it acess to only the repositories you wish to expose to forestry.

You can get more imformation on how to do this by reading [Githubs official guide](https://developer.github.com/guides/managing-deploy-keys/#machine-users) on how to do this.

Once you've completed this, simply use this machine account with forestry.