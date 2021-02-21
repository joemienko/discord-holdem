# Discord Poker Bot

This bot simulates Texas Hold'em for Discord through a series of commands and allows users within channels to gain and hold chips. It is based off of a fork of [discord-poker-bot](https://github.com/kimjeff49/discord-poker-bot). 

This repo is currently being used as a node tutorial for my son. Any substantive improvements to the [discord-poker-bot](https://github.com/kimjeff49/discord-poker-bot) will be back-ported to the original fork. 

## Requirements

- [Node.js](http://nodejs.org/)
- [Discord](https://discordapp.com/) account
- A discord server set up according to the instructions [here]([https://www.sitepoint.com/discord-bot-node-js/](https://www.sitepoint.com/discord-bot-node-js/)

## Installation Steps (if applicable)

1. Clone repo
2. Run `npm install`
3. Add Discord credentials (`CLIENT_TOKEN`) in a `.env` file
4. Run `npm start`
5. Interact with your Discord bot via your web browser or local client

## Usage

[`!clear`](commands/clear.js)

[`!start`](commands/start.js)

[`!newprofile`](commands/newprofile.js)

[`!bank`](commands/bank.js)

[`!id`](commands/id.js)

[`!withdraw`](commands/withdraw.js)

[`!chips`](commands/chips.js)

[`!play`](commands/play.js)

[`!deal`](commands/deal.js)

[`!quit`](commands/quit.js)

[`!end`](commands/end.js)

## Functions that written but buggy

[`!list`](commands/list.js)

[`!options`](commands/options.js)

[`!add`](commands/add.js)

[`!purge`](commands/purge.js)

[`!gamestatus`](commands/gamestatus.js)
