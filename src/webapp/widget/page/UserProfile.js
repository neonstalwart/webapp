define([
	'dojo/_base/declare',
	'../PageWidget',
	'dojo/text!./template/UserProfile.html'
], function (declare, PageWidget, template) {

	return declare(PageWidget, {
		templateString: template
	});

});
