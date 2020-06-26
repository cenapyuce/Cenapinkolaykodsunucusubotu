const Discord = require('discord.js')
const emojiler = require('../jsonlar/emojiler.json')
exports.run = async (client, message) => {
  
  if (message.member.roles.has('720976511464636416')) return message.channel.send(`${emojiler.red} Zaten bu role sahipsin!`).then(n => n.delete(15000));
    message.member.addRole("720976511464636416") // olmazsa message.author.addRole("rol idi")
    message.channel.send('`Js` Rolünü Başarıyla Aldın.');
    var kanal = client.channels.get('720969940445822986')
  kanal.send(emojiler.tik + message.author + ' isimli insan JavaScript rolu aldi')
  }


exports.conf = {
  aliases: ['jsal']
}
exports.help = {
  name: "js"
}
