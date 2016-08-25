import 'steal-mocha';
import chai from 'chai';
import Embed from './embed';

let assert = chai.assert;

describe('models/embed', function() {
  it('getList', function(done){
    Embed.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.attr('0.description'), 'First item');
      done();
    });
  });
});
