import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

// import Organization from './organization.js';

export const Account = DefineMap.extend({
  // properties
	id: '*',
	organizations: Array,
	password: {
		value: ''
	},
	current_password: {
		value: ''
	},
	email: 'string',
	name: 'string',

  // methods
	hasMultipleOrganizations() {
		const organizations = this.organizations;
		return organizations && organizations.length > 1;
	}
});

Account.List = DefineList.extend({
	'*': Account
});

export const accountConnection = superMap({
	url: '/api/v3/current/account',
	idProp: 'id',
	Map: Account,
	List: Account.List,
	name: 'account'
});

tag('account-model', accountConnection);

export default Account;
