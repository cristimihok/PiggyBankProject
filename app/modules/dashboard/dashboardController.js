'use strict'

angular.module('Dashboard')
	.controller('DashboardController', function ($scope) {
		console.log("I am Dash");
		$scope.data = 'this is Dashboard';
	});	