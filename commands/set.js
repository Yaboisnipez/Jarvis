const Discord = require('discord.js')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
   if (!message.member.hasPermission("ADMINISTRATOR")) {
    let ed = new Discord.RichEmbed()
    .setTitle('You dont have access to that command you need permision `ADMINISTRATOR`')
    message.channel.send(ed)
  return
  }  
  
  const user = message.author.username
  
  let emots = "<:check:668912743801421851>"
  
  
  let embed = new Discord.RichEmbed()
    .setTitle("Set Command")
  .setColor('#00FBFF')

  
  
 // let welcomeChannel = args.join(" ")
 // let WelcomeChannel = new Discord.RichEmbed().setTitle('I have set the welcome channel is set to' + ` ${welcomeChannel}`)
 // message.channel.send(WelcomeChannel)
 // db.set(`welcomeChannel_${message.guild.id}`, welcomeChannel)


  
	let db = require('quick.db')


  
  
//welcomeEnabled_${message.guild.id}
	switch (args[0]) {
		case 'welcomeEnabled':
      
      let welcomeEnabled = args.join(" ")
      
      db.set(`welcomeEnabled_${message.guild.id}`, welcomeEnabled)
      
      embed.addField(`${emots} SucessFul ${user}`, 'I have enabled/disabled welcome command set it to' + ` ${welcomeEnabled}`)
      
      break;
		case 'welcomeMessage':
      
       let welcomeMessage = args.join(" ")
      
      db.set(`welcome_${message.guild.id}`, welcomeMessage)
      
      embed.addField(`${emots} ${user}`, 'I have set the welcome message to' + ` ${welcomeMessage}`)
      
      message.channel.send(embed)
      
      
      
			break;
      
      
    
    case 'welcomeChannel':
      let welcomeChannel = args.join(" ")
      
      db.set(`welcomeChannel_${message.guild.id}`, welcomeChannel)
      
      embed.addField(`${emots} ${user}`, 'I have set the welcome channel to' + ` <#${welcomeChannel}>`)
      
      message.channel.send(embed)
      
      break;
      
    case 'levelEnabled' :
      
      let level1 = args.join(" ")
      
      db.set(`level_${message.guild.id}`, level1)
      
      
      embed.addField(`${emots} ${user}`, 'I have set the level command to' + ` ${level1}`)
      
      message.channel.send(embed)
      
      break;
    
		default:
      let defaul = new Discord.RichEmbed().setDescription('I can only set up the conf commands here')
			message.channel.send(defaul)
	}
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	
};

exports.help = {
	name: 'set',
	category: 'Moderation',
	description: 'Allows you to add or remove a single role from a user',
	usage: 'role [add/remove] [user mention] [role name]'
};
