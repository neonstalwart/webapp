define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin'
], function (declare, Widget, Templated) {

	return declare([Widget, Templated], {
		baseClass: 'page'
	});

});
