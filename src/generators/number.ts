import { INumberGeneratorParameters } from '../interfaces';

/**
 * Generates a random number.
 * @param p parameters.
 */
export function number(p?: INumberGeneratorParameters): number {
  p = { ...p };

  let min = p.min || 0.0;
  let max = p.max || Math.max(min, 1.0);
  let type = p.type || 'int';

  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  const rand = Math.random() * ( max - min ) + min;

  return ( type === 'int' ) ? Math.round(rand) : rand;
};


/**
 * Generates an array of random numbers with a given length.
 * @param len   length of resulting array.
 * @param p     parameters.
 */
export function numbers(len: number, p?: INumberGeneratorParameters): number[];

/**
 * Populates an existing array with random numbers.
 * @param arr   the array to populate.
 * @param p     parameters.
 */
export function numbers(arr: number[], p?: INumberGeneratorParameters): number[];

export function numbers(arrOrLen: number | number[], p?: INumberGeneratorParameters): number[] {
  p = { ...p };

  let type = p.type || 'int';
  let min = p.min || 0.0;
  let max = p.max || Math.max(min, 1.0);

  let array: number[];
  let len: number;

  if (Array.isArray(arrOrLen)) {
    array = arrOrLen;
    len = arrOrLen.length;
  } else {
    array = new Array(arrOrLen);
    len = arrOrLen;
  }

  for (let i = 0; i < len; ++i) {
    array[ i ] = this.number({ type, min, max });
  }
  return array;
}

export default {
  number,
  numbers,
};
