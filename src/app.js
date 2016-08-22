<<<<<<< HEAD
import DefinedMap from 'can-define/map/map';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefinedMap.extend('AppViewModel',{
	seal: false
},{
	define: {
		message: {
			value: 'Hello World!',
			serialize: false
		},
		title: {
			value: 'bithub-admin',
			serialize: false
		}
=======
import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
	seal: false
},{
	message: {
		value: 'Hello World!',
		serialize: false
	},
	title: {
		value: 'bithub-admin',
		serialize: false
>>>>>>> 072758159e1c123471bd5b6da2b500b130c7288e
	}
});

route(':page', {page: 'home'});
route(':page/:slug', {slug: null});
route(':page/:slug/:action', {slug: null, action: null});

export default AppViewModel;
