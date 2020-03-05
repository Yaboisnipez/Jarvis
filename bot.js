const Discord = require("discord.js")
const client = new Discord.Client()
const settings = require("./settings.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);
// let xp = require("./xp.json");
const db = require("quick.db");

const YouTube = require("simple-youtube-api");
const token = settings.token;
const ytdl = require("ytdl-core");

require("./modules/music.js")(client);

if (settings.musicEnabled === "true") {
  client.musicQueue = new Map();

  client.YouTube = new YouTube("AIzaSyCPPWS_YnmZaRgBNz0TcoB5eW8Z8oMsoM8");
  client.ytdl = ytdl;
}

// client.on("guildMemberAdd", async message => {
//   let welcomeMessage = await db.fetch(`welcome_${message.guild.id}`);
//   let welcomeChannels = await db.fetch(`welcomeChannel_${message.guild.id}`);
//   let welcomeEnabled = await db.fetch(`welcomeEnabled_${message.guild.id}`);

//   // Welcome

//   if (welcomeEnabled !== "true") return;
//   let welcomer = client.channels.get(`${welcomeChannels}`);
//   // const welcomeMessage1 = db
//   //   .fetch(`welcome_${message.guild.id}`)
//   //   .replace("{{user}}", message.author.username);

//   let welcome = new Discord.RichEmbed()
//     .setTitle("🎉 Joined 🎉")
//     .setAuthor(message.user.username, message.user.avatarURL)
//     .setDescription(`${welcomeMessage}`)
//     .setThumbnail(message.user.avatarURL)
//     .setColor("RANDOM")
//     .setFooter(
//       "Members" +
//         ` ${message.guild.MemberCount}` +
//         " User" +
//         ` ${message.user.username}`
//     );
//   welcomer.send(welcome);
// });



const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);

  
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Loading...`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loaded: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

// client.on('debug', e => {
//  console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
//  });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

// client.mongoose = require("./utils/mongoose.js");


// client.mongoose.init();
client.login(process.env.token);