import fixture from 'can-fixture';

const session = {
	'_csrf_token': 'MyFakeToken=',
	'warden.user.user.key': [
		[1],
		'$2a$10$3FOSR2h8FOgpMRnnA2m4a.'
	]
};

const returnSession = () => {
	return session;
};

fixture({
	'GET /api/session': returnSession,
	'POST /api/session': returnSession,
 	'DELETE /api/session': () => {
		return {};
	}
});

export default returnSession;
