import $ from 'jquery';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import OrgAccount from 'bithub-admin/models/organization-account';
import AccountInvitation from 'bithub-admin/models/account-invitation';

export const Organization = DefineMap.extend({
	seal: false,
	current : function(){
		return this.findOne({});
	},
	choose : function(id){
		return $.ajax({
			url: '/api/v3/current/organization/choose?id=' + id,
			type: 'PUT'
		});
	}
},{
	id: 'number',
	accounts: Array,
	invitations: Array,
	name: 'string',
	invite : function(account){
		return OrgAccount.get({account: account})
			.then(function(res){
				return res.account;
			}, function(){
				return AccountInvitation.get({account: {email: email}});
			});
	},
	addInvitation: function(invitation){
		this.invitations.push(invitation);
	}
});

Organization.List = DefineList.extend({
	'*': Organization
});

export const organizationConnection = superMap({
  url: '/api/v3/current/organization',
  idProp: 'id',
  Map: Organization,
  List: Organization.List,
  name: 'organization'
});

tag('organization-model', organizationConnection);

export default Organization;
