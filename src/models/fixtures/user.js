import $ from 'jquery';
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
	'GET /api/users': function (req, res) {
		const params = req.data;
		const allData = store.findAll();
		let resp;
		// Check if just find all or if some filtering is present
		if ($.isEmptyObject(params)) {
			resp = allData;
		} else{
			if (params.where) {
				// Find one
				$.each(allData.data, (index, item) => {
					if (item.email === params.where.email) {
						resp = item;
						return false;
					}
				});

				// Noting found, return 404
				if ($.isEmptyObject(resp)) {
					res(404, 'Resource not found.');
				}
			}
		}
		return resp;
	},
	'POST /api/users': store.create,
	'PUT /api/users/{id}': store.update,
	'DELETE /api/users/{id}': store.destroy
});

export default store;
