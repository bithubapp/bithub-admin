import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './hub-controls.less';
import template from './hub-controls.stache';

export const ViewModel = DefineMap.extend({
  updateParams: function (prop, val) {
	  const params = this.params;
	  params[prop] = val;
  }
});

export default Component.extend({
  tag: 'hub-controls',
  ViewModel: ViewModel,
  template
});
