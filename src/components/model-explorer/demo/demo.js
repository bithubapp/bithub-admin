import $ from 'jquery';
import 'can-stache';
import './demo.less!';
import 'bithub-admin/models/fixtures/';
import '../model-explorer';
import template from './demo.stache!';
import models from './models';
import debugUtils from 'bithub-admin/utils/debug-util/';

debugUtils();

$('#demo').append(template({
	models
}));
