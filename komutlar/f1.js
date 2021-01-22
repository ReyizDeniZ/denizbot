const { Message } = require("discord.js");

exports.run = async (client, message) => {

    message.channel.send(`${client.emotes.success} - Çok yakında!`);

};