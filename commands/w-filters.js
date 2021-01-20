exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Önce bir ses kanalına katılmalısın !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Çalan hiç müzik yok !`);

    const disabledEmoji = client.emotes.error;
    const enabledEmoji = client.emotes.success;

    const filtersStatuses = [[], []];

    Object.keys(client.filters).forEach((filterName) => {
        const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
        array.push(client.filters[filterName] + " : " + (client.player.getQueue(message).filters[filterName] ? enabledEmoji : disabledEmoji));
    });

    message.channel.send({
        embed: {
            color: 'ORANGE',
            footer: { text: 'Bu alan napim diyenlerin götünü siktiğim yerdir.' },
            fields: [
                { name: 'Filtreler', value: filtersStatuses[0].join('\n'), inline: true },
                { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
            ],
            timestamp: new Date(),
            description: `Tüm filtreleri listeler.\nKullanım: \`${client.config.prefix}filter\` (istediğin filtre).`,
        },
    });

};
