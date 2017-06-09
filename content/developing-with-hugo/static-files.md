---
date: 2013-07-24
description: ""
draft: "true"
related: []
tags: ""
title: "Static Files"
---
In Hugo, any files/folders found in the `static/` directory in the root of your project or the root of your site’s theme will be made available at the root of your built site.

For example:
	.
	├── static/
	|   └── image.jpg
	|   ├── css/
	|    |   └── main.css
	└── themes/
	 |   └── example-theme/
	 |    |   ├── static/
	 |    |   └── script.js

Will be built as:
	.
	├── image.jpg
	├── script.js
	├── css/
	 |   └── main.css

If you use any build tools like Gulp or Grunt with Jekyll, please read our [Asset Pipeline Doc]().

---
related =()
- [https://gohugo.io/themes/creation#static][2]

[2]:	https://gohugo.io/themes/creation#static