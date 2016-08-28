import $ from 'jquery';
import 'can-stache';
import './demo.less!';
import 'bithub-admin/models/fixtures/';
import '../model-explorer';
import debugUtils from 'bithub-admin/utils/debug-util/';
import template from './demo.stache!';
import models from './models';

debugUtils();

$('#demo').append(template({
	models
}));
