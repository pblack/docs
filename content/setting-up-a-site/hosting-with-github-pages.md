+++
Categories = ["Github", "Hosting"]
date = "2016-06-09T17:35:00+00:00"
description = "Github offers free hosting for static sites. Forestry integrates with this service to get your site in front of users as quickly as possible."
draft = false
tags = ["github", "github pages", "hosting"]
title = "Hosting with Github pages"
type = "doc"
[menu.setting_up_a_site]
weight = 3

+++
To setup hosting with Github Pages you first need to created a branch on in your repository called "github-paged". You can do this very easily from the github interface. Simlply click the dropdown labled branch, type "github-pages" in the text field, and click enter. This will create the branch for you.

![](/docs/assets/images/Screen Shot 2016-06-09 at 2.49.31 PM.png)

Now back over Forestry, after completing the initilal setup of importing you site you will be presented with a dialog to setup the hosting. To host with github-pages choose "github-pages" from the drop down, the select the repository and branch (will almost always be "github-pages"). 

![](/docs/assets/images/Screen Shot 2016-06-09 at 2.57.12 PM.png)


![](/docs/assets/images/Screen Shot 2016-06-09 at 2.59.08 PM.png)

Now whenever you publish a change, forestry will automatically update your live site, so your users will always see the latest version.

Since you're already using git for hosting, why not also host your code there? If you're hosting with github-pages, also using github for your version control is a great workflow. We have a doc you can checkout [here](../../setting-up-a-site/importing-a-site-from-github/).