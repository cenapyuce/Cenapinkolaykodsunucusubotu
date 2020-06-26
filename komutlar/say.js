const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const emojiler = require('../jsonlar/emojiler.json')


  const bergy = new Discord.RichEmbed()
.setColor("#b3cbff")
.setAuthor(message.guild.name, message.guild.avatarURL)
.setThumbnail(message.guild.iconURL)  
.setDescription(`
${emojiler.tik} | **Sunucudaki \`Toplam Üye\` Sayısı:** \`${message.guild.memberCount}\`
${emojiler.tik} | **Sunucudaki \`Online\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'online').size}\`
${emojiler.tik} | **Sunucudaki \`idle\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'idle').size}\`
${emojiler.tik} | **Sunucudaki \`Dnd\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'dnd').size}\`
${emojiler.tik} | **Sunucudaki \`Offline\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'offline').size}\`
`)
  .setFooter(`Komutu Kullanan: ${message.author.tag}`, message.author.avatarURL)   
  message.channel.sendEmbed(bergy);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};
