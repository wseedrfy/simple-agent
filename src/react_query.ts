import { Agent } from './agent';
import { knownActions } from './tools';
import { prompt } from './prompt';

const actionRegex = /^Action: (\w+): (.*)$/;

export async function query(question: string, maxTurns: number = 5): Promise<string> {
  let i = 0;
  const bot = new Agent(prompt);
  let nextPrompt = question;

  while (i < maxTurns) {
    i += 1;
    const result = await bot.call(nextPrompt);
    console.log(result);

    const lines = (result ?? '').split('\n');
    const matches = lines
      .map((line) => actionRegex.exec(line))
      .filter((m): m is RegExpExecArray => Boolean(m));

    if (matches.length > 0) {
      const [, action, actionInput] = matches[0];
      if (!Object.prototype.hasOwnProperty.call(knownActions, action)) {
        throw new Error(`Unknown action: ${action}: ${actionInput}`);
      }
      console.log(` -- running ${action} ${actionInput}`);
      const observation = await knownActions[action](actionInput);
      console.log('Observation:', observation);
      nextPrompt = `Observation: ${observation}`;
    } else {
      return result;
    }
  }

  return 'Max turns reached without final Answer.';
}


