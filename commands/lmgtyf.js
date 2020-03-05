const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, level) => {
  const types = {
      '-w': 'w', // web
      '-i': 'i' // image
    }
    const sites = {
      '-g': 'g', // google
      '-y': 'y', // yahoo
      '-b': 'b', // bing
      '-k': 'k', // ask
      '-a': 'a', // aol
      '-d': 'd' // duckduckgo
    }
    try {
      // Set default options to web & google.
      let type = types['-w']
      let site = sites['-g']

      // If a query isn't specified, send an error message and terminate the command.
      if (args.length < 1) {
         message.channel.send('No Query Specified', 'You need to specify a query.')
        return
      }

      const query = args.filter(a => a[0] !== '-')
      const options = args.filter(args => args[0] === '-')

      // If the specified options exists, set them.
      for (const option of options) {
        if (Object.keys(sites).includes(option.toLowerCase())) {
          site = sites[option]
        }
      }

      // LMGTFY only supports image for google searches
      if (site === 'g') {
        for (const option of options) {
          if (Object.keys(types).includes(option.toLowerCase())) {
            type = types[option]
          }
        }
      }

      try {
        // Remove the user's message.
        await message.delete()
      } catch (err) {
        await console.log('LMGTFY', 'Failed to delete message', err, message)
      }

      try {
        // Send a let me google that for you link in an embedded message.
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        return message.channel.send({
          embed: {
            title: query.join(' '),
            url: `https://lmgtfy.com/?q=${query.join('+')}&s=${site}&t=${type}`,
            description: 'Here you go!',
            author: message.author
          }
        })
      } catch (err) {
        await console.log('LMGTFY', 'Failed to send message', err, message)
      }
    } catch (err) {
      await console.log('LMGTFY', 'Failed to run command', err, message)
    }
  }

exports.conf = {
  enabled: true, //we enabled the code
  guildOnly: false, //sadece servere özel yapmadık
  
};

exports.help = {
  name: "lm", //adını belirledik (kullanmak için gereken komut)
  description: "<query> [<site> <web|image>]", //açıklaması
  usage: "^lm firefox discord bot"
};
