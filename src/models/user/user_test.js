import 'steal-mocha';
import chai from 'chai';
import {User} from './user';

const assert = chai.assert;

describe('models/user', () => {
	describe('when attempting user login', () => {
		it('returns user object', done => {
			User.get({id: 1}).then(user => {
				assert.equal(user.email, 'mark@bitovi.com');
				done();
			});
		});
	});
});
