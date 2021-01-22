const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

const player = new Player(client);
client.player = player;
client.config = require('./config/bot.json');
client.emotes = require('./config/emojis.json');
client.filters = require('./config/filters.json');
client.commands = new discord.Collection();

fs.readdir('./eventler/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./eventler/${file}`);
        let eventName = file.split(".")[0];
        console.log(`${eventName} yükleniyor.`);
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./oyuncu-event/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./oyuncu-event/${file}`);
        let eventName = file.split(".")[0];
        console.log(`${eventName} yükleniyor.`);
        client.player.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./komutlar/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./komutlar/${file}`);
        let commandName = file.split(".")[0];
        console.log(`${commandName} yükleniyor.`);
        client.commands.set(commandName, props);
    });
});

client.login(client.config.token_bot);
