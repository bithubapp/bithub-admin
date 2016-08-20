/* eslint babel/new-cap: 0 */
import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('bithub-admin functional smoke test', {
	beforeEach() {
		F.open('../development.html');
	}
});

QUnit.test('bithub-admin main page shows up', function () {
	F('title').text('bithub-admin', 'Title is set');
});
