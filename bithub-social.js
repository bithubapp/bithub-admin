/* global window, document, navigator, alert */
/* eslint quote-props: 0 */
/* eslint babel/object-shorthand: 0 */
/* eslint no-new: 0 */
/* eslint no-alert: 0 */

import $ from 'jquery';
import AppState from 'models/appstate';
import can from 'can/';
import Cookie from 'js-cookie';
import Models from 'models/';
import stache from 'can/view/stache/';
import bindModelEvents from './bind-model-events';
import initView from './bithub-social.stache!';

import 'can/map/define/';
import 'components/';
import 'components/helpers';
import 'components/service-config-formatter/';

const kickstart = function (selector) {
	const PresetChangeUpdater = can.Control.extend({
		'{appState} preset': 'updateIframeAttrs',
		'{appState} customPreset change': 'updateIframeAttrs',
		'{appState.adminPreset} change': 'updateIframeAttrs',
		updateIframeAttrs: function () {
			const self = this;
			clearTimeout(this.__updateIframeAttrs);
			this.__updateIframeAttrs = setTimeout(function () {
				self.options.appState.updateIframeAttrs();
			});
		}
	});

	if (/Mobi/.test(navigator.userAgent)) {
		if (Cookie.get('redirected-from-new-ui')) {
			Cookie.remove('redirected-from-new-ui');
		} else {
			window.location = '/new-bithub/';
			return;
		}
	}

	$.ajaxPrefilter(function (options, originalOptions) {
		if (options.type.toLowerCase() !== 'get') {
			options.data = JSON.stringify(originalOptions.data);
			options.contentType = 'application/json';
		}
	});

	$.when(Models.Brand.findOne({}), Models.Subscription.findOne({}), Models.Account.current(), Models.Organization.current()).done(function (brand, subscription, account, organization) {
		const appState = new AppState({
			currentBrand: brand,
			currentSubscription: subscription,
			currentAccount: account,
			currentOrganization: organization,
			embedType: 'admin'
		});

		new PresetChangeUpdater(document.documentElement, {
			appState: appState
		});

		can.route('', {page: 'hub-list'});
		can.route(':page');
		can.route(':page/:panel');
		can.route(':page/:panel/:hubId');
		can.route(':page/:panel/:hubId');

		can.route.map(appState);

		can.route.ready();

		bindModelEvents(appState);

		stache.registerHelper('ifCanAddHub', function (hubs, opts) {
			hubs = can.isFunction(hubs) ? hubs() : hubs;
			const canAddHub = appState.attr('currentSubscription').canAddHub(hubs);
			return canAddHub ? opts.fn() : opts.inverse();
		});

		stache.registerHelper('ifCanAddService', function (services, feed, type, opts) {
			feed = can.isFunction(feed) ? feed() : feed;
			type = can.isFunction(type) ? type() : type;
			services = can.isFunction(services) ? services() : services;
			const canAddService = appState.attr('currentSubscription').canAddService(services, feed, type);

			return canAddService ? opts.fn() : opts.inverse();
		});

		$(selector).html(initView({
			state: appState,
			switchOrganization: function (organization) {
				Models.Organization.choose(organization.id).then(function () {
					window.location.reload();
				}, function () {
					alert('There was a problem with the organization switching');
				});
			}
		}, {
			renderIframe: function (iframe) {
				iframe = can.isFunction(iframe) ? iframe() : iframe;
				return iframe;
			},
			renderPage: function () {
				const page = can.route.attr('page') || 'hub-list';
				const template = can.stache('<bh-' + page + ' state="{state}"></bh-' + page + '>');

				return template(this);
			},
			pageLink: function (page, title) {
				page = can.isFunction(page) ? page() : page;
				title = can.isFunction(title) ? title() : title;

				const currentPage = can.route.attr('page');
				const props = {
					class: 'btn '
				};

				props.class += page === currentPage ? 'btn-default' : 'btn-link';

				return can.route.link(title, {page: page}, props, false);
			},
			serviceStringTitle: function (service) {
				service = can.isFunction(service) ? service() : service;
				return $(can.stache('<bh-service-config-formatter service="{service}"></bh-service-config-formatter>')({service: service})).text();
			}
		}));
	}).fail(function () {
		console.log('FAIL', arguments);
	});
};

kickstart('#app');
