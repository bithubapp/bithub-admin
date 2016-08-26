import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const Hub = DefineMap.extend({
  seal: false
}, {
  id: 'number',
  name: 'string',
  brand_id: 'number',
  approved_by_default: 'boolean',
  published: 'boolean',
  created_at: 'string',
  updated_at: 'string'
});

Hub.List = DefineList.extend({
  '*': Hub
});

export const hubConnection = superMap({
  url: '/api/hub',
  idProp: 'id',
  Map: Hub,
  List: Hub.List,
  name: 'hub'
});

tag('hub-model', hubConnection);

export default Hub;
