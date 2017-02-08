(function(){
  angular.module("portfolio")
  .controller('aboutController',function($scope) {
      // create a message to display in our view
      $scope.message = 'aboutController!';
      console.log("aboutController");
  });
})();
