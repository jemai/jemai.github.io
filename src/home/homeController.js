(function(){
  angular.module("portfolio")
  .controller('homeController',function($scope) {
      // create a message to display in our view
      $scope.message = 'Everyone come and see how good I look!';
      console.log("homeController");
  });
})();
