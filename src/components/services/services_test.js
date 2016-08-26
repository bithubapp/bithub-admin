import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './services';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/services', function(){
  it('Sets the current service', function(){
    var vm = new ViewModel();
    assert.equal(vm.currentService, undefined, 'The current service is undefined');
    vm.toggleNewService(vm.services[1]);
    console.log(vm.currentService);
    assert.equal(vm.currentService.feedName, vm.services[1].name, 'The current service is set');
  });
});
