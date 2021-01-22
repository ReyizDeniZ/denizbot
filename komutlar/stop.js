exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Çalan bir müzik yok!`);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    message.channel.send(`${client.emotes.success} - Müzik **kapatıldı** !`);

};
