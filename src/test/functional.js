import func from 'funcunit';
import mocha from 'steal-mocha';

func.attach(mocha);

describe('bithub-admin functional smoke test', () => {
	beforeEach(() => {
		func.open('../development.html');
	});

	it('bithub-admin main page shows up', () => {
		func('title').text('bithub-admin', 'Title is set');
	});
});
