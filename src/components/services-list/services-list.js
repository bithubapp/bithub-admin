import $ from 'jquery';
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './services-list.less';
import template from './services-list.stache';

export const ViewModel = DefineMap.extend({
	deletingService: null,
	init() {
		this.attr({
			shownErrors: [],
			hiddenNoResults: []
		});
	},
	hideNoResults(service) {
		this.hiddenNoResults.push(service);
	},
	destroyService(service) {
		this.deletingService = service;
	},
	editService(service) {
		this.currentService = service;
	},
	toggleErrorShowing(service) {
		const shownErrors = this.shownErrors;
		const index = shownErrors.indexOf(service);
		if (index > -1) {
			shownErrors.splice(index, 1);
		} else {
			shownErrors.push(service);
		}
	}
});

export default Component.extend({
	tag: 'bh-services-list',
	template,
	ViewModel,
	helpers: {
		isCurrentService(service, opts) {
			let check;

			service = $.isFunction(service) ? service() : service;

			check = service === this.currentService;
			check = check && !service.isNew();

			return check ? opts.fn(opts.scope.add(service)) : opts.inverse(opts.scope.add(service));
		},
		isServiceCurrentlyLoading(service, opts) {
			const currentlyLoading = this.state.loadingServices;

			service = $.isFunction(service) ? service() : service;

			if (service.isLoading() || (currentlyLoading.indexOf(service) !== -1 && !service.error && !service.anoResults)) {
				return opts.fn();
			}
		},
		serviceHasNoResults(service, opts) {
			service = $.isFunction(service) ? service() : service;

			if (service.noResults && this.hiddenNoResults.indexOf(service) === -1) {
				return opts.fn();
			}
		},
		showErrorsForService(service, opts) {
			service = $.isFunction(service) ? service() : service;

			if (service.error && this.shownErrors.indexOf(service) !== -1) {
				return opts.fn();
			}
		}
	}
});
