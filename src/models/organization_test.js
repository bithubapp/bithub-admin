import 'steal-mocha';
import chai from 'chai';
import Organization from './organization';

let assert = chai.assert;

describe('models/organization', function() {
  it('getList', function(done){
    Organization.getList({}).then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items[0].description, 'First item');
      done();
    });
  });
});
