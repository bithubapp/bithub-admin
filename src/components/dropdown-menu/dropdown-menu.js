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

export const ViewModel = DefineMap.extend(
  /** @prototype */
{
	/**
	* @property
	*/
	title: 'string',
	/**
	* @property
	*/
	visible: {
		type: 'boolean',
		value: 'false'
	},
	/**
	* @property
	*/
	items:{},
	/**
	* @function toggle
	* opens and closes the dropdown
	*/
	toggle: function () {
		this.visible = !this.visible;
	}
});

export default Component.extend({
	tag: 'bithub-dropdown-menu',
	ViewModel,
	template
});
