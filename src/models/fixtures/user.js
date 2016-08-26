import fixture from 'can-fixture';

const store = fixture.store([{
	id: 0,
	email: 'juan@bitovi.com',
	organizations: [
		{
			"id": 1,
			"name": "inquisitive_cheeseball_9000",
			"created_at": "2016-08-24T13:43:52.614Z",
			"updated_at": "2016-08-24T13:43:52.614Z"
		}
	]
}, {
	id: 1,
	email: 'mark@bitovi.com',
	organizations: [
		{
			"id": 2,
			"name": "inquisitive_beach_2927",
			"created_at": "2016-08-24T13:43:52.614Z",
			"updated_at": "2016-08-24T13:43:52.614Z"
		}
	]
}]);

fixture({
	'GET /api/users': store.findAll,
	'GET /api/users/{id}': store.findOne,
	'POST /api/users': store.create,
	'PUT /api/users/{id}': store.update,
	'DELETE /api/users/{id}': store.destroy
});

export default store;
