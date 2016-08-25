import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './hub-controls';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/hub-controls', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the hub-controls component');
  });
});
