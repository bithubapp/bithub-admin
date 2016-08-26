import DefineMap from 'can-define/map/map';

export default DefineMap.extend({
	view: 'string',
	order: 'string',
	decision: {
		type: 'string',
		value: 'inbox'
	},
	offset: 'number'
});
