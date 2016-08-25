import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './embed';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/embed', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the bh-embed component');
  });
});
