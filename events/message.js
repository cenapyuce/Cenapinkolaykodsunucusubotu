const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
let talkedRecently = new Set();

module.exports = message => {
  const emojiler = require('../jsonlar/emojiler.json')
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
                    .setDescription(`${emojiler.red} **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("#9cbff8")
                message.channel.send({embed})
                return
      }
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				message.channel.send(`${emojiler.red} Bu komudu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
				return
			}
		}
	
    if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				message.channel.send(`${emojiler.red} Bu komudu kullanabilmek için **Üyeleri Banla** iznine sahip olmalısın!`)
				return
			}
		}
		if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				message.channel.send(`${emojiler.red} Bu komudu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!ayarlar.sahip.includes(message.author.id)) {
  
  message.channel.send(`${emojiler.red} Bu komutu sadece **beni kodlayan kişi** kullanabilir!`)
				return
			}
		}
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms );
    
}
};
