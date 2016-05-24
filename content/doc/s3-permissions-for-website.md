+++
categories = ["Hosting"]
date = "2016-05-24T13:43:00+00:00"
description = "If you are hosting your website on S3, ensure you setup a bucket policy that will allow public access for all files. More info here: http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteAccessPermissionsReqd.html"
draft = false
tags = ["s3", "hosting"]
thumbnail = ""
title = "S3 Permissions for Website"

+++
```
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