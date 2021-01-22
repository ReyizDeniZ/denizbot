const Discord = require("discord.js");

exports.run = async (client, msg) => {

const radio = {
    "number1": "http://20723.live.streamtheworld.com/NUMBER1FM_SC?type=.mp3",
    "powerturk": "http://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio?/;stream.nsv",
    "power": "http://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio?/;stream.nsv",
    "metrofm": "http://17703.live.streamtheworld.com/METRO_FM_SC?type=.mp3",
    "fenomen": "http://listen.radyofenomen.com/fenomen/128/icecast.audio?/;stream.nsv",
    "oyunfm": "http://37.247.98.8/stream/30/",
    "fenomenfm": "http://fenomenoriental.listenfenomen.com/fenomenoriental/128/icecast.audio",
    "deneme": "http://music.youtube.com/watch?v=h2U7t6Mzh90&list=RDAMVMh2U7t6Mzh90",
}
            if (!msg.member.voice.connection) {

                if (!msg.member.voice.channel) return msg.channel.send('❎ | Lütfen bir **odaya gir!**')

            }
            let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();

      if (!args) return msg.channel.send('❎ | Bir radyo seçin: **fenomenfm** | **powerturk** | **powerturk** | **metrofm** | **fenomen** | **oyunfm**')

        if(!radio[args]) return msg.channel.send('❎ | Lütfen yandaki radyolardan birini seç: **number1** | **powerturk** | **fenomenfm** | **metrofm** | **fenomen** | **oyunfm**')

    msg.member.voice.channel.join().then(connection => {

    require('http').get(radio[args], (res) => {

            connection.play(res);

     let embed = new Discord.MessageEmbed()
        .setAuthor("Radyo Çalınıyor", `https://images-ext-1.discordapp.net/external/0O8M-0Q93aKVqx6tonQInp6W7QRDjlLkH1E6mHMaCeM/%3Fv%3D1/https/cdn.discordapp.com/emojis/475822981277286400.gif`)
        .setColor("#FFB900")
        .addField("RADYO", args)
        .setFooter(msg.author.username, msg.author.avatarURL);

     msg.channel.send(embed);

          });

  });

  client.on('message', msg => {
  if (msg.author.id === client.user.id) return
  if (msg.content.startsWith('sus')) {
 
    if (!msg.member.voice.channel) return msg.channel.sendEmbed(new Discord.MessageEmbed()
    .setColor('#C34E4E')
    .setDescription('❎ | Sesli bir kanalda değilsin!'));
 
    msg.member.voice.channel.leave()
 
}});

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
};