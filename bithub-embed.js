/* global window */
/* eslint no-lonely-if: 0 */
/* eslint no-new: 0 */

import $ from 'jquery';
import AppState from 'models/embed_appstate';
import can from 'can';
import Bit from 'models/bit';
import Hub from 'models/hub';
import BitList from 'bit-list/';
import Communicator from 'communicator/';
import 'can/route/';
import 'style/embed.less!';

const params = can.deparam(window.location.search.substr(1));
const isLoadedFromIframe = window.parent !== window;
const appState = new AppState();

const bodyClasses = [(isLoadedFromIframe ? 'iframe-context' : 'page-context'), 'embed'];

const triggerPartition = (function () {
	let partitionTimeout;
	return function (bits) {
		clearTimeout(partitionTimeout);
		partitionTimeout = setTimeout(function () {
			can.trigger(bits, 'partition');
		}, 100);
	};
})();

const kickstart = function (hub) {
	const initApp = function () {
		const div = $('<div id="app" />');

		$('#app-wrapper').html(div);
		console.log('INIT APP');
		new BitList(div, {
			state: appState
		});
	};
	const resetApp = (function () {
		let timeout;
		return function () {
			clearTimeout(timeout);
			setTimeout(function () {
				appState.reset();
				initApp();
			}, 1);
		};
	})();

	const communicator = Communicator.bind(window.parent, {
		updateAttrs: data => {
			appState.setAttrs(data);
		},
		reset: () => {
			resetApp();
		}
	});

	bodyClasses.push((params.theme || 'light') + '-theme');

	// can.route.map(appState);
	// can.route.ready();

	appState.attr('hub', hub);
	appState.setAttrs(params);
	appState.connectLiveService();

	if (!appState.isPublic()) {
		bodyClasses.push('admin-embed');
	}

	Bit.on('lifecycle', function (ev, bit) {
		const serviceIds = bit.attr('service_ids');
		const bits = appState.attr('bits');
		const isLive = appState.isLive();

		if (appState.isPublic() && isLive && bit.isPublic()) {
			bits.place(bit);
		} else {
			if (isLive && bits.indexOf(bit) === -1 && bit.attr('decision') === appState.attr('decision')) {
				bits.unshift(bit);
			}
		}

		triggerPartition(bits);

		if (serviceIds && (params.view !== 'public')) {
			communicator.send('loadedBits', serviceIds);
		}
	});

	Bit.on('disapproved', function (ev, bit) {
		const bits = appState.attr('bits');
		const index = bits.indexOf(bit);
		if (appState.isPublic() && index > -1) {
			bits.splice(index, 1);
		}
	});

	$('body').addClass(bodyClasses.join(' '));

	appState.on('view', resetApp);
	appState.on('order', resetApp);
	appState.on('decision', resetApp);
	appState.on('service_id', resetApp);
	appState.on('image_only', resetApp);

	appState.on('theme', function (ev, newTheme) {
		$('body').removeClass('dark-theme light-theme').addClass(newTheme + '-theme');
	});

	initApp();
};

Hub.findOne({id: params.hubId}).then(function (hub) {
	kickstart(hub);
}, function () {
	kickstart();
});
