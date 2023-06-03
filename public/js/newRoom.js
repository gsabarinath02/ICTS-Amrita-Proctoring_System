"use strict";

let adjectives = [
    "enlightened",
    "divine",
    "sacred",
    "ethereal",
    "transcendent",
    "blissful",
    "radiant",
    "wise",
    "pure",
    "serene",
    "compassionate",
    "harmonious",
    "soulful",
    "transcendental",
    "mystical",
    "awakened",
    "mindful",
    "illuminated",
    "grateful",
    "peaceful",
    "loving",
    "spiritual",
    "holistic",
    "reverent",
    "balanced",
    "evolved",
    "intuitive",
    "blessed",
    "devoted",
    "ascendant",
    "meditative",
    "tranquil",
    "wholesome",
    "aligned",
    "seraphic",
    "graceful",
    "humble",
    "ethical",
    "discerning",
    "connected",
    "revered",
    "enlightening",
    "joyful",
    "contemplative",
    "present",
    "empathic",
    "conscious",
    "vibrant",
    "altruistic",
    "zen",
    "transpersonal",
    "sacred",
    "evolving",
    "equanimous",
    "inspired",
];

let nouns = [
    "sage",
    "soul",
    "guru",
    "lotus",
    "dove",
    "temple",
    "yogi",
    "moon",
    "sun",
    "peace",
    "unity",
    "blessing",
    "faith",
    "harmony",
    "serenity",
    "wisdom",
    "enlightenment",
    "journey",
    "meditation",
    "chant",
    "sacredness",
    "divinity",
    "karma",
    "mantra",
    "zen",
    "presence",
    "devotion",
    "kundalini",
    "bodhi",
    "nirvana",
    "satori",
    "consciousness",
    "truth",
    "grace",
    "awakening",
    "compassion",
    "surrender",
    "peacefulness",
    "holiness",
    "innerbeing",
    "saint",
    "angel",
    "divineessence",
    "prayer",
    "enlightenedone",
    "oneness",
    "divinelight",
    "eternity",
    "sacredspace",
    "divinepresence",
    "transcendence",
    "divinelove",
    "divineguidance",
    "illumination",
    "higherself",
    "divinewisdom",
    "divinepurpose",
    "spiritualpath",
    "divinetruth",
    "eternalsoul",
    "divineenergy",
    "divineconnection",
    "divineintervention",
    "soulmate",
    "divineknowledge",
    "divinegrace",
    "cosmicenergy",
    "akashicrecords",
    "universalconsciousness",
];


function getRandomNumber(length) {
    let result = "";
    let characters = "0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let noun = nouns[Math.floor(Math.random() * nouns.length)];
let num = getRandomNumber(5);
noun = noun.charAt(0).toUpperCase() + noun.substring(1);
adjective = adjective.charAt(0).toUpperCase() + adjective.substring(1);
document.getElementById("roomName").value = "";

// ####################################################
// TYPING EFFECT
// ####################################################

let i = 0;
let txt = num + adjective + noun;
let speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("roomName").value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
