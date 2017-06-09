---
date: 2013-07-24
description: ""
draft: "true"
related: []
tags: ""
title: "Templating"
---
Jekyll allows users to build their HTML templates using the template language *Liquid* built and used by the popular eCommerce application [Shopify]().

## Liquid
Liquid is best described as a safe, customer-facing template language for flexible web apps.

An example of Liquid:
	<html>
	<head>
	    <title>{{ title }}</title>
	</head>
	<body>
	    <div id="content">
	        <p>
	            This is a long page content
	            These lines are all part of the parent p
	
	            <a href="/">Go To Main Page</a>
	        </p>
	    </div>
	</body>
	</html>

---
Reference:

