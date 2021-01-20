exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Lütfen geçerli bir şey girin !`);

    const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

    if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Böyle bir filtre yok !`);

    const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

    const queueFilters = client.player.getQueue(message).filters
    const filtersUpdated = {};
    filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
    client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterRealName]) message.channel.send(`${client.emotes.music} - Bu müziğe filtre ekliyorum bu biraz zaman alabilir lütfen sabırlı ol.`);
    else message.channel.send(`${client.emotes.music} - Bu müzikteki filtreleri kaldırıyorum bu biraz zaman alabilir lütfen sabırlı ol.`);

};
