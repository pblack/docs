+++
Categories = ""
date = "2017-02-23T21:23:33Z"
description = "Communicate with 3rd party applications"
tags = ""
title = "Webhooks"
[menu.setting_up_a_site]
weight = 11

+++
Forestry.io uses [webhooks](https://sendgrid.com/blog/whats-webhook/) to inform other applications that something just happened.

Forestry can send a webhook for two types of events:

*   When your site has been published
*   When your site has been synced (imported)

![/docs/forestryio/images/webhook-forestry-1.png](/docs/forestryio/images/webhook-forestry-1.png)

Set up a webhook by specifying the receiving URL from your settings page:

![/docs/forestryio/images/webhook-settings.png](/docs/forestryio/images/webhook-settings.png)

Forestry will make a post to your URL with the following JSON data:  

`{"event":"post_publish", "success":true,"error":null}`​  

If there's an error, the `success` parameter will be set to false and the `error` parameter will be set to a string with the error type.## What would you use an webhook for?

For example, you could use the <span style="letter-spacing: 0.01em;"> `post_publish` webhook to trigger cache invalidation or a custom build process.</span>

 <span style="letter-spacing: 0.01em;"></span>