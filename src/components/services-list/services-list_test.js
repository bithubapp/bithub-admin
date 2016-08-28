import 'steal-mocha';
import chai from 'chai';
import {ViewModel} from './services-list';

const assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/services-list', () => {
	xit('Has message', done => {
		const vm = new ViewModel();
		assert.equal(vm.message, 'This is the components-services-list component');
		done();
	});
});
