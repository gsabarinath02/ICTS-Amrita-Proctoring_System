#!/bin/bash

API_KEY="AmritaShare_default_secret"
AmritaShare_URL="https://sfu.AmritaShare.com/api/v1/meeting"
# AmritaShare_URL="http://localhost:3010/api/v1/join"

curl $AmritaShare_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST