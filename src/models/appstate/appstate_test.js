import 'steal-mocha';
import chai from 'chai';
import {Appstate} from './appstate';

const assert = chai.assert;
let appState;

xdescribe('models/appstate', () => {
	beforeEach(() => {
		appState = new Appstate({});
	});
	it('creates defaults', () => {
		assert.equal(appState.page, '');
	});
});
