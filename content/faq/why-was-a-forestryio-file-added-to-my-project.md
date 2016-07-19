+++
date = "2016-07-19T04:39:00+00:00"
description = ""
draft = true
tags = []
title = "Why was a .forestryio file added to my project?"

+++
Forestry will add a .forestryio file to the root of the project. This is serves as a flag to tell forestry that it is okay to publish to that location. Before publishing forestry checks for one of two things. The first being the presence of a .forestryio file, the other being the destination being empty. This is to prevent forestry from overwriting files in a location that was entered by mistake.
