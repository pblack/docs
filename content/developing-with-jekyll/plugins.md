---
date: 2013-07-24
description: ""
draft: "true"
related: []
tags: ""
title: "Jekyll Plugins"
---
Jekyll allows you to add Gem-based plugins using your `.Gemfile`. This allows you to add things like [CoffeeScript][1] preprocessing.

## Installing Plugins
Forestry supports all third-party Jekyll plugins, and installs them in the same manner they are installed in your [local environment][2].

Installation generally has three steps:

1. Add the plugin to your `.Gemfile`. If you do not have a `.Gemfile`, you must create one in your project root.  

		source 'https://rubygems.org'
		gem 'jekyll'
		group :jekyll_plugins do
		  gem 'jekyll-menus'
		end

2. You must also add the plugin to the `gems` array in your Jekyll `_config.yml`.  

		gems:
		- jekyll-menus

3. Install the plugin and run Jekyll by running the following commands:  

		$ bundle install
		$ bundle exec jekyll serve

**Note:** depending on the plugin, additional configuration may be required. Please read each plugin’s documentation carefully.

---
Resources:
- [https://jekyllrb.com/docs/plugins/][3]
- [http://bundler.io/v1.13/gemfile.html][4]


[1]:	%20
[2]:	.
[3]:	https://jekyllrb.com/docs/plugins/
[4]:	http://bundler.io/v1.13/gemfile.html