import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const OrganizationAccount = DefineMap.extend({
  seal: false
}, {
  'id': '*',
  account: {
	  Value: Object
  }
});

OrganizationAccount.List = DefineList.extend({
  '*': OrganizationAccount
});

export const organizationAccountConnection = superMap({
  url: '/api/v3/current/organization/accounts',
  idProp: 'id',
  Map: OrganizationAccount,
  List: OrganizationAccount.List,
  name: 'organization-account'
});

tag('organization-account-model', organizationAccountConnection);

export default OrganizationAccount;
