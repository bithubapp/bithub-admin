import 'steal-mocha';
import chai from 'chai';
import {ViewModel} from './services';

const assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/services', () => {
	it('Sets the current service', () => {
		const vm = new ViewModel();
		assert.equal(vm.currentService, undefined, 'The current service is undefined');
		vm.toggleNewService(vm.services[1]);
		assert.equal(vm.currentService.feedName, vm.services[1].name, 'The current service is set');
	});
});
