'use strict'

angular.module('Income')
	.controller('IncomeController', function ($scope, DataService, FlotService) {
		//$scope.incomeList = DataService.incomeList;
		var that = this;
		
		var promise = DataService.getIncomes();

		promise.done(function (incomes) {	

			var ph = $('#placeholder');
			var incomeData = [];

			//sorting incomes by date
			incomes.sort(function (a, b) {
				a = new Date(a.date);
				b = new Date(b.date);
				return a<b ? -1 : a>b ? 1 : 0;
			});

			
			for (var i = 0, iLen = incomes.length; i < iLen; i++) {			
				incomeData.push([incomes[i].date.getDate(), incomes[i].amount, incomes[i]]);
			}
			
			
			//Apply changes on chart
			$.plot(
				ph,
				[
					{ data: incomeData, label: "income"}
				],//data
				{
					series: {
						lines: {
							show: true
						},
						points: {
							show: true
						}
					},
					grid: {
						hoverable: true,
						clickable: true
					}
				}//options
			);//plot	

			ph.bind('plothover', function (event, pos, item) {
				if (item) {
					//console.log(item);
					//console.log(incomes[item.dataIndex].amount);
					var x = item.datapoint[0].toFixed(2),
					 	y = item.datapoint[1].toFixed(2);
					$("#tooltip").html('$' + incomes[item.dataIndex].amount)
						.css({top: item.pageY+5, left: item.pageX+5})
						.fadeIn(400);
				} else {
					$("#tooltip").hide();
				}
			});

			//Apply changes on table
			$scope.incomeList = incomes;
			$scope.$apply("incomeList");		
		}); //promise done		

});//controller