import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './services-list';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/services-list', function(){
  xit('Has message', function(done){
    var vm = new ViewModel();
    assert.equal(vm.message, 'This is the components-services-list component');
    done()
  });
});
