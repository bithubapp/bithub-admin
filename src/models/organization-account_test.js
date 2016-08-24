import 'steal-mocha';
import chai from 'chai';
import OrganizationAccount from './organization-account';

let assert = chai.assert;

describe('models/organization-account', function() {
  it('getList', function(done){
    OrganizationAccount.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.attr('0.description'), 'First item');
      done();
    });
  });
});
