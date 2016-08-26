/**
 * @module {can-component} Dropdown menu
 * @parent bithub-admin.components
 *
 * @signature `<bithub-dropdown-menu {title}="title" {items}="items" />`
 * Import file then add tag to template.
 *
 * @body
 *
 * ## Example
 * @demo components/dropdown-menu.html
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
  title: {
    type:'string'
  },
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
  items:{
    type:'observable'
  }
  /**
   * @function toggle
   * opens and closes the dropdown
   */
  toggle: function () {
    this.visible = !this.visible;
  },
});

export default Component.extend({
  tag: 'bithub-dropdown-menu',
  ViewModel: ViewModel,
  template
});
