import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './service-forms.less';
import template from './service-forms.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the service-forms component'
  }
});

export default Component.extend({
  tag: 'service-forms',
  ViewModel: ViewModel,
  template
});
