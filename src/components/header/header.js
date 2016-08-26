/**
 * @module {can-component} Header
 * @parent bithub-admin.components
 *
 * @signature '<app-header></app-header>'
 * Import file then add tag to template. No parameters are required.
 *
 * @description Provides custom element that displays the application header
 *
 * @body
 * this component displays the main application top bar that holds the main
 * application navigation elements
 *
 */

import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from './header.stache';

const dropdownConfigs = {
  organizations: [{
    title: 'Organization Settings',
    icon: '',
    seperator: false,
    action: function() {}
  }, {
    title: 'Payment Settings',
    icon: '',
    seperator: false,
    action: function() {}
  }, {
    title: 'Team Members',
    icon: '',
    seperator: false,
    action: function() {}
  }, {
    title: '',
    icon: '',
    seperator: true,
    action: null
  },{
    // this object is replaced
    // with the items that come
    // from the organizations model
  }, {
    title: 'Add an Organization',
    icon: '',
    seperator: false,
    action: function() {}
  }],
  hubs: [{
    // this object is replaced
    // with the items that come
    // from the organizations model
  }, {
    title: '',
    icon: '',
    seperator: true,
    action: null
  }, {
    title: 'Add a Hub',
    icon: '',
    seperator: false,
    action: function() {}
  }],
  account: [{
    title: 'Account Settings',
    icon: '',
    seperator: false,
    action: function() {}
  }, {
    title: 'Logout',
    icon: '',
    seperator: false,
    action: function() {}
  }],
};

export const ViewModel = DefineMap.extend({
  /**
   * @property {object} dropDownItems
   * dropdown menus configuration object
   */
  dropDownItems: {
    type: 'any',
    value: dropdownConfigs
  }
});

export default Component.extend({
  tag: 'app-header',
  ViewModel: ViewModel,
  template
});
