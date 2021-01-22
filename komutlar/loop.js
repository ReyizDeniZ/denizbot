exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Çalan bir müzik yok!`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`${client.emotes.success} - Tekrar modu **kapalı** !`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`${client.emotes.success} - Tekrar modu **açık** !`);
    };

};
