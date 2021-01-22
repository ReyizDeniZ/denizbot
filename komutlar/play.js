exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin!`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Lütfen şarkının adını belirtin!`);

    client.player.play(message, args.join(" "));

};
