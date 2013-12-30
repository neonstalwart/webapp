define([
	'dojo/dom-construct',
	'dojo/string',
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'../pages'
], function (domConstruct, string, declare, Widget, pages) {

	var LINK_TEMPLATE = '<li><a href="#/${href}">${label}</a></li>';

	return declare(Widget, {
		baseClass: 'navBar',

		buildRendering: function () {
			// generate a link for each top-level page
			var domNode = this.domNode = domConstruct.create('ul'),
				k,
				page;

			for (k in pages) {
				page = pages[k];
				domConstruct.place(string.substitute(LINK_TEMPLATE, {
					href: page.href || k,
					label: page.label
				}), domNode);
			}

			this.inherited(arguments);
		}
	});

});
