import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const ServiceConfig = DefineMap.extend({
  seal: false
}, {
  'id': '*',
  name: 'string',
  icon: 'string',
  tags: 'array',
});

ServiceConfig.List = DefineList.extend({
  '*': ServiceConfig
});

export const serviceConfigConnection = superMap({
  Map: ServiceConfig,
  List: ServiceConfig.List,
  name: 'serviceConfig'
});

tag('serviceConfig-model', serviceConfigConnection);

export default ServiceConfig;
