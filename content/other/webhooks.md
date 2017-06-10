+++
Categories = ""
date = "2017-02-23T21:23:33Z"
description = "Communicate with 3rd party applications"
tags = ""
title = "Webhooks"
[old_menu.setting_up_a_site]
weight = 11

+++
Forestry.io now supports [webhooks](https://sendgrid.com/blog/whats-webhook/) to inform other applications when certain events happen with your Forestry.io site. 

## Events that support webhooks

*   When your site is published
*   When your site is synced (Forestry watches your repo and syncs your site every time a commit is detected)

## Setting up webhooks

From your settings page, specify the URL that you want Forestry to post to.

![/docs/forestryio/images/webhook-settings.png](/docs/forestryio/images/webhook-settings.png)

## Webhook format

Forestry will make a post to your URL with the following JSON data:

`{"event":"post_publish", "success":true,"error":null}`​

If there is an error, the `success` parameter will be set to false and the `error` parameter will be set to a string with the error type.

## What can you do with a webhook?

*   Trigger cache invalidation every time someone publishes your site  

*   Trigger a custom build script when someone publishes your site
