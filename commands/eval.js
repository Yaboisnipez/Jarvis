const Discord = require('discord.js')
const { inspect } = require("util");
const db = require("quick.db");
const enmap = require('enmap')
const html = require("axios")
const canvas = require("canvas-constructor")



exports.run = async (client, message, args) => {
  if(message.author.id !== "653941114751156236") {
    let q = new Discord.RichEmbed()
    .setTitle("<:cancel:568135309972209689> | Only my developer can use this command")
    message.channel.send(q)
    return
  }
  
 
  
  const code = async () => {
  
    // let code = `*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 }`
   
    
  try {
            let toEval = args.join(" ")
        
   

            
        if (toEval.includes("client.token")) return message.channel.send('Fuck you I am not going to leak my token')
			let evaluated = await inspect(eval(toEval, { depth: 0 }))
            
            if (!toEval) {
                return message.channel.send(`<:cancel:568135309972209689> Error while evaluating: \`air\``);
            } else {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart);
              
//           let evalcode = new Discord.RichEmbed()
//               .setTitle("Eval Code")
//             .addField("Input", `${toEval}`)
//           .addField("Ouput", ``)
              
              
          // message.channel.send(evalcode)
              return message.channel.send(`<:checked:568135310165278902> *Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
              
            }
            
        } catch (e) {
            return message.channel.send(`<:cancel:568135309972209689> Error while evaluating: \`${e.message}\``);
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
  name: 'eval',
	category: 'Miscelaneous',
	description: 'Eval command',
	usage: 'eval [code]'
  };