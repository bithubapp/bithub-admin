import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/embed': store.findAll,
  'GET /api/embed/{id}': store.findOne,
  'POST /api/embed': store.create,
  'PUT /api/embed/{id}': store.update,
  'DELETE /api/embed/{id}': store.destroy
});

export default store;
