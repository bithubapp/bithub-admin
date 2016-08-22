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
	}
});

route(':page', {page: 'home'});
route(':page/:slug', {slug: null});
route(':page/:slug/:action', {slug: null, action: null});

export default AppViewModel;
