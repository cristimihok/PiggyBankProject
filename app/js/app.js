'use strict';
angular.module('Dashboard', []);
angular.module('Expense', []);
angular.module('Income', []);


// Declare app level module which depends on filters, and services
angular.module('myApp', ['Dashboard', 'Expense', 'Income'])
	.config(function($routeProvider) {
				$routeProvider
					.when('/dashboard', {
						templateUrl: 'modules/dashboard/views/dashboard.html',
						controller: 'DashboardController'
					})
					.when('/expenses', {
						templateUrl: 'modules/expense/views/expense.html',
						controller: 'ExpenseController'
					})
					.when('/income', {
						templateUrl: 'modules/income/views/income.html',
						controller: 'IncomeController'
					})
					.otherwise({
						redirectTo: '/dashboard'
					});	
	});
