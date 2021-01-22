module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `${query} hakkında bulabildiğim her şey burada` },
            footer: { text: 'denizkun / denizbot.ml' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};