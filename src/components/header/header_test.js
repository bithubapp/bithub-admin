import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './header';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/header', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the app-header component');
  });
});
