(function () {
  var app = angular.module("navpannels",[]);
  app.directive("navPannels", function () {
    return {
      restrict:"E",
      templateUrl:"./html/nav-pannels.html",
      controller: function ($scope) {
        $scope.tab = 1;
        $scope.setTab = function(setTab) {
          if($scope.tab === setTab) {
            $scope.tab = 0;
          } else {   $scope.tab = setTab;}

        }
        $scope.checkTab = function(checkTab) {
          return $scope.tab === checkTab;
        }

        $scope.clicked = false;

        $scope.clicking = function (clicked) {
          if($scope.clicked === false) {
            $scope.clicked = clicked;
          } else {
            $scope.clicked = false;
          }
        }
      },
      controllerAs:"pannels"
    }
  });


})();
