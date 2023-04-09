# pip3 install requests
import requests
import json

API_KEY = "AmritaShare_default_secret"
AmritaShare_URL = "https://sfu.AmritaShare.com/api/v1/join"
# AmritaShare_URL = "http://localhost:3010/api/v1/join"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

data = {
    "room": "test",
    "password": "false",
    "name": "AmritaShare",
    "audio": "true",
    "video": "true",
    "screen": "true",
    "notify": "true",
}

response = requests.post(
    AmritaShare_URL,
    headers=headers,
    json=data,
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("join:", data["join"])
