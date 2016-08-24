import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from "./service-form.stache!";

import './service-form.less!';

import '../service-forms/disqus-forum/';
import '../service-forms/facebook-page/';
import '../service-forms/facebook-public-page/';
import '../service-forms/foursquare-venue/';
import '../service-forms/github-org/';
import '../service-forms/github-repo/';
import '../service-forms/instagram-tag/';
import '../service-forms/instagram-user/';
import '../service-forms/meetup-group/';
import '../service-forms/rss-site/';
import '../service-forms/stackexchange-tags/';
import '../service-forms/tumblr-blog/';
import '../service-forms/tumblr-tag/';
import '../service-forms/twitter-followers/';
import '../service-forms/twitter-hashtag/';
import '../service-forms/twitter-term/';
import '../service-forms/twitter-user-timeline/';
import '../service-forms/twitter-favorites/';
import '../service-forms/twitter-user-retweets/';
import '../service-forms/youtube-channel/';
import '../service-forms/youtube-playlist/';
import '../service-forms/youtube-user/';
// import 'components/oauthorizer/';

// import 'components/helpers';

const FEED_INFOS = {
	foursquare: 'You must be a venue manager to be able to add a venue.'
};

const makeTemplate = function(feed, type){
	const componentName = ['bh', feed, type.replace(/_/g, '-'), 'service'].join('-');
	let template = `<${componentName} map="{service}" errors="{errors.config}"></${componentName}>{{{saveButtons}}}`;
	// let needsOAuth = Models.Service.needsOAuth[feed];

	// let needsOAuth = needsOAuth && can.inArray(type, needsOAuth.types) > -1;

	// if(needsOAuth){
	// 	template =
	// 		`<bh-oauthorizer feed="${feed}" service="{service}">',
	// 			${template}
	// 		</bh-oauthorizer>`;
	// }
	return can.stache(template);
};

export default Component.extend({
	tag : 'bh-service-form',
	template: template,
	// scope : {
	// 	isHidden: false,
	// 	missingConfig : false,
	// 	errors: null,
	// 	typeErros: null,
	// 	saveDisabled : false,
	// 	define : {
	// 		service : {
	// 			set : function(val){
	// 				this.clearErrors();
	// 				return val;
	// 			}
	// 		}
	// 	},
	// 	saveService : function(formData, el, ev){
	// 		ev.preventDefault();

	// 		const self = this;
	// 		const service = this.service;
	// 		const services = this.services;
	// 		this.compute('service');

	// 		service.embed_id = this.state.hubId;
	// 		if(service.isNew()){
	// 			services.unshift( service );
	// 		}

	// 		service.save( function( newService ) {
	// 			self.clearService();
	// 		}, function( error ) {
	// 			const index = services.indexOf(service);
	// 			const attrs = {
	// 				isHidden: false
	// 			};
	// 			let errorsResponse;
	// 			let errors, typeErrors;

	// 			services.splice(index, 1);

	// 			if(error.status === 400){
	// 				attrs.missingConfig = true;
	// 			} else if(error.status = 406){
	// 				try {
	// 					errorsResponse = JSON.parse(error.responseText).errors;
	// 					errors = errorsResponse.config_attrs;
	// 					typeErrors = errorsResponse.type_name;
	// 				} catch(e){
	// 					errors = {};
	// 				}
	// 				attrs.errors = errors;
	// 			}

	// 			if(typeErrors){
	// 				self.attr('typeErrors', typeErrors);
	// 			}

	// 			Models.Service.errored(service);

	// 			self.attr(attrs);
	// 		});

	// 		this.attr({
	// 			isHidden: service.isNew(),
	// 			missingConfig: false,
	// 			errors: null
	// 		});
	// 	},
	// 	feedInfo : function(){
	// 		return FEED_INFOS[this.attr('service.feed_name')];
	// 	},
	// 	clearService : function(){
	// 		can.batch.start();
	// 		this.attr({
	// 			service: null,
	// 			saveDisabled: false
	// 		});
	// 		this.clearErrors();
	// 		can.batch.stop();
	// 	},
	// 	clearErrors : function(){
	// 		this.attr({
	// 			errors: null,
	// 			typeErrors: null,
	// 			missingConfig: false
	// 		});
	// 	},
	// 	currentServiceFeedName : function(){
	// 		const service = this.service;
	// 		if(!service) {
	// 			return;
	// 		}
	// 		const feed = service.feed_name;
	// 		return Models.Service.feeds[feed];
	// 	}
	// },
	// events : {
	// 	"service:saveDisabled" : function(){
	// 		setTimeout(() => {
	// 			if(this.element){
	// 				this.element.find('button.save-service').prop('disabled', true);
	// 			}
	// 		}, 1);
			
	// 	},
	// 	"service:saveEnabled" : function(){
	// 		setTimeout(() => {
	// 			if(this.element){
	// 				this.element.find('button.save-service').prop('disabled', false);
	// 			}
	// 		}, 1);
	// 	}
	// },
	// helpers : {
	// 	renderForm : function(opts){
	// 		const service = this.service;
	// 		let feed, type;
			
	// 		if(!service){
	// 			return;
	// 		}

	// 		feed = service.feed_name;
	// 		type = service.type_name;


	// 		if(type && feed){
	// 			return makeTemplate(feed, type)(opts.scope, {
	// 				saveButtons : function(){
	// 					return opts.fn();
	// 				}
	// 			});
	// 		}
	// 	}
	// }
});
