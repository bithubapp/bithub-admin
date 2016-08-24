import $ from 'jquery'
import fixture from 'can-fixture';
import viewModel from 'can-view-model';

export const can = {};

// Not sure how SSR handles window, so added this just in case
if (window) {

	// Make sure `can` is on window
	if (!window.can) {
		window.can = can;
	}

	// Add all the things
	can.$ = $;
	can.fixture = fixture;
	can.viewModel = viewModel;

}
