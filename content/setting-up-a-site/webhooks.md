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

![/docs/forestryio/images/webhook-forestry-1.png](/docs/forestryio/images/webhook-forestry-1.png)

Forestry will send webhooks for the following events:

*   Site has been published
*   Site has been synced (re-imported)

## Setting up webhooks

From your settings page, specify the URL that you want Forestry to post to.

![/docs/forestryio/images/webhook-settings.png](/docs/forestryio/images/webhook-settings.png)

## Webhook format

Forestry will make a post to your URL with the following JSON data:

`{"event":"post_publish", "success":true,"error":null}`​  

If there's an error, the `success` parameter will be set to false and the `error` parameter will be set to a string with the error type.

## What can you do with a webhook?

For example, you could use the <span style="letter-spacing: 0.01em;"> `post_publish` webhook to trigger cache invalidation or a custom build process.</span>