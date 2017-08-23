+++
Categories = ""
date = "2017-03-07T12:32:13Z"
description = "Currently, Forestry.io does not support simultaneous, multi-user editing. "
draft = true
tags = ""
title = "Multiple Editors"
[old_menu.editing_content]
weight = 3

+++
When 2 people edit the same page, Forestry.io applies a "last in last out" rule.

## Example: two editors in Forestry

*   **Sarah** starts editing a page
*   **John** starts editing the same page
*   **Sarah** publishes her changes
*   **John** gets notified that **Sarah** has changed the page
*   **John** publishes anyway
*   **Sarah's** changes are lost
*   **John’s** changes are kept

## Example: one editor in Forestry and one developer

The same behaviour would apply if one person was not using Forestry but working locally using Git + text editor. 

*   **Sarah** starts editing a page in Forestry
*   **John** starts editing the same page locally with his text editor
*   **John** commits his changes
*   **Sarah** gets notified that **John** has changed the page
*   **Sarah** publishes anyway
*   **John's** changes are lost
*   **Sarah's** changes are kept
