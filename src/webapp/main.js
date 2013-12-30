define([
	'exports',
	'dojo/router',
	'./widget/AppContainer',
	'dojo/domReady!'
], function (webapp, router, AppContainer) {
	// create an instance of the AppContainer
	var container = webapp.container = new AppContainer({
			id: 'main',
			gutters: false
		}).placeAt(document.body);

	container.startup();

	// start the router with dashboard as the default path
	router.startup('/Dashboard');
});
