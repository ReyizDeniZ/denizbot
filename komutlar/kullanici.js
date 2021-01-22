const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../functions.js");

module.exports = {
    config: {
        name: "kullanici",
        aliases: ["kullanıcı", "user", "userinfo"],
        description: "Kullanıcı bilgi",
        usage: "?kullanici (kullanıcı)",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
      
        if(!member)
        return message.channel.send("**Geçerli bir isim gir!**");
      
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join(", ") || 'none';
        const created = formatDate(member.user.createdAt);

        const embed = new MessageEmbed()
            .setTitle("Kullanıcı Bilgi")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
            .setColor("GREEN")
            .addField("**Kullanıcı bilgileri**", `${member.displayName}`)
            .addField("**ID**", `${member.user.id}`)
            .addField("**Kullanıcı adı**",`${member.user.username}`)
            .addField("**Tag**", `${member.user.tag}`)
            .addField("**Kayıt Tarihi**", `${created}`)
            .addField("**Katılma tarihi**", `${joined}`)
            .addField("**Roller**", `${roles}`, true)
            .setTimestamp()

            member.presence.activities.forEach((activity) => {
        if (activity.type === 'PLAYING') {
            embed.addField('Oynadığı oyun',`\n**${activity.name}**`)
        }
            })

        message.channel.send(embed);
    }
}