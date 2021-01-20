module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} oynatma listesinden (**${playlist.items.length}** şarkı eklendi) !`);

};