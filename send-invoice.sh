#!/bin/bash

# 사용법 안내
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <API_BASE_URL>"
  echo "Example: $0 http://localhost"
  echo "         $0 https://smtp.superlearn.ing"
  exit 1
fi

API_URL="$1/send-invoice"

curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -H "x-api-key: furhop-2sasqo-qabpAd" \
  -d '{
    "to": "shlee@superlearn.ing",
    "subject": "테스트 청구서",
    "html": "<b>10,000원 청구되었습니다.</b>"
  }'

