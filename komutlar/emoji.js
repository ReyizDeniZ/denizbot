const Discord = require('discord.js');

exports.run = function(client, message, args) {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "**Yönetici**" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let [ad, link] = args.join(" ").split(" / ");
  if (!ad) return message.channel.send(`Bir isim yazmalısın.`)
  if (!link) return message.channel.send(`Bir link yazmalısın.`)
  
  guild.emojis.create(link, ad)
    .then(emoji => message.channel.send(`${emoji.name} adında emoji oluşturuldu. (${emoji})`))
    .catch(console.error);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-ekle','emojiekle','emoji-yükle'],
  permLevel: 3
};