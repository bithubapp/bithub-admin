import fixture from 'can-fixture';

const store = fixture.store([{
	id: 0,
	name: 'My Fancy Hub',
	brand_id: 'brand-id-001',
	approved_by_default: true,
	published: true,
	created_at: '2016-08-25T20:50:51.327Z',
	updated_at: '2016-08-25T20:50:51.327Z'
}, {
	id: 0,
	name: 'My Other Hub',
	brand_id: 'brand-id-002',
	approved_by_default: false,
	published: false,
	created_at: '2016-08-25T20:50:51.327Z',
	updated_at: '2016-08-25T20:50:51.327Z'
}]);

fixture({
	'GET /api/hub': store.findAll, //?organization_id={orgId}
	'GET /api/hub/{id}': store.findOne,
	'POST /api/hub': store.create,
	'PUT /api/hub/{id}': store.update,
	'DELETE /api/hub/{id}': store.destroy
});

export default store;
