const { BitField, GatewayIntentBits, ActivityType, Status, PresenceUpdateStatus, Collection } = require("discord.js");
const { Client } = require("discord.js");
const { load } = require("./Handlers/command");

require("dotenv").config();

const bot = new Client({intents: [GatewayIntentBits.Guilds]});
bot.commands = new Collection();
bot.on("ready", () => {
    console.log("Bot is ready!");
    bot.user.setActivity({name: "For Mods", type: ActivityType.Watching});
    bot.user.setStatus(PresenceUpdateStatus.DoNotDisturb);
    load(bot);
    });


    bot.on("interactionCreate", async (interaction) => {
        if (!interaction.isCommand()) return;
        const { commandName } = interaction;

        let command = bot.commands.get(interaction.commandName);
        var commands = bot.application.commands;

        if (!command) {
            bot.application.commands.delete(interaction.commandId);
                  interaction.reply("Command no longer here!")
            return;
          }
    
          
          let extras = {
           
          };
    
        
     
          command.run(interaction, bot, extras);
      
    }
);

bot.login(process.env.TOKEN); 