/**
 * @module {can-component} Dropdown menu
 * @parent bithub-admin.components
 *
 * @description Provides dropdown menu for the Bithub Admin application
 *
 * @signature `<bithub-dropdown-menu {title}="title" {items}="items" />`
 *  Creates dropdown menu for Bithub Admin
 *
 * @param {can-define/map|Object}
 *
 * @body
 * ## Component initialization
 * ```html
 *    `<bithub-dropdown-menu {title}="title" {items}="items"></bithub-dropdown-menu>`
 * ```
 *
 * ## Example
 * @demo components/dropdown-menu/dropdown-menu.html
 *
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from './dropdown-menu.stache';

export const ViewModel = DefineMap.extend({

	/**
	* @property {string} Text to render for the dropdown trigger.
	*/
	buttonTitle: 'string',

	/**
	* @property {boolean} Whether dropdown options are visible.
	*/
	visible: {
		type: 'boolean',
		value: 'false'
	},

	/**
	* @property {Object} Dropdown options
	*/
	items: {},

	/**
	* @function toggle
	* Opens and closes the dropdown
	*/
	toggle() {
		this.visible = !this.visible;
	}
});

export default Component.extend({
	tag: 'dropdown-menu',
	ViewModel,
	template
});
