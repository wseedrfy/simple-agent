import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import { client, model } from './client';

export class Agent {
  private system: string;
  private messages: ChatCompletionMessageParam[];

  constructor(system: string = '') {
    this.system = system;
    this.messages = [];
    if (this.system) {
      this.messages.push({ role: 'system', content: this.system });
    }
  }

  async call(message: string): Promise<string> {
    this.messages.push({ role: 'user', content: message });
    const result = await this.execute();
    this.messages.push({ role: 'assistant', content: result });
    return result;
  }

  private async execute(): Promise<string> {
    const response = await client.chat.completions.create({
      model,
      messages: this.messages,
    });
    return response.choices?.[0]?.message?.content ?? '';
  }
}


