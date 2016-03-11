import can from "can/";
import initView from "./bit-list.stache!";
import InteractionEvent from "models/interaction_event";

import "can/construct/super/";
import "can/construct/proxy/";
import "bithub-embed/bits_vertical_infinite/";
import "bithub-embed/bits_vertical_infinite_grouped/";

export default can.Control.extend({
	pluginName : 'bh-bits',
}, {
	setup : function(el, opts){
		opts = opts || {};
		opts.isLoading   = can.compute(false);
		opts.hasNextPage = can.compute(true);
		return this._super(el, opts);
	},
	init : function(){
		this.__timeouts = {};

		this.currentOffset = can.compute(0);
		this.bits = this.options.state.attr('bits');

		this.element.html(initView({
			isLoading : this.options.isLoading,
			state : this.options.state,
			bits: this.bits
		}));



	},
	'interaction:scroll' : function(el, ev, hubId){
		if(!this.__savedScrollInteraction){
			InteractionEvent.createScrollInteraction(this.options.state.attr('tenant'), hubId);
			this.__savedScrollInteraction = true;
		}
	},
	'interaction:link' : function(el, ev, hubId, entityId){
		if(!this.options.state.isAdmin()){
			InteractionEvent.createLinkClickedInteraction(this.options.state.attr('tenant'), hubId, entityId);
		}
	},
	'interaction:share' : function(el, ev, hubId, entityId, target){
		if(!this.options.state.isAdmin()){
			InteractionEvent.createEntitySharedInteraction(this.options.state.attr('tenant'), hubId, entityId, target);
		}
	}
});
