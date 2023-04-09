<?php

$API_KEY = "AmritaShare_default_secret";
$AmritaShare_URL = "https://sfu.AmritaShare.com/api/v1/meeting";
// $AmritaShare_URL = "http://localhost:3010/api/v1/join";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $AmritaShare_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);

$headers = [
    'authorization:' . $API_KEY,
    'Content-Type: application/json'
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

echo "Status code: $httpcode \n";
$data = json_decode($response);
echo "meeting: ", $data->{'meeting'}, "\n";
