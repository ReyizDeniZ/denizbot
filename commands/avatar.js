const Discord = require('discord.js');

exports.run = (client, message, args) => {
    

let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.MessageEmbed()
  .setAuthor(mention.username, mention.avatarURL())
  .setColor(0x3)
  .setImage(mention.avatarURL())
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
  //.setDescription(`[Avatarın büyük halini göster!](${message.author.avatarURL})`);
  message.channel.send(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.MessageEmbed()
  .setAuthor(sender, message.author.avatarURL())
  .setColor(0x3)
  .setImage(message.author.avatarURL())
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
  //.setDescription(`[Avatarın büyük halini göster!](${message.author.avatarURL})`);
  //denizkun tarafından v12 ye uyarlanmıştır.
  message.channel.send(avatarEmbedYou);
  return;
}
message.reply("Bi hata oldu galiba?");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};