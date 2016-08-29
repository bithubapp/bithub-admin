import 'steal-mocha';
import chai from 'chai';
import User from './user';

const assert = chai.assert;

describe('models/user', () => {
	describe('when attempting user login', () => {
		it('returns user object', done => {
			User.get({email: 'mark@bitovi.com'}).then(user => {
				assert.equal(user.email, 'mark@bitovi.com');
				done();
			});
		});
	});
});
