/**
 * @constructor {DefineMap} appstate App State
 * @parent bithub-admin.models
 *
 * @signature 'new AppState({})'
 *
 * Create new instance of AppState DefineMap.
 *
 * @body
 * Mostly used for route, can also contains non-serialized properties use to
 * manage high level application state.
 */
import DefineMap from 'can-define/map/';

export const Appstate = DefineMap.extend({

	/**
	 * @property {string} page Page
	 * The first part of the route; the page name.
	 */
	page: 'string',

	/**
	 * @property {string} slug Slug
	 * The second part of the route; the slug. This is usually a resource
	 * identifier like a hub name or organization id.
	 */
	slug: 'string',

	/**
	 * @property {string} action Action
	 * The third part of the route; the action. An action that is affecting, or
	 *  will affect, the slug.
	 */
	action: 'string',

	/**
	 * @property {string} route Route
	 * The whole route.
	 */
	route: 'string',

	/**
	 * @property {object} user User
	 * The user object, an instance of the [user] model.
	 */
	user: {
		Type: DefineMap,
		serialize: false
	},

	/**
	 * @property {object} session Session
	 * The session object, an instance of the [session] model.
	 */
	session: {
		Type: DefineMap,
		serialize: false
	},
	userLoggedIn: {
		get: function () {
			return !!(this.session && typeof this.user.id !== 'undefined');
		}
	}
});

export default Appstate;
