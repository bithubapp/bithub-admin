import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './services.less';
import template from './services.stache';
import Service from '../../models/service/service';
import ServiceConfig from '../../models/service/serviceConfig';
import socialConfigs from '../../models/service/socialConfigs';

export const ViewModel = DefineMap.extend({
	currentService: {
		Type: Service,
	},
	services: {
		value: new ServiceConfig.List(socialConfigs),
	},
	toggleNewService : function(ctx){
		const feed = ctx.name;
		const currentService = this.currentService;
		const check = currentService && currentService.isNew() && currentService.feedName === feed;

		if(check){
			this.currentService = null;
			return;
		}
		this.currentService = new Service({ feedName: feed })
		return;
	}
});

export default Component.extend({
	tag : 'bh-services',
	template,
	ViewModel,
	helpers : {
		currentServiceIsNewAndHasFeedName : function(feedName, opts){
			const currentService = this.currentService;

			// feedName = can.isFunction(feedName) ? feedName() : feedName;

			if(!currentService){
				return opts.inverse(this);
			}

			if(currentService.isNew() &&
				 currentService.feed_name === feedName){
				return opts.fn(this);
			}
			return opts.inverse(this);
		}
	}
});

window.vm = ViewModel