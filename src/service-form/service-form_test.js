import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './service-form';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/service-form', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the service-form component');
  });
});
