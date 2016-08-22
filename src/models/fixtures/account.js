import fixture from 'can-fixture';
import account from './data/current-account.json';

const store = fixture.store([account]);

fixture({
	'GET /api/v3/current/account': store.findAll,
	'GET /api/v3/current/account/{id}': store.findOne,
	'POST /api/v3/current/account': store.create,
	'PUT /api/v3/current/account/{id}': store.update,
	'DELETE /api/v3/current/account/{id}': store.destroy
});

export default store;
