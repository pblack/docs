+++
date = "2016-07-21T05:50:00+00:00"
description = ""
draft = true
tags = []
title = "Why does forestry need so many permissions for Github?"

+++
Forestry needs to be able to have read and write premissions to your repositories in order to read content into the CMS for you to edit, and write your changes back out. We currently have no way of controling which repositories you give us acess to, since the Github API follows an all or nothing apraoch to premissions. There is however a solution that our users may implement, if they have specific requirements that don't allow them to give full read write acess. You can read about it [here](/docs/faq/how-can-i-control-which-github-repositories-forestry-has-access-to/).

**NOTE**: *Forestry will not read or write to any repository you do not explicitly tell it to.*

Forestry also needs premission to add web hooks to Github. This is required so Forestry can pull any changes made to the repository (such as a theme change). Whenever someone pushes to the repository from a source other than Forestry, Github will fire off the webhook, and Forestry will pull in the changes that were made.