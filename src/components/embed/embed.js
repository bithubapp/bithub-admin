import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './embed.less';
import template from './embed.stache';

export const ViewModel = DefineMap.extend({
	params: {}
});

export default Component.extend({
	tag: 'bh-embed',
	ViewModel,
	template
});
