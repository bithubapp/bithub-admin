import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './header.less';
import template from './header.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the bithub-header component'
  }
});

export default Component.extend({
  tag: 'bithub-header',
  ViewModel: ViewModel,
  template
});
