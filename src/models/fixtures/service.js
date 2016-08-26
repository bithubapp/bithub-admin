import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/services': store.findAll,
  'GET /api/services/{id}': store.findOne,
  'POST /api/services': store.create,
  'PUT /api/services/{id}': store.update,
  'DELETE /api/services/{id}': store.destroy
});

export default store;
