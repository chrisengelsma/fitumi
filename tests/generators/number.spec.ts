import { expect } from 'chai';
import 'mocha';
import fitumi from '../../src';
import { isFloat, isInt, loop } from '../test-helpers';

describe('numbers', () => {
  it('should return integer in range [0, 1]', () => {
    loop(1000, () => {
      const num = fitumi.number();
      expect(isInt(num)).to.be.true;
      expect(num).to.be.gte(0);
      expect(num).to.be.lte(1);
    });
  });

  it('should return float in range [0.0, 1.0]', () => {
    loop(1000, () => {
      const num = fitumi.number({ type: 'float' });
      expect(isFloat(num)).to.be.true;
      expect(num).to.be.gte(0.0);
      expect(num).to.be.lte(1.0);
    });
  });

  it('should adjust number to min and max range', () => {
    loop(1000, () => {
      const num = fitumi.number({ min: 20, max: 21 });
      expect(num).to.be.gte(20.0);
      expect(num).to.be.lte(21.0);
    });
  });

  it('should correct min and max', () => {
    loop(1000, () => {
      const num = fitumi.number({ min: 21, max: 20 });
      expect(num).to.be.gte(20.0);
      expect(num).to.be.lte(21.0);
    });
  });

  it('should create a new array of numbers', () => {
    const len = 10;
    const arr = fitumi.numbers(len, {});
    expect(arr.length).to.equal(len);
  });

  it('should populate an existing array', () => {
    const arr1 = [ 0, 1, 2, 3, 4, 5 ];
    const arr2 = fitumi.numbers(arr1, {});
    for (let i = 0; i < arr1.length; ++i) {
      expect(arr1[ i ]).to.be.closeTo(arr2[ i ], 0.000001);
      expect(arr1[ i ]).to.be.closeTo(arr2[ i ], 0.000001);
    }
  });
});
