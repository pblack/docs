+++
date = "2016-07-18T15:55:00+00:00"
description = ""
tags = ["git"]
title = "Why did Forestry change my code!?"
[menu.faq]
weight = 2

+++
As devs, we hate when people mess with our code.  So we try to do this as little as possible but sometimes it is unavoidable.

### Front matter
Forestry will remove comments and other formatting from front matter. Your front matter fields will also get reordered on occasion. This is just so we can show you your front matter in an expected order in Forestry.

### Newlines
New lines will be normalized so that all line endings are the same. This can make it look like your content was changed when all you did was edit your front matter.

### Data files
As with front matter, comments and other formatting will be removed from data files. Fields may also be reordered for better presentation in Forestry.

### Config files
If you are using Jekyll, your config file will not be changed.  
If you are using Hugo, your config file will be changed if you update the Site Params chunk. Site Params are the params that are stored in your config file. It will also be updated when you edit menus.  
Once again, in Hugo, comments and other formatting will be removed from your config file and values may be reordered.

### Menus
Currently on Hugo supports menus. When you update menus all files that use a menu will be updated and are subject to the changes mentioned regarding front matter and newlines.