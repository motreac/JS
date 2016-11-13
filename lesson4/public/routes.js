(function () {

angular
		.module('myApp')
		.config(routes);

	function routes ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name:'app',
				url:'/app',
				controller:'MainController',
				controllerAs:'main',
				templateUrl:'app/app.template.html'

			});

		$urlRouterProvider.otherwise('app');
		console.log('MainController');
		self.data = 'hi'
	}

}());