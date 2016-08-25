import 'steal-mocha';
import chai from 'chai';
import Session from './session';

const assert = chai.assert;
const user = {
	email: 'juan@bitovi.com'
};
let session;

describe('models/session', () => {
	beforeEach(() => {
		session = new Session(user);
	});

	describe('when attempting to create a session', () => {
		beforeEach(done => {
			session.save()
				.then(resp => {
					done();
					return resp;
				});
		});
		it('gets back session data', () => {
			assert.equal(session._csrf_token, 'MyFakeToken=');
		});
	});

	describe('when attempting to get a session', () => {
		beforeEach(done => {
			Session.get({}).then(resp => {
				session = resp;
				done();
			});
		});
		it('gets back session data', () => {
			assert.equal(session._csrf_token, 'MyFakeToken=');
		});
	});

	describe('when attempting to destroy a session', () => {
		it('gets back empty object', done => {
			session.destroy({}).then(resp => {
				assert.isObject(resp);
				done();
			});
		});
	});
});
