(function(){
  angular.module("portfolio")
  .controller('contactController',function($scope) {
      // create a message to display in our view
      $scope.message = 'contactController!';
      console.log("contactController");
  });
})();
