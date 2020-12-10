import { number } from './number';
import { defined, numberOfDaysInMonth } from '../helpers';
import { IDateGeneratorParameters } from '../interfaces';
import moment from 'moment';

/**
 * Generates a random date.
 * @param p generator parameters.
 */
export function date(p?: IDateGeneratorParameters): Date {
  p = { ...p };
  const year = defined(p.year) ? p.year : number({ max: 3000 });
  const month = defined(p.month) ? p.month : number({ max: 11 });
  const hour = defined(p.hour) ? p.hour : number({ max: 23 });
  const minute = defined(p.minute) ? p.minute : number({ max: 59 });
  const second = defined(p.second) ? p.second : number({ max: 59 });
  const millisecond = defined(p.millisecond) ? p.millisecond : number({ max: 999 });
  const day = defined(p.day) ? p.day : _getDay(year, month);

  return moment().year(year).month(month).date(day).hour(hour).minute(minute).second(second).millisecond(millisecond).toDate();
}

function _getDay(year: number, month: number): number {
  const maxDaysInMonth = numberOfDaysInMonth(year, month);
  return number({ min: 1, max: maxDaysInMonth });
}

export default {
  date,
};
