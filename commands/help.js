// const Discord = require("discord.js");
// const db = require("quick.db");

// exports.run = async (client, message, args, level) => {

  
 

//   if (args[0] === "help") return message.channel.send(`Just do ^help instead.`);

//   if (args[0]) {
//     let command = args[0];
//     if (client.commands.has(command)) {
//       command = client.commands.get(command);
//       let SHembed = new Discord.RichEmbed()
//         .setAuthor(`${client.user.username}'s help`, message.guild.iconURL)
//         .setThumbnail(client.user.displayAvatarURL)
//         .setDescription(
//           `The bot prefix is: **b-**\n\n**>Command:** ${
//             command.help.name
//           }\n**>Description:** ${command.help.description ||
//             "No Description"}\n**>Usage:** ${command.help.usage ||
//             "No Usage"}\n`
//         );

//       message.channel.send(SHembed);
//     }
//   }

//   if (!args[0]) {
    
//       let help = new Discord.RichEmbed()
//         .setTitle("Help Command")
//           .addField("")
 
//   }
// };

// exports.conf = {
//   enabled: true,
//   guildOnly: false,
//   aliases: []
// };

// exports.help = {
//   name: "help",
//   category: "Miscelaneous",
//   description: "shows you the help commands",
//   usage: "help"
// };

const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, level) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "-"
  
  let color = await db.fetch(`color_${message.guild.id}`);

  if (args[0] === "help") return message.channel.send(`Just do -help instead.`);

  if (args[0]) {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      let SHembed = new Discord.RichEmbed()
        .setColor(`${color}`)
        .setAuthor(`${client.user.username}'s help`, message.guild.iconURL)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(
          `The bot prefix is: **-**\n\n**>Command:** ${
            command.help.name
          }\n**>Description:** ${command.help.description ||
            "No Description"}\n**>Usage:** ${command.help.usage ||
            "No Usage"}\n`
        );

      message.channel.send(SHembed);
    }
  }

  if (!args[0]) {
    let embed = new Discord.RichEmbed().setTitle("Help Command");

    if (message.author.id === "632020134289997824") {
      embed.addField(`${prefix}mods`, ` Shows all the mod commands`);
      embed.addField(`${prefix}music`, ` Shows the all the music commands ${prefix}music`);
      embed.addField(
        `${prefix}usercommands`,
        `Shows you all the commands user can do ${prefix}usercommands`
      );
      embed.addField(
        `${prefix}contact`,
        ` Example ${prefix}contact [reason] to contact me`
      );
      embed.addField(
        `${prefix}hulu`,//but i will be fast just dont type ok done
        ` ${prefix}hulu This command send you a hulu account` 
        );
      embed.addField(
        `${prefix}fornite`,//but i will be fast just dont type ok done
        ` ${prefix}fortnite This command send you a fortnite account`
        );
      embed.addField(
        `${prefix}spotify`,//but i will be fast just dont type ok done
        ` ${prefix}spotify This command send you a spotify account`
        );
      embed.addField(
        `${prefix}netflix`,//but i will be fast just dont type ok done
        ` ${prefix}netflix This command send you a netflix account`
      );
      embed.setColor(`${color}`);
      // embed.setFooter(
      //   "If you need more help do ^help [commands name]" +
      //     " if you need to contact me you can contact me at firefoxbusinessdiscordbot@gmail.com"
      // )
      embed.addField(`${prefix}support`, 'to get support for jarvis' + ` ${prefix}support`);
      

      return message.channel.send(embed);
    } else {
      embed.addField(`${prefix}mods`, ` Shows all the mod commands ${prefix}mods`);
      embed.addField(`${prefix}music`, ` Shows the all the music commands ${prefix}music`);
      embed.addField(
        `${prefix}usercommands`,
        `Shows you all the commands user can do ${prefix}usercommands`
      );
      embed.addField(
        `${prefix}contact`,
        ` Example ${prefix}contact [reason] to contact me`
      );
      embed.setColor(`${color}`);
      // embed.setFooter(
      //   "If you need more help do ^help [commands name]" +
      //     " if you need to contact me you can contact me at firefoxbusinessdiscordbot@gmail.com"
      // )
      embed.addField(`${prefix}support`, 'to get support for jarvis' + ` ${prefix}support`);
      
      return message.channel.send(embed);
    }

    //   .setTitle('Help Command')
    //   .addField('```^mods```', ` Shows all the mod commands`)
    //   .addField('```^music```', ` Shows the all the music commands`)
    //   .addField('```^usercommands```', `Shows you all the commands user can do`)
    //   .addField('```^contact```', ` Example ^contact [reason] to contact me`)
    //   .setColor(`${color}`)
    //  // .setImage('https://discordapp.com/channels/@me/656648298907566090/656651874430353429')
    //   .setFooter("If you need more help do ^help [commands name]" + ' if you need to contact me you can contact me at firefoxbusinessdiscordbot@gmail.com')
    // message.channel.send(me)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "help",
  category: "Miscelaneous",
  description: "shows you the help commands",
  usage: "help"
};

