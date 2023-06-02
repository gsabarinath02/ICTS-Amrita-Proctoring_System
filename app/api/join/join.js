"use strict";

const fetch = require("node-fetch");

const API_KEY = "amrita_share_default_secret";
const amrita_share_url = "https://sfu.amrita_share.com/api/v1/join";
// const amrita_share_url = 'http://localhost:3010/api/v1/join';

function getResponse() {
    return fetch(amrita_share_url, {
        method: "POST",
        headers: {
            authorization: API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            room: "test",
            password: false,
            name: "amrita-share",
            audio: true,
            video: true,
            screen: true,
            notify: true,
        }),
    });
}

getResponse().then(async (res) => {
    console.log("Status code:", res.status);
    const data = await res.json();
    console.log("join:", data.join);
});
