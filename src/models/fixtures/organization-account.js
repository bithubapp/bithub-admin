import fixture from 'can-fixture';


const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/v3/current/organization/account': store.findAll,
  'GET /api/v3/current/organization/account/{id}': store.findOne,
  'POST /api/v3/current/organization/account': store.create,
  'PUT /api/v3/current/organization/account/{id}': store.update,
  'DELETE /api/v3/current/organization/account/{id}': store.destroy
});

export default store;
