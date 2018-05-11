import assert from 'assert';
import { cube } from '../src/scripts/index';

describe('Array', ()=> {
  describe('#indexOf()', ()=> {
    it('should return -1 when the value is not present', ()=> {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('main', ()=> {
  describe('#cube()', ()=> {
    it('should return 9 when the value is 3', ()=> {
      assert.equal(cube(3), 27);
    });
  });
});
