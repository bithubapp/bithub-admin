// Main file that loads all model fixtures
import fixture from 'can-fixture';

if (window) {
	if (!window.can) {
		window.can = {};
	}
	window.can.fixture = fixture;
}

import 'bithub-admin/models/fixtures/organization';

import 'bithub-admin/models/fixtures/organization-account';

import 'bithub-admin/models/fixtures/account-invitation';
