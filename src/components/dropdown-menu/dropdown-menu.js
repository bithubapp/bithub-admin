import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from './dropdown-menu.stache';
import $ from 'jquery';

export const ViewModel = DefineMap.extend({
  userMenu: {
    type: 'boolean',
    value: 'false'
  }
});

export default Component.extend({
  tag: 'bithub-dropdown-menu',
  ViewModel: ViewModel,
  template,
  events: {
    insterted: function(el,ev) {
      var $el;
      $el = $(this.element);

      $el.closest('ul').hide();
    },
    ' mouseenter':function(el,ev) {
      var $el;
      $el = $(this.element);
      $el.find('ul').show();
    },
    ' mouseleave':function(el,ev) {
      var $el;
      $el = $(this.element);
      $el.find('ul').hide();
    }

  }
});
