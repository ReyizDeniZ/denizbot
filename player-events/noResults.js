module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - ${query} bunun hakkında hiçbir şey bulamadım!`);

};