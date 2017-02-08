// create the module and name it scotchApp
var app = angular.module('portfolio', ['ngRoute']);

// create the controller and inject Angular's $scope
app.config(function($routeProvider) {
        $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'src/home/homeView.html',
            controller  : 'mainController'
        })
        // route for the home page
        .when('/about', {
            templateUrl : 'src/about/aboutView.html',
            controller  : 'aboutController'
        })
        // route for the home page
        .when('/projects', {
            templateUrl : 'src/projects/projectsView.html',
            controller  : 'projectsController'
        })
        // route for the home page
        .when('/samples', {
            templateUrl : 'src/samples/samplesView.html',
            controller  : 'samplesController'
        })
        // route for the home page
        .when('/contact', {
            templateUrl : 'src/contact/contactView.html',
            controller  : 'contactController'
        });
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        console.log("mainController");
    });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
        console.log("aboutController");

    });

    app.controller('projectsController', function($scope) {
        $scope.message = 'projectsController projectsController.';
        console.log("projectsController");
    });

    app.controller('samplesController', function($scope) {
        $scope.message = 'samplesController.';
        console.log("samplesController");
    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        console.log("contactController");
    });
