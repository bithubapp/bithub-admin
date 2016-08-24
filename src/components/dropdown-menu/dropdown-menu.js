import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from './dropdown-menu.stache';

export const ViewModel = DefineMap.extend({
  userMenu: {
    type: 'boolean',
    value: 'false'
  }
});

export default Component.extend({
  tag: 'bithub-dropdown-menu',
  ViewModel: ViewModel,
  template
});
