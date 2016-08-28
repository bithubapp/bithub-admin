import $ from 'jquery';
import 'steal-mocha';
import chai from 'chai';
import stache from 'can-stache';
import {ViewModel} from './header';

const assert = chai.assert;
let vm;

describe('bithub-admin/components/header', () => {
	xdescribe('view model', () => {
		beforeEach(() => {
			vm = new ViewModel({});
		});
		it('sets props', () => {
			assert.isObject(vm.organizations, 'organizations is object');
		});
	});

	describe('component', () => {
		beforeEach(() => {
			$('#sandbox').html(stache('<app-header/>'));
		});
		it('renders', () => {
			assert.equal($('app-header').length, 1);
		});
	});
});
