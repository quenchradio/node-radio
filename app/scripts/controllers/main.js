(function() {
  "use strict";
  angular.module("radioApp").controller("MainCtrl", function($scope, $http) {
    return $http.get("/api/awesomeThings").success(function(awesomeThings) {
      return $scope.awesomeThings = awesomeThings;
    });
  });

}).call(this);

//# sourceMappingURL=../../../app/scripts/controllers/main.js.map