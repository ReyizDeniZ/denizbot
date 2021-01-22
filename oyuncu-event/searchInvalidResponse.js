module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - Şu sayılar arasından bir şey seçmelisin : **1** ve **${tracks.length}** !`);

};