/**
 * @module {can-component} Header
 * @parent bithub-admin.components
 *
 * @signature '<app-header></app-header>'
 * Import file then add tag to template. No parameters are required.
 *
 * @description Provides custom element that displays the application header
 *
 * @body
 * this component displays the main application top bar that holds the main
 * application navigation elements
 *
 */

import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from './header.stache';
import 'bithub-admin/plugins/attr-is'

import {organizations, hubs, account} from './dropdown-configs';

export const ViewModel = DefineMap.extend({
	/**
	* @property {object} dropDownItems
	* dropdown menus configuration object
	*/
	organizations,
	hubs,
	account,
	hub: {}
});

export default Component.extend({
  tag: 'app-header',
  ViewModel: ViewModel,
  template
});
