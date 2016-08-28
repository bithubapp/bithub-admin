import 'steal-mocha';
import $ from 'jquery';
import chai from 'chai';
import stache from 'can-stache';
import {ViewModel} from './dropdown-menu';

const assert = chai.assert;
let vm;

describe('bithub-admin/components/dropdown-menu', () => {
	describe('view model', () => {
		beforeEach(() => {
			vm = new ViewModel({});
		});
		it('sets props', () => {
			assert.equal(vm.visible, false);
		});
	});

	describe('component', () => {
		beforeEach(() => {
			$('#sandbox').html(stache('<dropdown-menu/>'));
		});
		it('renders', () => {
			assert.equal($('dropdown-menu').length, 1);
		});
	});
});
