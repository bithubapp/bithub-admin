import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './moderation-settings.less';
import template from './moderation-settings.stache';

export const ViewModel = DefineMap.extend({
	formVisible: {
		type: 'boolean',
		value: false
	},
	toggleForm: function (force) {
		let formVisible = !this.formVisible;
		if (typeof force === 'string') {
			if (force === 'show') {
				formVisible = true;
			}
			if (force === 'hide') {
				formVisible = false;
			}
		}
		this.formVisible = formVisible;
	}
});

export default Component.extend({
  tag: 'moderation-settings',
  ViewModel,
  template
});
