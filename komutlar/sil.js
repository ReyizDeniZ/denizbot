const Discord = require('discord.js');
exports.run = function(client, message, args) {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanmak için izniniz yok!");
if (!args[0]) return message.channel.send(`Lütfen silinicek mesaj miktarını yazın.!`);
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${client.emotes.success} ${args[0]} adet mesajı sildim. `).then(msg => msg.delete(10000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','temizle','süpür'],
  permLevel: 2,
};
