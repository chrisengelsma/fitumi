import { NumericType } from './types';

export interface INumberGeneratorParameters {
  type?: NumericType;
  min?: number;
  max?: number;
}

export interface IDateGeneratorParameters {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
}
