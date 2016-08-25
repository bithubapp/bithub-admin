/**
 * @module {can-component} Dropdown menu
 * @parent bithub-admin.components
 * @signature '<bithub-dropdown-menu></bithub-dropdown-menu>'
 * Import file then add tag to template.
 *
 * <bithub-dropdown-menu
 *   items="{items}"
 * >
 * </bithub-dropdown-menu>
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from './dropdown-menu.stache';

export const ViewModel = DefineMap.extend({
  title: {
    type:'string'
  },
  visible: {
    type: 'boolean',
    value: 'false'
  },
  toggle: function () {
    return this.visible ? this.visible = false : this.visible = true;
  }
});

export default Component.extend({
  tag: 'bithub-dropdown-menu',
  ViewModel: ViewModel,
  template
});
