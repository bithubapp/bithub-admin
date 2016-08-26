import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from './hub-header.stache';

export const ViewModel = DefineMap.extend({
	activeTab: 'string',
	updateActiveTab: function (newTab) {
		this.activeTab = newTab;
	}
});

export default Component.extend({
	tag: 'hub-header',
	ViewModel,
	template
});
