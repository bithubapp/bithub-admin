import $ from 'jquery';
import DefineMap from 'can-define/map/map';
import Fixtures from 'can-fixture';
import ViewModel from 'can-view-model';

import 'can-stache';
import './demo.less!';
import 'bithub-admin/models/fixtures/';
import '../model-explorer';

import template from './demo.stache!';
import models from './models';

import './demo.less!';

if (!window.can) {
	window.can = {};
}
window.can.viewModel = ViewModel;

$('#demo').append(template({
    models: models,
}));
