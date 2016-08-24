import $ from 'jquery';
import DefineMap from 'can-define/map/map';
import Fixtures from 'can-fixture';
import ViewModel from 'can-view-model';
import 'bithub-admin/utils/debug-utils';

import 'can-stache';
import './demo.less!';
import 'bithub-admin/models/fixtures/';
import '../model-explorer';

import template from './demo.stache!';
import models from './models';

import './demo.less!';

$('#demo').append(template({
    models: models,
}));
