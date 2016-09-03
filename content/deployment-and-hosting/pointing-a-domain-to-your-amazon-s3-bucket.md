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
## Setting up a domain with Route 53
* Go to Amazon's [Rote 53](https://console.aws.amazon.com/route53/)
* Click on **Hosted Zones** then **Create Hosted Zone**.  Your domain name should be the same as your bucket name (I don't think this is manditory, but it just keeps things simple).
![](/docs/forestryio/images/create-hosted-zone-1.png)
* Route 53 will generate name servers. You need copy these over to your domain registrar (where you purchased your domain: Godaddy, Name.com, etc). Here I'm using Name.com
![](/docs/forestryio/images/name-servers.png)
![](/docs/forestryio/images/name-servers-registrar.png)
* When you copy the name severs over, be sure to **not include** the last dot-character
* Now, go back to Route 53 and create an A-record by clicking **Create Record Set** then choose **Alias** and select the appropriate bucket after they load (takes a few seconds).  
![](/docs/forestryio/images/a-record.png)

## Redirect your WWW subdomain to your bucket
* * If you want your *www* subdomain to redirect to your bucket, add a new records set for that too. Click **Create Record Set** and add *www* to your domain, select **Alias** and type your bucket name with a dot at the end. 

![](/docs/forestryio/images/www-subdomain.png)