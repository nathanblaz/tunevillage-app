# The code in this file was written by working through App Academy instructor
# Juliet Shafto's provided instructions "Using S3 for image upload with Flask"
# Link: https://hackmd.io/@jpshafto/SyWY45KGu
#
# That resource also references James Robertson's "AWS S3 Demo with PERN Stack"
# instructions, which were used to configure this app's S3 bucket and user,
# using a custom security policy.
# Link: https://github.com/jamesurobertson/aws-s3-pern-demo

import boto3
import botocore
import os
import uuid

BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"http://{BUCKET_NAME}.s3.amazonaws.com/"
ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif",
                      "mp4", "mov", "wav", "mp3"}

s3 = boto3.client(
    "s3",
    aws_access_key_id=os.environ.get("S3_KEY"),
    aws_secret_access_key=os.environ.get("S3_SECRET")
)

s3rsrc = boto3.resource(
    "s3",
    aws_access_key_id=os.environ.get("S3_KEY"),
    aws_secret_access_key=os.environ.get("S3_SECRET")
)

# Filenames


def allowed_file(filename):
    print(filename)
    print("." in filename)
    return "." in filename and \
           filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def get_unique_filename(filename):
    ext = filename.rsplit(".", 1)[1].lower()
    unique_filename = uuid.uuid4().hex
    return f"{unique_filename}.{ext}"

# Upload Helper


def upload_file_to_s3(file, acl="public-read"):
    print("------now inside upload_file_to_s3 function")
    try:
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        # in case  our s3 upload fails
        print("errors", str(e))
        return {"errors": str(e)}

    return {"url": f"{S3_LOCATION}{file.filename}"}
