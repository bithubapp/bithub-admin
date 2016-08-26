import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './moderation-settings';

let assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/moderation-settings', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the moderation-settings component');
  });
});
