"use strict";

const fetch = require("node-fetch");

const API_KEY = "Amrita-Proctor_default_secret";
const AmritaShare_URL = "https://sfu.Amrita-Proctor.com/api/v1/meeting";
// const AmritaShare_URL = 'http://localhost:3010/api/v1/join';

function getResponse() {
    return fetch(AmritaShare_URL, {
        method: "POST",
        headers: {
            authorization: API_KEY,
            "Content-Type": "application/json",
        },
    });
}

getResponse().then(async (res) => {
    console.log("Status code:", res.status);
    const data = await res.json();
    console.log("meeting:", data.meeting);
});
