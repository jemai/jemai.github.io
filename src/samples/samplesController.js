(function(){
  angular.module("portfolio")
  .controller('samplesController',function($scope) {
      // create a message to display in our view
      $scope.message = 'samplesController!';
      console.log("samplesController");
  });
})();
