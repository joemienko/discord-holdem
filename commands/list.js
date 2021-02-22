const Discord = require('discord.js');

const Database = require('better-sqlite3');
const path = require('path');
const client = new Discord.Client();

const { PROFILES } = require('../constants/game-constants');


const queries = require('../src/db-queries');

const db = new Database(path.resolve('data/poker.db'));

module.exports = {
  name: 'list',
  description: 'Lists all of the current profiles within the profiles table.',
  game: true,
  execute(message) {
    let profiles = queries.listRows(db, PROFILES);

    client.login(process.env.CLIENT_TOKEN);

    const headerEmbed = new Discord.MessageEmbed()
      .setColor('#36393E')
      .setTitle("DISCORD HOLD'EM!")
      .setDescription("Who's Resigistered?")
      .setThumbnail('https://www.clipartmax.com/png/full/154-1548159_card-clip-art.png');      

    message.channel.send(headerEmbed);

    for (let i = 0; i < profiles.length; i++) {
      //message.channel.send(i + 1 + '. ' + client.users.fetch(profiles[i]));
      client.users.fetch(profiles[i]).then(users => {
        const userEmbed = new Discord.MessageEmbed()
          .setColor('#36393E')
          .setAuthor(users.username)
          .setThumbnail(users.displayAvatarURL({ size: 2048, dynamic: true }));
        message.channel.send(userEmbed);
      });
    }
  },
  // execute(message) {
  //   let profiles = queries.listRows(db, PROFILES);
  //   client.login(process.env.CLIENT_TOKEN);


  //   for (let i = 0; i < profiles.length; i++) {
  //   //   client.on(profiles[i], async message => {
  //   //     client.users.fetch(message.replace('<@!', '').replace('>', '')).then((usr) => {
  //   //         message.channel.send(`id: ${usr.id}\nname: ${usr.username}`);
  //   //     });
  //   // });      
  //   client.users.fetch(profiles[i]).then((user) => {
  //     message.channel.send(`${user.username}`);
  // });
    //   client.users.fetch(profiles[i]).then((user) => {message.channel.send(`id: ${user.id}\nname: ${user.username}`);
    
    // }); 
      //user.send())
      //message.channel.send(i + 1 + '. ' + client.users.fetch(profiles[i]));
      //}
      //},
};
