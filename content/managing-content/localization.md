---
date: 2013-07-24 00:00:00 +0000
description: ''
related:
- title: Localization in Jekyll
  url: https://github.com/blackwinter/jekyll-localization
- title: Localization in Hugo
  url: https://gohugo.io/tutorials/create-a-multilingual-site/
- title: Localization with Google Translate
  url: https://davidwalsh.name/google-translate-api
tags: ''
title: Localization
menu:
  managing-content:
    weight: 7

---
Forestry does not currently support localization as a feature, but they are many community recommended methods of implementing localization.

We recommend creating multiple versions of your pages for each language. Put secondary languages in separate folders. For example:

```
.
├── index.md
├── /fr/index.md
└── /es/index.md
```

Which will become:

```
.
├── index.html
├── fr/
|   └── index.html
└── es/
    └── index.html
```

If you're looking to do more complex translation, see the recommended links below for more information.
