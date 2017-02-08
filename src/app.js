// create the module and name it scotchApp
var app = angular.module('portfolio', ['ngRoute']);
// create the controller and inject Angular's $scope
app.config(function($routeProvider) {
        $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'src/home/homeView.html',
            controller  : 'homeController'
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
