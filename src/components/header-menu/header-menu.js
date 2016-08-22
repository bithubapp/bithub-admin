import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './header-menu.less';
import template from './header-menu.stache';

export const ViewModel = DefineMap.extend({
  userMenu: {
    type: 'boolean',
    value: 'false'
  }
});

export default Component.extend({
  tag: 'bithub-header-menu',
  ViewModel: ViewModel,
  template
});
