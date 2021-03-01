const Discord = require('discord.js');


module.exports = {
    name: 'help', 
    desc: 'this command will tell you the commands this bot has to offer', 
    execute(message) {    
        const headerEmbed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("commands!")
        .setDescription("this is for regular help, use !poker-help command to remind/learn texas hold'em")
        .addFields(
            {name: 'add', value: 'will give chips to a user'}, 
            {name: 'bank', value: 'will allow you to see how many chips you have'}, 
            {name: 'chips', value: 'will add chips to a game'}, 
            {name: 'clear', value: 'clears all table entries and tables'}, 
            {name: 'deal', value: 'Starts the game and deals cards out to the players (buggy)'}, 
            {name: 'end', value: 'Ends the game'}, 
            {name: 'gamestatus', value: 'Shows the current status of the game with all the users, chips, and the current river'},
            {name: 'id', value: 'Returns the current profile and player ids of the user'}, 
            {name: 'list', value: 'Lists all of the current profiles within the profiles table'}, 
            {name: 'newprofile', value: 'will add a profile'}, 
            {name: 'options', value: 'Allows the user to change the options of the game'}, 
            {name: 'play', value: 'Allows the user to enter the lobby'}, 
            {name: 'purge', value: 'Purges the chat of the messages'}, 
            {name: 'quit', value: 'Quits the current game'}, 
            {name: 'start', value: 'Begins the game, starts up and initializes all values'}, 
            {name: "withdraw", value: "Withdraws money from the user's bank and inserts the money into their current holding"},
        )
  
      message.channel.send(headerEmbed1);
        
    }
}