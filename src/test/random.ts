import Bot from '../engine/Bot';
import * as path from 'path';

const randomBot = new Bot();
randomBot
  .load(path.resolve(__dirname, '../../example/RandomBot.rbot'))
  .then(() => {
    randomBot.run();
  });
