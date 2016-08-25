import fixture from 'can-fixture';

const store = fixture.store([{
	id: 0,
	email: 'juan@bitovi.com'
}, {
	id: 1,
	email: 'mark@bitovi.com'
}]);

fixture({
	'GET /api/api/users': store.findAll,
	'GET /api/api/users/{id}': store.findOne,
	'POST /api/api/users': store.create,
	'PUT /api/api/users/{id}': store.update,
	'DELETE /api/api/users/{id}': store.destroy
});

export default store;
