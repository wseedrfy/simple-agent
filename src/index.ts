import 'dotenv/config';
import { query } from './react_query';

async function main() {
  const question = 'I have 2 dogs, a border collie and a scottish terrier. What is their combined weight';
  const answer = await query(question);
  console.log('Final:', answer);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


