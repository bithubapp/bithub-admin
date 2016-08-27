/**
 * @constructor {DefineMap} session Session
 * @parent bithub-admin.models
 *
 * @signature 'new Session({})'
 *
 * Create new instance of Session DefineMap.
 *
 * @signature 'Session.<method-name>'
 *
 * Call a static method, like `get` or `getAll` which should return a new Session
 * instance populated by data received from request.
 *
 * @signature 'session.<method-name>'
 *
 * Call an instance method, like `save` or `destroy`.
 *
 * @body
 * Used mostly to create or destroy session on the server.
 */
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const Session = DefineMap.extend({
	seal: false
}, {});

Session.List = DefineList.extend({
	'*': Session
});

export const sessionConnection = superMap({
	url: {
		getData: 'GET /api/api/session',
		createData: 'POST /api/api/session',
		destroyData: 'DELETE /api/api/session'
	},
	idProp: 'id',
	Map: Session,
	List: Session.List,
	name: 'session'
});

tag('session-model', sessionConnection);

export default Session;
