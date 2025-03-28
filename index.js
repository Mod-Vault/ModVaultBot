const { BitField, GatewayIntentBits, ActivityType, Status, PresenceUpdateStatus } = require("discord.js");
const { Client } = require("discord.js");
require("dotenv").config();

const bot = new Client({intents: [GatewayIntentBits.Guilds]});

bot.on("ready", () => {
    console.log("Bot is ready!");
    bot.user.setActivity({name: "For Mods", type: ActivityType.Watching});
    bot.user.setStatus(PresenceUpdateStatus.DoNotDisturb);
    });

bot.login(process.env.TOKEN); 