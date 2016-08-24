import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './service-forms';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/service-forms', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the service-forms component');
  });
});
