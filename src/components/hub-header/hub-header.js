import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from './hub-header.stache';

export const ViewModel = DefineMap.extend({
	message: {
		value: 'This is the hub-header component'
	}
});

export default Component.extend({
	tag: 'hub-header',
	ViewModel,
	template
});
