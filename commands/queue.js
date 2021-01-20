exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No songs currently playing !`);

    message.channel.send(`**Sıradakiler - ${message.guild.name} ${client.emotes.queue}**\nŞu anki şarkı : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (isteyen : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `ve **${queue.tracks.length - 5}** diğer şarkılar...` : `Oynatma listesindeki **${queue.tracks.length}** şarkı(lar)...`}`));

};
