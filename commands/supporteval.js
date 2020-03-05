const Discord = require('discord.js')
const { inspect } = require("util");
const db = require("quick.db");
const html = require("axios")

exports.run = async (client, message, args) => {
  if(message.author.id !== "524625000377090076") {
    let q = new Discord.RichEmbed()
    .setTitle("Only my support can use this command")
    message.channel.send(q)
    return
  }
  
  const code = async () => {
  
  try {
            let toEval = args.join(" ")
			let evaluated = await inspect(eval(toEval, { depth: 0 }))
            
            if (!toEval) {
                return message.channel.send(`Error while evaluating: \`air\``);
            } else {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart);
              
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
              
            }
            
        } catch (e) {
            return message.channel.send(`Error while evaluating: \`${e.message}\``);
        }

  };
  code()

    
  
},
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    
  },
    exports.help = {
  name: 'seval',
	category: 'Miscelaneous',
	description: 'Eval command',
	usage: 'seval [code]'
  };