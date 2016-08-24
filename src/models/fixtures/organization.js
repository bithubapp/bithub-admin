import fixture from 'can-fixture';
import currentOrgData from './data/current-organization.json';

const store = fixture.store([currentOrgData]);

fixture({
  'GET /api/v3/current/organization': store.findAll,
  'GET /api/v3/current/organization/{id}': store.findOne,
  'POST /api/v3/current/organization': store.create,
  'PUT /api/v3/current/organization/{id}': store.update,
  'DELETE /api/v3/current/organization/{id}': store.destroy
});

export default store;
