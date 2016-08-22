import 'steal-mocha';
import chai from 'chai';
import {Account} from './account';

const assert = chai.assert;

describe('models/account', function () {
	it('gets all account information', function (done) {
		Account.getList().then(function (accounts) {
			assert.equal(accounts.length, 1);
			assert.equal(accounts[0].email, 'mark@bitovi.com');
			done();
		});
	});
	it('gets specific account information', function (done) {
		Account.get({id: 614}).then(function (account) {
			assert.equal(account.email, 'mark@bitovi.com');
			done();
		});
	});
	it('creates a new account', function (done) {
		const newAccount = new Account({
			name: 'name',
			email: 'example@example.com',
			organizations: [{
				id: 129,
				name: 'Wow Bao'
			}]
		});
		assert.equal(newAccount.email, 'example@example.com');
		done();
	});
	it('checks to see if an account has multiple organizations', function (done) {
		const newAccount = new Account({
			id: 123,
			name: 'name',
			email: 'example@example.com',
			organizations: [{
				id: 129,
				name: 'Wow Bao'
			}]
		});
		assert.equal(newAccount.hasMultipleOrganizations(), false);
		Account.get({id: 614}).then(function (account) {
			assert.equal(account.hasMultipleOrganizations(), true);
			done();
		});
	});
});
