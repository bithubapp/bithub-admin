import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
	message: {
		value: 'Hello World!',
		serialize: false
	},
	title: {
		value: 'bithub-admin',
		serialize: false
	},
	page: 'string',
	slug: 'string',
	action: 'string',
	route: 'string'
});

route(':page', {page: 'home'});
route(':page/:slug', {slug: null});
route(':page/:slug/:action', {slug: null, action: null});

export default AppViewModel;
