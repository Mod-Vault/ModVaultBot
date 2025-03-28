const { BitField, GatewayIntentBits } = require("discord.js");
const { Client } = require("discord.js");
require("dotenv").config();

const bot = new Client({intents: [GatewayIntentBits.Guilds]});

bot.on("ready", () => {
    console.log("Bot is ready!");
    });

bot.login(process.env.TOKEN); 