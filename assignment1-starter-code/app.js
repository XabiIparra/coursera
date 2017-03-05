(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = "";

  $scope.myFunction = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    if(totalNameValue<3){
      var message = "Enjoy"
    }else{
      var message = "Too much!"
    }
    $scope.totalValue = message;
  };


  function calculateNumericForString(string) {
    var totalStringValue = string.split(,);


    return totalStringValue.length;
  }

});


})();
