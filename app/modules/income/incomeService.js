'use strict'

angular.module('Income')
	.factory('IncomeService', function() {		

		return {
			incomeList: [
				{
					date: '11/09/2013',
					description: 'descr1',
					category: 'bill',
					amount: 120
				},
				{
					date: '12/09/2013',
					description: 'descr2',
					category: 'presonal',
					amount: 140
				},
				{
					date: '12/09/2013',
					description: 'descr2',
					category: 'presonal',
					amount: 140
				},
				{
					date: '12/09/2013',
					description: 'descr2',
					category: 'presonal',
					amount: 140
				}
			]//incomeList
		}//return
		
	});//factory