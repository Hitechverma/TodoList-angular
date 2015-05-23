app.controller('MainController',['$scope',function($scope){
	$scope.name = 'Hitesh Verma';
	$scope.textLists = [
		{text: 'some text 1',
		 done: 'false'
	},
		{text: 'some text 2',
		done: 'false'
	}
	];
	$scope.save = function(){
		$scope.textLists.push({text: $scope.newText, done: 'false'}),
		$scope.newText= ''
	};
}]);