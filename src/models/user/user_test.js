import 'steal-mocha';
import chai from 'chai';
import User from './user';

let assert = chai.assert;

describe('models/user', function() {
	describe('when attempting user login', function () {
		it('returns user object', function(done){
			User.get({id: 1}).then(function(user) {
				assert.equal(user.email, 'mark@bitovi.com');
				done();
			});
	    });
	});
});
