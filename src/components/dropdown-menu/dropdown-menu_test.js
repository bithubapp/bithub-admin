import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './dropdown-menu';
import stache from 'can-stache';

const assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/dropdown-menu', function(){
	beforeEach(()=>{
		$('#sandbox').html(stache('<dropdown-menu/>'));
	});
	it('renders', function(){
		assert.equal($('dropdown-menu').length,1);
	});
});
