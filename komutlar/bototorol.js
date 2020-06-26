const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  const emojiler = require('../jsonlar/emojiler.json')


  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let rol = message.mentions.roles.first()
  if (!rol) return message.channel.send(`Bot otorol olarak ayarlamak istediğin rolü etiketlemelisin. \`${prefix}botrol @Bot\``)

  db.set(`bototorol_${message.guild.id}`, rol.id)
  message.channel.send(`Bot otorol \`${rol.name}\` olarak ayarlandı. Kapatmak için \`${prefix}botrol\` yazmalısın.`)

};
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['botrol'],
    permLevel: 3
}

exports.help = {
    name: 'bototorol',
    description: 'Sunucuya giren bota seçtiğiniz rolü otomatik verir.',
    usage: 'bototorol <@rol>'
}