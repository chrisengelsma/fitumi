import { number } from './number';

/**
 * Generates a random choice from an array.
 * @param arr an array.
 */
export function choice(arr: any[]): any {
  const len = arr.length;
  const idx = number({ max: len - 1 });
  return arr[ idx ];
}

/**
 * Generates a list of random chocies from an array.
 * @param arr an array.
 * @param num number of choices.
 */
export function choices(arr: any[], num: number): any[] {
  const result: any[] = [];

  for (let i = 0; i < num; ++i) {
    result.push(this.choice(arr));
  }

  return result;
}

export default {
  choice,
  choices
};
