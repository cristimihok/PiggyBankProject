'use strict'

angular.module('Income')
	.controller('IncomeController', function ($scope, IncomeService) {
		
		$scope.incomeList = IncomeService.incomeList;

	});