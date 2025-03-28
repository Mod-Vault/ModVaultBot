const { Client } = require("discord.js");
const { readdirSync } = require("fs");
const { log } = require("./logger");
const { HelperClient } = require("discord-helper.js");

/**
 * 
 * @param {Client} client 
 */
exports.load = (client) => {
    readdirSync("./Commands/").forEach(dir => {
        const command2 = readdirSync(`./Commands/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of command2) {
            let pull = require(`../Commands/${dir}/${file}`);
            
            let {
                name,
                description,
                options,
                default_member_permissions,
                type
              } = pull;
            if (pull.name) {
                client.commands.set(pull.name, pull);
               new HelperClient(client).GlobalcommandRegisterAsync({name, description, options, permission: default_member_permissions, type })
                log.infoAsync(`Loaded command ${pull.name} (${file})`)
            } else {
                log.errorAsync(`Error loading command ${file}`)
              
                continue;
            }
        }

    });

    
}