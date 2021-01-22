const { Message } = require("discord.js");

exports.run = async (client, message) => {

    message.channel.send(`${client.emotes.success} - Mesaj kutunu kontrol et!`);

    message.author.send(`Selam yakışıklı, beni sunucuna davet etmek istiyorsan tek yapman gereken linke tıklamak. https://bit.ly/3qkuz44`);

};