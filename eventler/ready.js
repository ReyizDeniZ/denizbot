module.exports = async (client) => {

    console.log(`Bot ${client.guilds.cache.size} sunucu ve ${client.users.cache.size} kullanıcı için hazır!`);

    client.user.setActivity(`${client.config.durum}`, { url: 'https://twitch.tv/reyizdeniz', type: 'STREAMING' });

};
