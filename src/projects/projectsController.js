(function(){
  angular.module("portfolio")
  .controller('projectsController',function($scope) {
      // create a message to display in our view
      $scope.message = 'projectsController!';
      console.log("projectsController");
  });
})();
