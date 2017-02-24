+++
Categories = []
date = "2017-02-23T21:23:33Z"
description = "Communicate with 3rd party applications"
draft = true
tags = []
title = "Webhooks"
[menu.setting_up_a_site]
weight = 11

+++
Forestry.io uses 
<a href="https://sendgrid.com/blog/whats-webhook/">webhooks</a> to inform other applications that something just happened.
<img src="/docs/forestryio/images/webhook-forestry.png" alt="/docs/forestryio/images/webhook-forestry.png">
<p class=""><br></p>
<p class="">Forestry can send a webhook for two types of events:</p>
<ul class=""><li class="">When your site has been published</li><li class="">When your site has been synced (imported)</li></ul>

Set up a webhook by specifying the receiving URL from your settings page:
<img src="/docs/forestryio/images/webhook-settings.png" alt="/docs/forestryio/images/webhook-settings.png">
<p class="">Forestry will make a post to your URL with the following JSON data:<br><br><code>{"event":"post_publish", "success":true,"error":null}</code>​<br></p>

If there's an error, the `success` parameter will be set to false and the `error` parameter will be set to a string with the error type.## What would you use an webhook for?



For example, you could use the
<span style="letter-spacing: 0.01em;">&nbsp;<code>post_publish</code> webhook to trigger cache invalidation or a custom build process.</span>

<span style="letter-spacing: 0.01em;"><br></span>