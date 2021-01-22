exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Çalan bir müzik yok!`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Bir sayı giriniz!`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`${client.emotes.error} - Hatalı sayı girdiniz şunu deneyin : (1 ve 100 arası) !`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Geçersiz sayı!`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`${client.emotes.success} - Şu anki ses seviyesi **${args.join(" ")}%** !`);

};
