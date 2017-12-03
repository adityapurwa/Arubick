const Bot = require('../dist/engine/Bot').default;
const path = require('path');

const weatherBot = new Bot();
weatherBot.load(path.resolve(__dirname, '../example/RandomBot.rbot')).then(() => {
  weatherBot.run();
});
