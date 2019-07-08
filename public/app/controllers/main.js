angular.
	module('app', []).
	component('summator', {
		template:
			'<div class="jumbotron">' +
				'<h1>{{ message }}</h1>' +
				'<input ng-model="value1"> ' +
				'<span>+</span>' +
				'<input ng-model="value2">' +
				'<span>=</span>' +
				'{{result}}' +

				'<div>' +
					'<button ng-click="submit(value1,value2)">Click </button>' +
				'</div>' +
			'</div>',
		controller: function ($scope, $http) {
			$scope.message = 'Summator of two values';
			$scope.submit = function (value1, value2) {
				var data = $.param({
					val1: value1,
					val2: value2
				});
				$http({
					method: 'POST',
					url: '/sum',
					data: data,
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).success(function (data, status, headers, config) {
					$scope.result = data.result;
				}).error(function (data, status, headers, config) {

				});
			}
		}
	})
