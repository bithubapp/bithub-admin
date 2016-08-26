import 'steal-mocha';
import chai from 'chai';
import HubHub from './hub';

let assert = chai.assert;

describe('models/hub', function() {
  it('getList', function(done){
    HubHub.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.attr('0.description'), 'First item');
      done();
    });
  });
});
