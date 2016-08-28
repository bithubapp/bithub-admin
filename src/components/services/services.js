import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './services.less';
import {Service} from '../../models/service/service';
import {ServiceConfig} from '../../models/service/service-config';
import socialConfigs from '../../models/service/social-configs';
import template from './services.stache';

export const ViewModel = DefineMap.extend({
	currentService: {
		Type: Service
	},
	services: {
		value: new ServiceConfig.List(socialConfigs)
	},
	toggleNewService(ctx) {
		const feed = ctx.name;
		const currentService = this.currentService;
		const check = currentService && currentService.isNew() && currentService.feedName === feed;

		if (check) {
			this.currentService = null;
			return;
		}
		this.currentService = new Service({feedName: feed});
		return;
	}
});

export default Component.extend({
	tag: 'bh-services',
	template,
	ViewModel,
	helpers: {
		currentServiceIsNewAndHasFeedName(feedName, opts) {
			const currentService = this.currentService;

			// feedName = can.isFunction(feedName) ? feedName() : feedName;

			if (!currentService) {
				return opts.inverse(this);
			}

			if (currentService.isNew() &&
				currentService.feed_name === feedName) {
				return opts.fn(this);
			}
			return opts.inverse(this);
		}
	}
});
