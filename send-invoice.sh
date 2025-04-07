#!/bin/zsh

API_KEY="furhop-2sasqo-qabpAd"
API_URL="https://relay.superlearn.ing/send-invoice"

curl -X POST $API_URL \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "shlee.super@gmail.com",
    "subject": "Invoice Test",
    "html": "<h1>Invoice Here</h1><p>This is your invoice.</p>"
  }'
