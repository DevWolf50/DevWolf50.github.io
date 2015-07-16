
(function () {
var app =angular.module("gemsData", ["profileApp","navpannels"]);

app.controller("ContentController",["$location","$scope", function ($location,$scope) {
  $scope.contentCards = gems;

}]);



app.controller("ReviewController", function ($scope) {
  $scope.review={};
  $scope.addReview = function (product) {
  product.reviews.push($scope.review);
  $scope.review={};
  }
});


app.directive("login", function () {
  return {
    restrict: "E",
    templateUrl: "./html/login.html",
    controller: function($scope) {
      $scope.loginTrue = 0;
      $scope.loginClicked = function (login) {
        if($scope.loginTrue ===0) {

        $scope.loginTrue = login;

      }else {
        $scope.loginTrue = 0;
      }

      }

    },
    controllerAs:"login"

  }

});



  var gems =[
    {
      class: "MVC FrameWork",
      name: 'Angular',
      rating:5,
      popularity:98,
      jobMarket:95,
      shortDescription:'Angular is a front end framework developed by Google.Its one of the most popular frame works out there.',
      description:"HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.",
      image:'img/angular.jpg',
      downloadLink:"https://angularjs.org",
      docsLink:"https://docs.angularjs.org/api",
      trainings:[
        {
          name:"A better Way to Learn Angular",
          websiteName:"thinkster.io",
          link:"https://thinkster.io/a-better-way-to-learn-angularjs/"
        },
        {
          name:"Learn Angular",
          websiteName: "learnangular.org",
          link:"http://learn-angular.org"
        },
        {
          name:"Shaping Up with Angular",
          websiteName: "codeschool.com",
          link:"https://www.codeschool.com/courses/shaping-up-with-angular-js"
        },

          ],
      reviews:[
        {
          stars: 5,
          body: "I love Angular",
          author:"joe@thomas.com"
        },
        {
          stars: 1,
          body: "Angular Sucks",
          author:"tim@hater.com"
        }
      ],
    },
    {
      class: "FrontEnd FrameWork",
      name:"React",
      rating: 4.5,
      popularity:85,
      jobMarket:62,
      shortDescription:"A JavaScript library for building user interfaces",
      description: "React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC. We built React to solve one problem: building large applications with data that changes over time. To do this, React uses two main ideas.",
      image:'img/react.svg',
      downloadLink: "http://facebook.github.io/react/downloads.html",
      docsLink:"http://facebook.github.io/react/docs/getting-started.html",
      trainings:[
        {
          name:"Learn And Understand React JS",
          websiteName:"udemy.com",
          link:"https://www.udemy.com/learn-and-understand-reactjs/"
        },
        {
          name:"Build with React",
          websiteName: "buildwithreact.com",
          link:"http://buildwithreact.com"
        },
        {
          name:"React Fundamentals",
          websiteName: "egghead.io",
          link:"https://egghead.io/series/react-fundamentals"
        }
      ],
      reviews:[
        {
          stars: 4,
          body: "React is coming along",
          author:"angel@heaven.com"
        },
        {
          stars: 3,
          body: "React is an alright FrameWork",
          author:"joe@rogan.com"
        }
      ],
    },
    {
      class: "FrontEnd FrameWork",
      name:"Ember",
      rating: 3.8,
      popularity:78,
      jobMarket:50,
      shortDescription:"Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help you get your job done—fast.",
      description: "Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help you get your job done—fast.",
      image:'img/emberjs.jpg',
      downloadLink:"http://builds.emberjs.com/tags/v1.13.2/ember-data.jsl",
      docsLink:"http://guides.emberjs.com",
      trainings:[
        {
          name:"Learn And Understand React JS",
          websiteName:"udemy.com",
          link:"https://www.udemy.com/learn-and-understand-reactjs/"
        },
        {
          name:"Build with React",
          websiteName: "buildwithreact.com",
          link:"http://buildwithreact.com"
        },
        {
          name:"React Fundamentals",
          websiteName: "egghead.io",
          link:"https://egghead.io/series/react-fundamentals"
        }
      ],
      reviews:[
        {
          stars: 4,
          body: "React is coming along",
          author:"angel@heaven.com"
        },
        {
          stars: 3,
          body: "React is an alright FrameWork",
          author:"joe@rogan.com"
        }
      ],
    }
];



})();
