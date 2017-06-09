---
date: 2013-07-24
description: ""
draft: "true"
related: []
tags: ""
title: "Environments"
---
They are three unique developer environments when working with a Jekyll site in Forestry:

* **Local environment** this is your local development environment on your own machine. See [Local Development][1] for more info.
* **Staging environment** this is the environment Forestry creates when we generate a preview for you. See [Previewing][2] for more info.
* **Production environment** this is the environment Forestry publishes your site to. See [Setting Up Deployment][3] for more info.

In order to make development easier, Forestry sets an environment variable based on the environment you’re in.

This allows you to set up conditional code in your layouts in order to handle paths, content, or functionality dependant on a specific environment.

This variable is accessible in your templates as `{{ jekyll.environment }}`.

The values are:
	Local environment: "development"
	Staging environment : "preview"
	Production environment: "production"

---
related =()
- [https://jekyllrb.com/docs/configuration/#build-command-options][4]

[1]:	%20
[2]:	%20
[3]:	%20
[4]:	https://jekyllrb.com/docs/configuration/#build-command-options