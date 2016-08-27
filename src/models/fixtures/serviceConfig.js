import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /serviceConfig': store.findAll,
  'GET /serviceConfig/{id}': store.findOne,
  'POST /serviceConfig': store.create,
  'PUT /serviceConfig/{id}': store.update,
  'DELETE /serviceConfig/{id}': store.destroy
});

export default store;
