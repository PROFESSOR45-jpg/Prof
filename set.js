// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*© PROFESSOR *"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ  PROFESSOR*"; // Input Yours custom...(Maintain font for Flow)
global.myDb = "https://giftedmd.giftedtech.web.id"; // DO NOT Change this...
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";

module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~H4sIAAAAAAAAA5VU246jOBD9F792NIEkXKWWFgg0kPsdstoHBww4AUyMCZBR//uKdPf0SLM728uTKcypc6pO1XeQE1yiCWqB+h0UFN8gQ92RtQUCKtCrKEIU9EAIGQQqqKatsA+koz0PpUQgeX7JFTjfOWktmbd6bYoTf3jI9oZu7Z7Baw8U1SnFwW8Ar8Waz2XLHl/91nPpU3qTGiE6jNecX/R9li012vg4tkjTAXaIEFOcx2aRoAxRmE5Qu4SYfo2+ORvHy9h05mh1Kto9hZJfur4pn6S8VHbYnyN3oFvicpubX6N/2cQnoSGadWmMeWRaSTWdJAPqsqq9TAtPs1Fkc/7txWnNN/oljnMUOiHKGWbtl+uONXSgWXnEgqsNi2yQjc6CIio7aWmuCr5kHjTFya0/pJf4a8RDwcoGSCZPXEoNf75xypqLvEbCSr4t94am02DMfO/QNPXPxJf0wyuX/1P3J23siOdD69sD3bE2y+naW1euuT3JiX0/mlf9HPTlFaqP2RfpV4PF5m7UGr2sjt660KdrMVmdRmW+v5SpfUqdp/uwmi94Dzuf9CGr6O9Ynq53HlnWYajsGOl749rH0n3vN+6+7af3KtG4s7LJVnsnhC7vWoL0gs/majw5jP3Edcsl0jI6X7jtDMocni0k8cS3Sfz8UHRBrRMClX/tAYpiXDIKGSb5I8bJPQDD2wYFFLFHecG1De9nAV8plgJy3mJZVwz76pcev0x5qd8MfBp6pNp4hfkMeqCgJEBliUIbl4zQdobKEsaoBOqfj051oinKCEMuDoEKBsKI5weiICu8+Ef5rU4gK2FRfMsRAz0QUZLNEFAZrVAPPH7gRJmzBN6UNGOsj0xtKOuaORJkRVdMnRsZncTsLekWZ6hkMCuAykuCIEpDRRq+/tUDOWrYm3861UO+ByJMS7bLqyIlMPww18dHGASkytmmzQOjOyAKVO4zjBjDeVx2yqoc0iDBN2R0OoAawbREPwqNKAo/tLwvD4OEXf+5rWxLK8kFHfcO6JfaqAr/a3nSxzWB54bSSB4MpJEi893FLv76g2CHFyIGcVoCFRiLKGnnM9tcnK9psHt50WaxZsQa+BT0YdA3A1TKInONRbxbbC/Lq8vtsiRb8m1sB3G817YaW9abA7WHxnn3/A8gQAWluzKWxmKt3zW7CW/Qt6B8ZDDJ97QmVzj19aHf+mN9cZdWs0nqjzJb6MOo2EwbGttHPLrvnq6aNukrQXQiL95RRrWxeu6yheiGA/Rzsr4Q61FayAIpWFGnYjpoooxdB0+1crz4myOzSb6YLFyYP80OjI05JZGH+b0NLxeR02K6nbjT/cCeZEQJhJF3XXpSkGhvo/MY3fR9ZeJ3U+PHa4TRYwPlsGvgf7fujXjnMO619xPG+077l72gn27bAq/OxBpfhLGIQ8slx7MSEH3oONbKrKdb2UyvjVITHrx2Vi9SyCJCM6ACmIeU4BD0ACVVZ1knj8hvkhm642jvSyOFJdM+x+AfJkuU324tKSlsWCZABfxklNijztOtVhQbBtnHVAGteyZUBK9/A7SuTOf4BwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254783601710", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || true, // make true to use antidelete 
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💞,🥼,🔥", //Input Yours Custom...Can be One Emoji or Multiple Emojis
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✨🫀!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "254112658916", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || " PROFESSOR", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || " PROFESSOR", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💜", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || " PROFESSOR", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/rin5a8.jpeg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Make the heart that never hurts",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "null", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
