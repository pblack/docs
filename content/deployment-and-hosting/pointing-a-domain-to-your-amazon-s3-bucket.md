+++
Categories = []
date = "2016-09-03T16:02:00+00:00"
description = ""
draft = true
tags = []
title = "Pointing a domain to your Amazon S3 bucket "
[menu.deployment_and_hosting]
weight = 6

+++
* Go to Amazon's [Rote 53](https://console.aws.amazon.com/route53/)
* Click on **Hosted Zones** then **Create Hosted Zone**
* Use the new name servers at your domain registrar (Godaddy, Name.com, etc). Here I'm using Name.com
![](/docs/forestryio/images/name-servers.png)
* When you copy the name severs over, be sure to **not include** the last dot-character
![](/docs/forestryio/images/name.com-1.png)
* Create an A-record by clicking **Create Record Set** then choose
![](/docs/forestryio/images/a-record.png)
**Alias** and select your S3 bucket