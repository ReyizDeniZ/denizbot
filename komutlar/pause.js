exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Çalan bir müzik yok!`);

    client.player.pause(message);

    message.channel.send(`${client.emotes.success} - Şarkı ${client.player.getQueue(message).playing.title} **durduruldu** !`);

};
