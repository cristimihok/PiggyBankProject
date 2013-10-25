'use strict'

angular.module('Common')
	.factory('DataService', function(HelpersService) {

		//creates the PiggyBank Database of 5MB in size
		persistence.store.websql.config(persistence, 'PiggyBank', 'Piggy Bank Database', 5*1024*1024);
		
		//mapping template of an Income object
		var Income = persistence.define('income', {
			date: 'DATE',
			description: 'TEXT',
			category: 'TEXT',
			amount: 'INT'
		});
		persistence.schemaSync();
		
		return {

			addIncome: function (income) {
				var that 	 = this;
				that.promise = new HelpersService.Promise();

				var newIncome 			= new Income();
				newIncome.date 			= income.date;
				newIncome.description 	= income.description;
				newIncome.category 		= income.category;
				newIncome.amount 		= income.amount;

				persistence.add(newIncome);
				persistence.flush(function () {
					that.promise.resolve();
				});
				return that.promise;
			},//addIncome

			getIncomes: function () {
				var that = this;
				that.promise = new HelpersService.Promise();
				
				var l = Income.all().list(function (items) {					
					var incomes = [];

					items.forEach(function (item) {						
						incomes.push({
						 	date: 			new Date(item.date),
							description: 	item.description,
							category: 		item.category,
							amount: 		item.amount
						});
					});
					that.promise.resolve(incomes);					
				});				
				return that.promise;
			}//getIncomes

		}//return
		
	});//factory