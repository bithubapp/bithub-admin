import $ from 'jquery';
// Create sandbox
if ($('#sandbox').length) {
	$('#sandbox').remove();
}
$('body').append('<div id="sandbox"></div>');

import 'bithub-admin/models/test';
import 'bithub-admin/test/functional';

import 'bithub-admin/components/services/services_test';
import 'bithub-admin/components/services-list/services-list_test';
import 'bithub-admin/components/header/header_test';
import 'bithub-admin/components/dropdown-menu/dropdown-menu_test';
