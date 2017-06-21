+++
Categories = []
date = "2017-06-20T20:03:09+00:00"
description = ""
draft = true
tags = []
title = "Environments"

+++


They are three unique developer environments when working with a Hugo site in Forestry:

* **Local environment** this is your local development environment on your own machine. See [Local Development](https://app.forestry.io/docs/developing-with-hugo/local-development) for more info.

* **Staging environment** this is the environment Forestry creates when we generate a preview for you. See [Previewing](/docs/deployment-and-management/previewing) for more info.

* **Production environment** this is the environment Forestry publishes your site to. See [Setting Up Deployment](/docs/deployment-and-management/setting-up-deployment) for more info.

In order to make development easier, Forestry sets an environment variable based on the environment you’re in.

This allows you to set up conditional code in your layouts in order to handle paths, content, or functionality dependant on a specific environment.

This variable is accessible in your templates as `{{ jekyll.environment }}`.

The values are:

```
Local environment: "development"
Staging environment: "staging"
Production environment: "production"

```