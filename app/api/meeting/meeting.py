# pip3 install requests
# pip3 install requests
import requests
import json

API_KEY = "AmritaShare_default_secret"
AmritaShare_URL = "https://sfu.AmritaShare.com/api/v1/meeting"
# AmritaShare_URL = "http://localhost:3010/api/v1/join"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

response = requests.post(
    AmritaShare_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
