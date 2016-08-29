/* global window */
/**
 * @module {function} debug-util Debug Util
 * @parent bithub-admin.utils
 *
 * @signature 'debugUtil()'
 *
 * Adds legacy utilities to the window object for debugging purposes.
 *
 * @body
 * Needed mostly to debug demos and other items. Will create a `can` object on
 * `window` which will have `fixture` and `viewModel`, as well as `$` (jQuery).
 */
import $ from 'jquery';
import fixture from 'can-fixture';
import viewModel from 'can-view-model';

export const can = {};

const defaultOpts = {
	clearLocalStorage: true
};

// Add all the things
can.$ = $;
can.fixture = fixture;
can.viewModel = viewModel;

export default (opts) => {
	opts = $.extend({}, defaultOpts, opts || {});

	// Not sure how SSR handles window, so added this just in case
	if (window) {
		// Make sure `can` is on window
		if (!window.can) {
			window.can = can;
		}
		if (window.localStorage && opts.clearLocalStorage) {
			window.localStorage.clear();
		}
	}
};
