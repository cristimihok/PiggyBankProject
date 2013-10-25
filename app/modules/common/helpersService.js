'use strict'

angular.module('Common')
	.factory('HelpersService', function () {

		return {

			Promise: function () {
				
				var data,
					done = [],
					fail = [],
					status = 'progress';

				this.done = function (callback) {
					done.push(callback);

					if (status === 'done') {
						callback(data);
					}
					return this;
				};

				this.failed = function (callback) {
					fail.push(callback);

					if (status === 'failed') {
						callback(data);
					}
					return this;
				};

				this.resolve = function (result) {
					if (status !== 'progress') {
						throw 'Promise has already completed with status of' +  status;
					}

					status = 'done';
					data = result;

					for (var i = 0, iLen = done.length; i < iLen; i++) {
						done[i](data);				
					}				

					return this;
				};

				this.fail = function (reason) {
					if (status !== 'progress') {
						throw 'Promise has already completed with status of' +  status;
					}

					status = 'failed';
					data = reason;

					for (var i = 0, iLen = done.length; i < iLen; i++) {
						fail[i](data);
					}				

					return this;
				}
			}

		} //return
	})