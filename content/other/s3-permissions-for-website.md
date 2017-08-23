+++
categories = ["Hosting"]
date = "2016-05-24T13:43:00Z"
description = "If you are hosting your website on S3, ensure you set up a bucket policy that will allow public access for all files. "
draft = true
tags = ["s3", "hosting"]
title = "S3 Permissions for Website"

+++
More info here: [http://docs.aws.amazon.com/AmazonS3...](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteAccessPermissionsReqd.html)

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
Be sure to replace **example-bucket** with your bucket name :)
