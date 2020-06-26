const Discord = require('discord.js');
const superagent = require('superagent');
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  const emojiler = require('../jsonlar/emojiler.json')


   const util = require('util');
    let owner = [`${ayarlar.sahip}`]
    if(ayarlar.sahip.includes(message.author.id)) {
        try {
            let toEval = args.join(" ");
            let evaluated = eval(toEval)
            if(!toEval) return;
            evaluated = util.inspect(evaluated)
                for(let i = 0; i < evaluated.length; i += 2000) {
                let hrstart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrstart)
                const toSend = evaluated.substring(i, Math.min(evaluated.length, i + 2000));
                return message.channel.send(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.` + '```js\n' + toSend + '\n```')
                }
        } catch(err) {
            let hrstart = process.hrtime()
            let hrDiff;
            hrDiff = process.hrtime(hrstart)
            return message.channel.send(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms. \`Err!!\` \`\`\`xl\n${(err)}\n\`\`\``)
        }

    } else {
        return;
    }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 4
 };

 exports.help = {
   name: 'eval'
 };