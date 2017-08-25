+++
Categories = []
date = "2016-06-09T17:33:00Z"
description = "A short guide on setting up an S3 bucket to host your Jekyll or Hugo site"
draft = true
tags = []
title = "How to set up hosting on Amazon S3"
[old_menu.deployment]
weight = 4

+++
## Creating a Bucket

*   Log in to your Amazon AWS account and select S3 from the Console Home page.
*   Click "Create Bucket"

* * *

![](/docs/assets/images/Screen Shot 2016-06-09 at 3.00.27 PM.png)

* * *

*   Give your bucket a name, select a region, and click "Create". **Note**: For a website to work with S3, your bucket must be named _yourwebsite.com_.

## Setting bucket permissions

You will need to set the proper permissions for your bucket to work as a website.

*   Select your bucket from the list of buckets.
*   Choose "Properties" from the tabs in the top right corner (if it is not already selected)
*   Choose the "Static Website Hosting" section
*   Click "Enable website hosting" and set your Index Document and Error Document

* * *

![](/docs/assets/images/Screen Shot 2016-06-09 at 3.10.40 PM.png)

* * *

*   Click "Save" to save the changes
*   Choose the "Permissions" section
*   Click "Add bucket policy"

* * *

![](/docs/assets/images/Screen Shot 2016-06-09 at 3.10.55 PM.png)

* * *

*   Set your bucket policy and save your changes (note: replace _"example.com"_ with the name of your bucket).

```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::example.com/*"
		}
	]
}

```

## Creating an IAM User

Amazon AWS uses IAM users to control access to different services. You should setup an IAM user for Forestry that only has access to your website bucket.

*   Click [Identity & Access Management](https://console.aws.amazon.com/iam/) from the Console Home page
*   Click "Users" and then "Create New Users"
*   Give your new user a name and ensure that "Programmatic access" is checked
*   Click "Show User Security Credentials" and copy the _Access Key ID_ and _Secret Access Key_. Then click "Close" and "Close" again.

Note, you will need this Key and Secret when connecting Forestry to your S3 host. Keep it secret, keep it safe ;)

* * *

![](/docs/assets/images/Screen Shot 2016-06-09 at 4.05.16 PM.png)

* * *

*   You will be brought to a list of your users. Click on your newly created user.
*   Click on the "Permissions" tab and then on "Inline Policies"

* * *

![](/docs/assets/images/Screen Shot 2016-06-09 at 4.09.48 PM.png)

* * *

*   Click on "Click here" under "Inline Policies"

*   Choose "Custom Policy" and the click "Select"

*   Give the policy a name (ie. forestry-access) and add the following to the policy

*   (note: replace _"example.com"_ with the name of your bucket)

```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "s3:ListBucket",
                    "s3:GetBucketLocation"
                ],
                "Resource": "arn:aws:s3:::example.com"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "s3:PutObject",
                    "s3:GetObject",
                    "s3:DeleteObject"
                ],
                "Resource": "arn:aws:s3:::example.com/*"
            }
        ]
    }

```

Click "Apply Policy"
