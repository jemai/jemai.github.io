/**
 * Created by Abdelhak on 12/02/2017.
 */

var app = angular.module('portfolio');
app.service('DataService' , function () {

    this.projectsData  =
        [
            {
                title : "Love'n Touch",
                tech : "IOS (swift), Node.js, Realm.io , Socket.io , MongoDB",
                image : "http://www.digit-u.com/img/portfolios/mobile/mock_loveintouch.jpg",
                description :"A tinder like application to like, match and chat with new people with it's real-time server"
            },
            {
                title : "Mobile Banking",
                tech : "IOS (swift) ,Realm.io",
                image : "http://www.digit-u.com/img/portfolios/mobile/mock_mobilebanking.jpg",
                description :"A banking app that helps yousers to manipulate their bank accounts when they are home"
            },
            {
                title : "Youpi",
                tech : "IOS (swift),Realm.io",
                image : "http://www.digit-u.com/img/portfolios/mobile/mock_youpi.jpg",
                description :"An application that helps to organize problems in a building "
            },
            {
                title : "Doolesh",
                tech : "IOS (ObjC), SQLite",
                image : "http://www.digit-u.com/img/portfolios/mobile/mocks-doolesh.jpg",
                description :"Whether you are on holiday or on business, for a few days or weeks, Doolesh will be your inspiration to discover Tunisia, as it is loved and lived by the Tunisians"
            }
        ];

})