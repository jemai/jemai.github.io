(function(){
    angular.module('portfolio')
           .controller('projectsController', ['$scope','DataService', function($scope, DataService ){

  // create a message to display in our view
  $scope.data =  DataService.projectsData;
  $scope.changeActiveProject =  function(index){
      $scope.activeProj = index ;
      console.log(index);
    }
  }]);



}());
