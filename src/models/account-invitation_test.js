import 'steal-mocha';
import chai from 'chai';
import AccountInvitation from './account-invitation';

let assert = chai.assert;

describe('models/account-invitation', function() {
  it('getList', function(done){
    AccountInvitation.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.attr('0.description'), 'First item');
      done();
    });
  });
});
