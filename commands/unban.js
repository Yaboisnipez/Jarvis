const Discord = require("discord.js")

exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("KICK_MEMBERS")) {
    let ed = new Discord.RichEmbed()
    .setTitle('You dont have access to that command you need `KICK_MEMBERS`')
    message.channel.send(ed)
  return
  }  
	
	let search = args.join(" ");
	if(!search) return message.channel.send("Please provide a valid ID or name.");

	try {
		let bans = await message.guild.fetchBans();
		let banned = bans.get(search) || bans.find(u => u.tag.toLowerCase().includes(search.toLowerCase()));
		
		if(!banned) return message.channel.send("I could not find a banned user by this ID or name.");

		await message.guild.unban(banned);

		message.channel.send(`${banned.tag} has been unbanned.`);
	} catch(e) {
		message.channel.send(`Unban failed: ${e}`)
	}
}

exports.conf = {
  enabled: true, //we enabled the code
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ["premetremove"], //farklı çağrılar ekledik
  
};

exports.help = {
  name: "unban", //adını belirledik (kullanmak için gereken komut)
  description: 'unbans you user', 
  usage: "unban [username] [reason]"
};