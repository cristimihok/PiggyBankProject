'use strict'

angular.module('AddIncome').
	controller('AddIncomeController', function ($scope, DataService) {

		$scope.categories = ['Salary', 'Bonus', 'Freelance', 'Winnings', 'Other'];
		var tick = $('.tick');

		$scope.addIncome = function (income, newIncomeForm) {
			//console.log(newIncomeForm);
			if (newIncomeForm.$valid) {
				var promise = DataService.addIncome(income);

				promise.done(function () {
					console.log('FUSHED!');
					tick.show();
					setTimeout(function () {
						tick.fadeOut(300);
					},1000)
					clearFields(income);
				});
				
			}

		};

		$scope.cancelIncome = function () {
			window.location = '#/income'
		};

		var clearFields = function (income) {
			for (var property in income){
				console.log(property);
				income[property] = "";
			}
			$scope.$apply();
		}
	});//AddIncomeController