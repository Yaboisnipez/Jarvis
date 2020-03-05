const Discord = require('discord.js')
const Canvas = require('canvas');

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	let fontSize = 70;

	do {
		
		ctx.font = `${fontSize -= 10}px sans-serif`;
		
	} while (ctx.measureText(text).width > canvas.width - 300);

	
	return ctx.font;
  
}

exports.run = async (client, message, args) => {
  const member = message.author.username
  
  	const canvas = Canvas.createCanvas(700, 250);

	const ctx = canvas.getContext('2d');
  
  const background = await Canvas.loadImage('https://cdn.glitch.com/acbfcd4c-aece-4490-8622-9fdcb4f49653%2Fgalaxy.jpeg?v=1579481083884');
	
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#74037b';
	
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
 ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member}`, canvas.width / 3.2, canvas.height /1.8 );

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
  
  const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
	
	ctx.drawImage(avatar, 25, 25, 200, 200);

	
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

message.channel.send(attachment);
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "testwelcome",
  category: "Miscelaneous",
  description: "Testing, testing",
  usage: "testwelcome"
};
