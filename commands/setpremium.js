const Discord = require('discord.js')
const Premium = require("../databases/premium.js")
const mongoose = require("mongoose");
const settings = require("../settings.json");
// mongoose.connect(process.env.mongodbURL, {
//    useUnifiedTopology: true,
//   useNewUrlParser: true,
// });


exports.run = async (client, message, args) => {
  
  if (message.author.id !== "632020134289997824") {
    
    let embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} you dont have access to use this command`)
    
     message.channel.send(embed)
    
      return
  } 
 
  
 let premiums = args.join(" ");
  
   // let coinstoadd = Math.ceil(Math.random() * 50);
Premium.findOne({userID: message.author.id}, (err, premium) => {
    if(err) console.log(err);
  if(!premium) {
    const newpre = new Premium({ 
      _id: mongoose.Types.ObjectId(),
      userID: premiums,
    })
    
     
    newpre.save().catch(err => console.log(err))
    
    
    let pre = new Discord.RichEmbed()
    .setTitle("🎉 Congrats 🎉")
    .setDescription("You can now user")
    .addField("1)", "^firebucks")
    .setFooter(`${message.author.username} you have been given premium`)
    
     client.users.get(premiums).send(pre);
    
   } else {
    premium.premium = premium.premium + premiums;
    premium.save().catch(err => console.log(err));
  }
  })
  
},
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    
  },
    exports.help = {
  name: 'setpremium',
	description: 'The eco commands are for premium user only',
	usage: '^eco'
  };