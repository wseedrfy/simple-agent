export type ActionHandler = (input: string) => any | Promise<any>;

export const calculate: ActionHandler = (what: string) => {
  // NOTE: 教学示例，直接 eval。生产请改为安全表达式解析。
  // eslint-disable-next-line no-eval
  return eval(what);
};

export const averageDogWeight: ActionHandler = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('scottish terrier')) {
    return 'Scottish Terriers average 20 lbs';
  } else if (n.includes('border collie')) {
    return 'a Border Collies average weight is 37 lbs';
  } else if (n.includes('toy poodle')) {
    return 'a toy poodles average weight is 7 lbs';
  } else {
    return 'An average dog weights 50 lbs';
  }
};

export const knownActions: Record<string, ActionHandler> = {
  calculate,
  average_dog_weight: averageDogWeight,
};


