import { expect } from 'chai';
import 'mocha';
import fitumi from '../../src';
import { loop } from '../test-helpers';

describe('dates', () => {
  it('should generate a random date with no parameters', () => {
    loop(1000, () => {
      const date = fitumi.date();
      expect(Object.prototype.toString.call(date)).to.equal('[object Date]');
      expect(isNaN(date.getTime())).to.be.false;
    });
  });

  it('should generate a random date and keep provided year', () => {
    let year: number;
    let date: Date;
    loop(1000, () => {
      year = fitumi.number({ min: 2010, max: 2020 });
      date = fitumi.date({ year });
      expect(date.getFullYear()).to.equal(year);
    });
  });

  it('should generate a random date and keep provided month', () => {
    let month: number;
    let date: Date;
    loop(1000, () => {
      month = fitumi.number({ max: 11 });
      date = fitumi.date({ month });
      expect(date.getMonth()).to.equal(month);
    });
  });

  it('should generate a random date and keep provided day', () => {
    let day: number;
    let date: Date;
    loop(1000, () => {
      day = fitumi.number({ min: 1, max: 28 });
      date = fitumi.date({ day });
      expect(date.getDate()).to.equal(day);
    });
  });

  it('should generate a random date and keep provided hour', () => {
    let hour: number;
    let date: Date;
    loop(1000, () => {
      hour = fitumi.number({ max: 23 });
      date = fitumi.date({ hour });
      expect(date.getHours()).to.equal(hour);
    });
  });

  it('should generate a random date and keep provided minute', () => {
    let minute: number;
    let date: Date;
    loop(1000, () => {
      minute = fitumi.number({ max: 59 });
      date = fitumi.date({ minute });
      expect(date.getMinutes()).to.equal(minute);
    });
  });

  it('should generate a random date and keep provided second', () => {
    let second: number;
    let date: Date;
    loop(1000, () => {
      second = fitumi.number({ max: 59 });
      date = fitumi.date({ second });
      expect(date.getSeconds()).to.equal(second);
    });
  });

  it('should generate a random date and keep provided millisecond', () => {
    let millisecond: number;
    let date: Date;
    loop(1000, () => {
      millisecond = fitumi.number({ max: 999 });
      date = fitumi.date({ millisecond });
      expect(date.getMilliseconds()).to.equal(millisecond);
    });
  });

});
