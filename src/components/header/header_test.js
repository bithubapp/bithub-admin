import $ from 'jquery';
import 'steal-mocha';
import chai from 'chai';
import stache from 'can-stache';
import {ViewModel} from './header';

const assert = chai.assert;
let vm;

describe('bithub-admin/components/header', () => {
	describe('view model', () => {
		beforeEach(() => {
			vm = new ViewModel();
		});
		it('sets props', () => {
			assert.isObject(vm.organizations);
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
