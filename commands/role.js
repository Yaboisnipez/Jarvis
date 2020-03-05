const Discord = require('discord.js')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
   if (!message.member.hasPermission("ADMINISTRATOR")) {
    let ed = new Discord.RichEmbed()
    .setTitle('You dont have access to that command you need permision `ADMINISTRATOR`')
    message.channel.send(ed)
  return
  }  


  
	var user = message.mentions.members.first();
	var roleName = args.splice(2).join(' ');
	var role = message.guild.roles.find('name', roleName);


	switch (args[0]) {
		case 'add':
      let mention = new Discord.RichEmbed().setTitle('You need to mention a valid user of this server')
			if (!user) return message.channel.send(mention)
      
      let rolename = new Discord.RichEmbed().setTitle('You can\'t give no roles...')
			if (!roleName) return message.channel.send(rolename)
			//console.log(user);
			//console.log(roleName);
      let norole = new Discord.RichEmbed().setTitle('No role with this name exists. _Roles names are case-sensitive_')
			if (!message.guild.roles.find('name', roleName)) return message.channel.send(norole)
      
      let already = new Discord.RichEmbed().setTitle(':eyes: I see this role on that user already')
 			if (user.roles.exists('name', roleName)) return message.channel.send(already)

      let roleadd = new Discord.RichEmbed()
      .setTitle(`Role Add`)
      .setColor("RANDOM")
      .setDescription(`I add role ${roleName} to user ${user}`);
			user.addRole(role).then(() => message.channel.send(roleadd)).catch((err) => message.reply('Unable to add role').then(() => console.log(err)));
			break;
		case 'remove':

      let nouser = new Discord.RichEmbed().setTitle('You need to mention a valid user of this server')
			if (!user) return message.channel.send(nouser);
			
      let norolename = new Discord.RichEmbed().setTitle('You can\'t remove no roles...')
      if (!roleName) return message.channel.send(norolename);
			//console.log(user);
			//console.log(roleName);
      let error = new Discord.RichEmbed().setTitle('No role with this name exists. _Roles names are case-sensitive_')
			if (!message.guild.roles.find('name', roleName)) return message.channel.send(error);

			if (!user.roles.find('name', roleName)) return message.reply('Does that user even have the role?');
let removed = new Discord.RichEmbed().setTitle('Role Removed').setDescription(`I removed ${roleName} from user ${user}`)
let faild = new Discord.RichEmbed().setTitle('Unable to remove role')
			user.removeRole(role).then(() => message.channel.send(removed)).catch((err) => message.channel.send(faild).then(() => console.log(err)));
			break;
		default:
      let defaul = new Discord.RichEmbed().setDescription('Well, you can only add or remove roles...')
			message.channel.send(defaul)
	}
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	
};

exports.help = {
	name: 'role',
	category: 'Moderation',
	description: 'Allows you to add or remove a single role from a user',
	usage: 'role [add/remove] [user mention] [role name]'
};
