import { expect } from 'chai';
import 'mocha';
import fitumi from '../../src';
import { loop } from '../test-helpers';

describe('choices', () => {
  it('should choose an option from a list', () => {

    const arr = [ 'a', 'b', 'c' ];

    loop(1000, () => {
      const choice = fitumi.choice(arr);
      expect(arr).to.include(choice);
    });
  });

  it('should return an array of choices', () => {

    const arr = [ 'a', 'b', 'c' ];

    loop(1000, () => {

      const choices = fitumi.choices(arr, 10);

      for (let i = 0; i < 10; ++i) {
        expect(arr).to.include(choices[ i ]);
      }

    });
  });
});
