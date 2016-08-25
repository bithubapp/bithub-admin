import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const Embed = DefineMap.extend({
  seal: false
}, {
  'id': '*'
});

Embed.List = DefineList.extend({
  '*': Embed
});

export const embedConnection = superMap({
  url: '/api/embed',
  idProp: 'id',
  Map: Embed,
  List: Embed.List,
  name: 'embed'
});

tag('embed-model', embedConnection);

export default Embed;
