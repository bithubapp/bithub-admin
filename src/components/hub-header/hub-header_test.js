import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './hub-header';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/hub-header', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.message, 'This is the hub-header component');
  });
});
