module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - ${query} hakkında hiçbir şey bulamadım!`);

};