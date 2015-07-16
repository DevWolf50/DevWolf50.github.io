
(function () {

  var app = angular.module("profileApp",['ngAnimate'])
  .directive("profile", function() {

    return {
      restrict: "E",
      templateUrl:"./html/profile.html",
      controller: function ($scope) {
        $scope.user = userData;
        $scope.clicked = false;
        $scope.edit = false;
        $scope.editedProfile = {};
        //pofile will aprear once you click button
        $scope.clicking = function (clicked) {
          if($scope.clicked === false) {
            if($scope.edit === true) {
              $scope.edit = false;
              $scope.clicked = false;
            } else {
                $scope.clicked = clicked;
            }

          } else {
            $scope.clicked = false;

          }

        }
        //edit mode will apear once you click button
        $scope.editMode = function(edit) {
          if($scope.edit === false) {
            $scope.edit = edit;
            $scope.clicked = false;
        } else {
          $scope.edit = false;
          $scope.clicked = true;
          }
        }
      //initalizes the editProfile inputs to the user info
        $scope.editedProfile.username = $scope.user.username;
        $scope.editedProfile.bio = $scope.user.bio ;
        $scope.editedProfile.website = $scope.user.website;
        $scope.editedProfile.favoriteWebTech = $scope.user.favoriteWebTech;
          //takes values from input fields and replaces user info
        $scope.submit = function () {
          if($scope.editedProfile.username || $scope.editedProfile.bio || $scope.editedProfile.website || $scope.editedProfile.website || $scope.editedProfile.favoriteWebTech) {
            $scope.user.username = $scope.editedProfile.username;
            $scope.user.bio = $scope.editedProfile.bio;
            $scope.user.website = $scope.editedProfile.website;
            $scope.user.favoriteWebTech = $scope.editedProfile.favoriteWebTech;

          }
        }
      },
      controllerAs: "profileCtrl",

    };





  });

  //fake data to represent data delivered from a database
  var userData =
{
      username: "Joseph Palomino",
      avatar:"../img/aboutMe.jpg",
      bio: "Aspiring Developer",
      favoriteWebTech:"Angular.js",
      website:"http://imjoepal.com",
      recentLikes: [
        {
          name: "angular",
          link: "",
          popularity: "98%",
          image:'img/react.svg'
        },
        {
          name: "Sass",
          link: "",
          popularity: "85%",
          image:'img/sass.png'
        }

      ]
    };
})();
