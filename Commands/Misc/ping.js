const { PermissionFlagsBits, ApplicationCommandType, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping cmd",
    default_member_permissions: PermissionFlagsBits.SendMessages,
    options: [],
    perm: PermissionFlagsBits.SendMessages,
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     * @param {*} extras 
     */
    async run(interaction, client, extras) {
        interaction.reply(`🏓 Pong ${client.ws.ping}ms 🏓`);
    }
}