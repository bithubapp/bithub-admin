import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './dropdown-menu';

let assert = chai.assert;

describe('bithub-admin/components/dropdown-menu', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the bithub-header-menu component');
  });
});
