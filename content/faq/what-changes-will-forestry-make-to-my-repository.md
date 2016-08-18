+++
date = "2016-07-18T15:55:00+00:00"
description = ""
draft = false
tags = ["git", "github", "changes", "repository", "github pages"]
title = "What changes will Forestry make to my repository?"

+++
We aim to make as few unexpected changes as possible to your code but sometimes it is unavoidable.
We make sure to only update the files that you have changed, but within that file there may be some changes that you weren't expecting.

## Frontmatter
Forestry will remove comments and other formatting from frontmatter. Your frontmatter fields will also get reordered on occasion. This is just so we can show you your frontmatter in an expected order in Forestry.

## Newlines
New lines will be normalized so that all line endings are the same. This can make it look like your content was changed when all you did was edit your frontmatter.

## Data files
As with frontmatter, comments and other formatting will be removed from data files. Fields may also be reordered for better presentation in Forestry.

## Config files
If you are using Jekyll, your config file will not be changed.  
If you are using Hugo, your config file will be changed if you update the Site Params chunk. Site Params are the params that are stored in your config file. It will also be updated when you edit menus.  
Once again, in Hugo, comments and other formatting will be removed from your config file and values may be reordered.

## Menus
Currently on Hugo supports menus. When you update menus all files that use a menu will be updated and are subject to the changes mentioned regarding frontmatter and newlines.