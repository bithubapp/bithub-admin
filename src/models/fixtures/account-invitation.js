import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /account-invitation': store.findAll,
  'GET /account-invitation/{id}': store.findOne,
  'POST /account-invitation': store.create,
  'PUT /account-invitation/{id}': store.update,
  'DELETE /account-invitation/{id}': store.destroy
});

export default store;
