import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const Service = DefineMap.extend({
	seal: false
}, {
	id: 'number',
	feedName: 'string',
	config: 'object'
});

Service.List = DefineList.extend({
	'*': Service
});

export const serviceConnection = superMap({
	url: '/api/services',
	idProp: 'id',
	Map: Service,
	List: Service.List,
	name: 'service'
});

tag('service-model', serviceConnection);

export default Service;
