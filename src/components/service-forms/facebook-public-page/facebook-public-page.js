import Component from 'can-component';
import DefineMap from 'can-define/map/';
import template from "./facebook-public-page.stache!";
import "./facebook-public-page.less!";

export default Component.extend({
	tag: 'bh-facebook-page-service',
	template,
	scope : {
		loading: "",
		loadedPage: null,
		error: "",
		init : function(){
			
		}
	}
});
