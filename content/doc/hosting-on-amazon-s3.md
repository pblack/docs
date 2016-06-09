+++
Categories = []
date = "2016-06-09T17:33:00+00:00"
description = ""
draft = false
tags = []
title = "Hosting on Amazon S3"

+++
If you wish to host your website with Amazon S3, select AWS S3 from the list of hosting options. You will need to enter your Bucket name, Access Key ID, and Secret Access Key.

## Creating a Bucket
- Log in to your Amazon AWS account and select S3 from the Console Home page. 
- Click "Create Bucket"

![](/docs/assets/images/Screen Shot 2016-06-09 at 3.00.27 PM.png)

- Give your bucket a name, select a region, and click "Create"

## Setting bucket permissions
You will need to set the proper permissions for your bucket to work as a website.

- Select your bucket from the list of buckets. 
- Choose "Properties" from the tabs in the top right corner (if it is not already selected)
- Choose the "Static Website Hosting" section
- Click "Enable website hosting" and set your Index Document and Error Document

![](/docs/assets/images/Screen Shot 2016-06-09 at 3.10.40 PM.png)

- Click "Save" to save the changes
- Choose the "Permissions" section
- Click "Add bucket policy"

![](/docs/assets/images/Screen Shot 2016-06-09 at 3.10.55 PM.png)

- Set your bucket policy and save your changes

```json
{
  "Version":"2012-10-17",
  "Statement":[{
	"Sid":"PublicReadGetObject",
        "Effect":"Allow",
	  "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::example-bucket/*"
      ]
    }
  ]
} 
```
