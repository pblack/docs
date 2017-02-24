+++
Categories = []
date = "2017-02-23T21:23:33+00:00"
description = "Communicate with 3rd party applications"
draft = true
tags = []
title = "Webhooks"
[menu.setting_up_a_site]
weight = 11

+++


Webhooks are used to inform other applications that something just happened inside Forestry.io.

<img src="/docs/forestryio/images/forestry-io-webhook.png" alt="/docs/forestryio/images/forestry-io-webhook.png" class="">
<p class="">Forestry can send a webhook for two types of events:</p>
<ul class=""><li class="">When your site has been published</li><li class="">When your site has been synced (imported)</li></ul>

To set up a webhook, specify the URL that you wish to send to from the settings page:

<img src="/docs/forestryio/images/webhook-settings.png" alt="/docs/forestryio/images/webhook-settings.png">
<p class="">Now, Forestry will make a post to your URL with the following JSON data:<br><br><code>{"event":"post_publish", "success":true,"error":null}</code>​<br></p>

If there's an error, the `success` parameter will be set to false and the `error` parameter will be set to a string with the error type.

To give you an example, t
<span style="letter-spacing: 0.01em;">he&nbsp;`post_publish` webhook can be used to trigger cache invalidation or a custom build process.</span>