import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const AccountInvitation = DefineMap.extend({
  seal: false
}, {
  'id': '*'
});

AccountInvitation.List = DefineList.extend({
  '*': AccountInvitation
});

export const accountInvitationConnection = superMap({
  url: '/accounts/invitation',
  idProp: 'id',
  Map: AccountInvitation,
  List: AccountInvitation.List,
  name: 'account-invitation'
});

tag('account-invitation-model', accountInvitationConnection);

export default AccountInvitation;
