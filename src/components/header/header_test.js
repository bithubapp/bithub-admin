import $ from 'jquery';
import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './header';
import stache from 'can-stache';

const assert = chai.assert;

// ViewModel unit tests
describe('bithub-admin/components/header', function(){
	beforeEach(()=>{
		$('#sandbox').html(stache('<app-header/>'));
	});
	it('renders', function(){
		assert.equal($('app-header').length,1);
	});
});
