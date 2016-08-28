import callbacks from 'can-view-callbacks';

const tags = callbacks._tags;

callbacks.attr('is', function (el, attrData) {
	const componentTag = el.getAttribute(attrData.attributeName);
	const createComponent = tags[componentTag];
	if (createComponent) {
		createComponent(el, {
			scope: attrData.scope,
			options: attrData.options,
			subtemplate: null,
			templateType: 'stache',
			parentNodeList: undefined // attrData.nodeList?
		});
	}
});
