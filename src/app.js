import $ from 'jquery';
import DefineMap from 'can-define/map/map';
import route from 'can-route';
import 'can-route-pushstate';

import fixture from 'bithub-admin/models/fixtures/';
import AppViewModel from 'bithub-admin/models/appstate/';

import debugUtils from 'bithub-admin/utils/debug-util/';
// TODO Do not call this on production or with build.
debugUtils();

route(':page', {page: 'home'});
route(':page/:slug', {slug: null});
route(':page/:slug/:action', {slug: null, action: null});

export default AppViewModel;
