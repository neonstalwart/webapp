define([
	'require',
	'dojo/aspect',
	'dojo/router',
	'dojo/_base/declare',
	'dijit/layout/BorderContainer',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./template/AppContainer.html',
	'../pages',
	'dijit/layout/StackContainer',
	'./NavBar'
], function (require, aspect, router, declare, BorderContainer, Templated, WidgetsInTemplate, template, pages) {

	return declare([BorderContainer, Templated, WidgetsInTemplate], {
		contextRequire: require,
		templateString: template,

		postCreate: function () {
			this.inherited(arguments);

			var stack = this.stack;

			// register a handler for all the top-level navigation
			router.register(/\/([^/]+)(?:\/.*)?/, function (evt) {
				var page = evt.params[0],
					descriptor = pages[page] || {},
					moduleId = './page/' + (descriptor.page || page);

				// load the page constructor, create a new instance, place it in the stack, select
				// the new page and destroy the previous page
				require([moduleId], function (Page) {
					var current = stack.selectedChildWidget,
						page = new Page().placeAt(stack),
						handle;

					if (current) {
						handle = aspect.after(current, 'onHide', function () {
							handle.remove();
							stack.removeChild(current);
							current.destroyRecursive();
						});
					}

					stack.selectChild(page);
				});
			});
		}
	});

});
