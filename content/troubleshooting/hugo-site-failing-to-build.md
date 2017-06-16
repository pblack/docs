+++
Categories = ""
date = "2017-03-04T06:47:49Z"
description = ""
draft = true
tags = ""
title = "Hugo site failing to build"
[menu.troubleshooting]
weight = 8

+++
There are several reason your Hugo site may be failing to build on Forestry. Here are a few of the most common ones and the reasons.

### You are using deprecated features

When Hugo deprecates a feature, you will be able to use it for the next two versions but it will give you a warning or an error depending on when it will be removed. For example, a feature deprecated in v0.17 will be available to be used in v0.17 and v0.18 and removed in 0.19\. In v0.17 it will give you a WARNING and your site will build just fine. In 0.18 it will give you an ERROR and cause the build to return an error code. Forestry respects the error codes and will tell you that your site failed to build. If you try this locally you will notice that you site still builds even though there was an error. This is due to Hugo not respecting it's own error codes.
