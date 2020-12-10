export function defined(val: any) {
  return val !== null && val !== undefined;
}

/**
 * Determines if a given year is a leap year.
 * Note: it is assumed we're using the non-proleptic Gregorian calendar.
 * @param year a year.
 * @returns true, if a leap year; false, otherwise.
 */
export function isLeapYear(year: number) {
  if (Math.abs(year) % 4 === 0) {
    if (Math.abs(year) % 400 === 0) { return true; }
    if (Math.abs(year) % 100 === 0) { return false; }
    return true;
  }
  return false;
}

/**
 * Gets the number of days in a month for a given year.
 * @param year   a year.
 * @param month  a month.
 */
export function numberOfDaysInMonth(year: number, month: number): number {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    return ( isLeapYear(year) ) ? 29 : 28;
  }

  return 31;
}
