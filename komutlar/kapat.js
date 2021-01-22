const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
    message.channel.send('Botun kapatılmasına onay veriyorsanız 30 saniye içinde evet yazın.')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
    message.channel.send(`Bot kapatılıyor...`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot kapatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
        message.channel.send('Kapatma işlemi iptal edildi.');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};