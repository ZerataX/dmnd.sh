/* eslint-env mocha */
import assert from 'assert';
import diamond from '../src/scripts/diamond.js'

describe('test', ()=> {
  describe('#test()', ()=> {
    it('this is just a test test', ()=> {
      assert.equal(diamond, 'DIAMONDS');
    });
  });
});

// TODO phantom-js tests
// https://github.com/nathanboktae/mocha-phantomjs
