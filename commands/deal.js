const pokercommands = require('../src/poker');
const constants = require('../constants/poker-constants');
const Database = require('better-sqlite3');
const path = require('path');

const { PLAYERS } = require('../constants/game-constants');

const queries = require('../src/db-queries');

const db = new Database(path.resolve('data/poker.db'));

module.exports = {
  name: 'deal',
  description: 'Starts the game and deals cards out to the players.',
  game: true,
  execute(message, args, state) {

    let players = queries.listRows(db, PLAYERS);

    state.deck = new Array(52).fill(false);
    const client = message.client;
    
    for (let i = 0; i < players.length; i++) {
      message.author.createDM().then(() => {
        const channel = client.channels.cache.find(
          (channel) =>
            channel.type === 'dm' && channel.recipient.id === players[i]
        );

        let hand = pokercommands.randomCardsFromDeck(state.deck, 2);
        queries.setCards(db, message.author.id, hand);
        let files = [];
        hand.map((card) => {
          files.push(pokercommands.getCard(card, constants));
        });

        client.channels.cache.get(channel.id).send('Here are your cards!', {
          files: files,
        });
      });
      /*
      message.channel.send('Here are the first three for the river.', {
        files: pokercommands.removeRandomCardsFromDeck(state.decks, 3),
      });
      */
  }
  },
};
