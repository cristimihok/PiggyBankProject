'use strict';

angular.module('Common', []);
angular.module('AddIncome', []);
angular.module('Dashboard', []);
angular.module('Expense', []);
angular.module('Income', ['AddIncome']);


// Declare app level module which depends on filters, and services
angular.module('myApp', ['Dashboard', 'Expense', 'Income', 'Common'])
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
					.when('/addIncome', {
						templateUrl: 'modules/addIncome/views/addIncome.html',
						controller: 'AddIncomeController'
					})
					.otherwise({
						redirectTo: '/dashboard'
					});	
	});
