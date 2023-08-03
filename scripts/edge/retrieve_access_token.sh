#!/bin/bash -xe


# CLIENT_ID=bd9ccd6c-af35-4995-a3e7-cf2f591396c1
CLIENT_SECRET=$PRODUCTION_EDGE_WEBSTORE_CLIENT_SECRET


curl \
-X POST \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "client_id=$CLIENT_ID" \
-d "scope=https://api.addons.microsoftedge.microsoft.com/.default" \
-d "client_secret=$CLIENT_SECRET" \
-d "grant_type=client_credentials" \
-v \
# https://login.microsoftonline.com/5c9eedce-81bc-42f3-8823-48ba6258b391/oauth2/v2.0/token
