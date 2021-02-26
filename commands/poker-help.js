const Discord = require('discord.js');
const HandRankingChart = 'https://www.pokerhands.poker/wp-content/uploads/2017/01/Hand-Ranking-Chart.jpg'

module.exports = {
    name: 'poker-help', 
    desc: "this command will tech/remind you how to play texas hold'em", 
    execute(message) {
        const headerEmbed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("how to play:")
        .setDescription("https://www.partypoker.com/en/how-to-play/texas-holdem")
        .setImage(HandRankingChart, {size: 4096, dynamic: true})
    message.channel.send(headerEmbed2); 
    }
}