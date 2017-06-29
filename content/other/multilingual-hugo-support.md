+++
Categories = []
date = "2017-06-22T12:10:14Z"
description = ""
draft = true
related = []
tags = []
title = "Multilingual Hugo Support"

+++
There are two ways to handle multilingual content in Hugo.

1) Separate your content into different directories based on language and create a different config file for each language.   With this method you're required to build each language separately. Running **hugo --config="config_en.toml"** would build the english version of your site, outputted to a /en/ directory (path is configurable)

This method could work with Forestry, but since we only run config.toml when building your site it would require you to import each language as a different project into Forestry and ensuring each config file were named config.toml (instead of config_en.toml). Not ideal, but doable.

2) The second method (preferred) only requires a single config file and also requires you to name each content file based on the language. So you could have home.en.md, home.jp.md, home.fr.md, etc. You can also specify a default language. For example, if your default language is set to English, you would have home.md and home.jp.md, home.fr.md, etc.  This method also outputs the site into different language directories (path is configurable).

See here: https://gohugo.io/content/multilingual#multilingual-themes-support

Forestry works better with the second method since we can only run config.toml and don't support running language-spefic config files. Also, the Hugo documentation for the second method was last updated last month, whereas, the documentation for the first method was last updated in Oct 2016.  One might assume the community will better support for the second method.

One caveat: currently, if you have two pages that share the same title but have different language settings, you might not be able to distinguish between them when looking at a list of pages in Forestry.  This isn't a large problem since you could click into a page and see it's language. Eventually, we will support switching between languages from an individual page.