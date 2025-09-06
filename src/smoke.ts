import 'dotenv/config';
import { Agent } from './agent';

async function run() {
  const bot = new Agent('你是一个乐于助人的机器人');
  const result = await bot.call('你是谁？');
  console.log(result);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});


