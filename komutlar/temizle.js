const Discord = require('discord.js');
exports.run = async(client, message, args) => {
  const emojiler = require('../jsonlar/emojiler.json')
  
  
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${emojiler.red} Bu komudu kullanabilmek için \`MANAGE_MESSAGES\` yetkisi vermen lazım!`)
let sayı = args[0]  
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.chanenl.send(`${emojiler.red} Bu komudu kullanabilmek için \`MANAGE_MESSAGES\` yetkisine sahip **olmalısınız!**`);
if(isNaN(sayı)) return message.channel.send("Lütfen bir sayı belirtin ``örn: -temizle <sayı>``");
if(!sayı) return message.channel.send("Lütfen bir sayı **belirtin!** ``örn: -temizle <sayı>``");
message.channel.bulkDelete(sayı).catch(console.error)
  message.channel.send(`${emojiler.tik} Başarıyla ${sayı} adet mesaj **sildim!**`).then(s => s.delete(7000));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil',"temizle"],
  permLevel: 1
};
exports.help = {
  name: 'temizle',
  description: 'mesaj siiler',
  usage: 'temizle 100'
};