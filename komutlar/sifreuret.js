const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message) => {
              if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
     message.channel.send(
            randomstring.generate({
            length: 12,
            charset: 'alphanumeric'
}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre'],
  permLevel: 0
};