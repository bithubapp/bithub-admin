import 'steal-mocha';
import chai from 'chai';
import {ViewModel} from './hub-header';

const assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/hub-header', () => {
	it('Has message', () => {
		const vm = new ViewModel();
		assert.equal(vm.message, 'This is the hub-header component');
	});
});
