+++
Categories = ["Github", "Hosting"]
date = "2016-06-09T17:35:00Z"
description = "GitHub offers free hosting for static sites. Forestry integrates with this service to get your site in front of users as quickly as possible."
draft = true
tags = ["github", "github pages", "hosting"]
title = "Hosting with GitHub Pages"

+++
To set up hosting with GitHub Pages you first need to created a branch on in your repository called "github-pages". You can do this very easily from the GitHub interface. Simply click the dropdown labeled "Branch", type "github-pages" in the text field, and click "Enter". This will create the branch for you.

![](/docs/assets/images/Screen Shot 2016-06-09 at 2.49.31 PM.png)

Now back over Forestry, after completing the initial setup of importing your site, you will be presented with a dialog to set up the hosting. To host with GitHub Pages, choose "github-pages" from the drop down, then select the repository and branch (It will almost always be "github-pages".) 

![](/docs/assets/images/Screen Shot 2016-06-09 at 2.57.12 PM.png)


![](/docs/assets/images/Screen Shot 2016-06-09 at 2.59.08 PM.png)

Now whenever you publish a change, Forestry will automatically update your live site, so your users will always see the latest version.

Since you're already using Git for hosting, why not also host your code there? If you're hosting with GitHub Pages, also using GitHub for your version control is a great workflow. We have a doc you can checkout [here](../../setting-up-a-site/importing-a-site-from-github/).
