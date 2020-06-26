const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require("quick.db")
exports.run = (client, message, args) => {
  const emojiler = require('../jsonlar/emojiler.json')


        let prefix = ayarlar.prefix
if (!message.member.roles.find('id', '720980677293637685')) return message.channel.send('Bu komudu kullanabilmek için **Kod Paylaşım Ekibi** rolüne sahip olmalısın!');
  

        if(args[0] == 'js') {
            let kanal = '📁'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Doğru kullanım ``-kodekle js <Komut-ismi> <kod>``");
            if (!code) return message.channel.send("Doğru kullanım ``-kodekle js <Komut-ismi> <kod>``");
            message.delete();
            if (message.guild.channels.find(a => a.id === "720982159703277649")) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === "720982159703277649")}).then(c => c.send(new Discord.RichEmbed()
.setColor("#b3cbff")
.setDescription(
            `**${message.guild.name} Kod Paylaşım JavaScript Kategorisi!**\n
            **${message.author} tarafından \`\`${kanal}\`\` isimli kod eklendi! 
            İşte Kod;**

            ${code}`)))
            message.channel.send(`${emojiler.tik} **Kodunuz başarıyla JavaScript kategorisine eklendi!\n Eklenen kanalın ismi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.channel.send("<#720982159703277649> adında bir kategori yok!")
            }
          }
      //---------------------------------------------------------------------------------------------------------------------------  
      //---------------------------------------------------------------------------------------------------------------------------  
        
            
        
      }  
      

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodekle'
};