'use strict'

angular.module('Common')
	.factory ('FlotService', function () {

		return {

			plot: function (){
				return $.plot(
					"#placeholder", 

					[
						{ data: [], label: "income"}
					],

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
						// yaxis: {
						// 	min: -1.2,
						// 	max: 1.2
						// }
					}
				)//plot
			}
		}//return
	});