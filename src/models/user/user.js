/* eslint camelcase: ["error", {properties: "never"}] */
/**
 * @constructor {DefineMap} user User
 * @parent bithub-admin.models
 *
 * @signature 'new User({})'
 *
 * Create new instance of User DefineMap.
 *
 * @signature 'User.<method-name>'
 *
 * Call a static method, like `get` or `getAll` which should return a new User
 * instance populated by data received from request.
 *
 * @signature 'user.<method-name>'
 *
 * Call an instance method, like `save` or `destroy`.
 *
 * @body
 * Matches the User table on the backend.
 */
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

const User = DefineMap.extend({
	seal: false
}, {

	/**
	 * @property {number} id Id
	 * The unique id for the instance.
	 */
	id: 'number',

	/**
	 * @property {string} email Email
	 * The email address for the user.
	 */
	email: 'string',

	/**
	 * @property {string} created_at Created At
	 * When the user was created.
	 */
	created_at: 'string',

	/**
	 * @property {string} updated_at Updated At
	 * When the user was last updated.
	 */
	updated_at: 'string',

	/**
	 * @property {string} organizations Organizations
	 * A list of organization objects that user belongs to.
	 */
	organizations: {
		Value: Array
	}
});

User.List = DefineList.extend({
	'*': User
});

export const userConnection = superMap({
	url: {
		getListData: 'GET /api/users',
		getData: 'GET /api/users?includes[]=organizations&where[email]={email}',
		createData: 'POST /api/users',
		destroyData: 'DELETE /api/users'
	},
	idProp: 'id',
	Map: User,
	List: User.List,
	name: 'user'
});

tag('user-model', userConnection);

export default User;
