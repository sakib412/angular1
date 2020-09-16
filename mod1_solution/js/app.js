(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.item = "";
      $scope.state = "primary";
      $scope.sayMessage = function () {
          var itemNum = $scope.item;
          var it = itemNum.split(',');

        if(itemNum == ""){
            $scope.state = "danger";
            $scope.state2 = "error";
            $scope.message = "Please enter data first";
            
          }else if(it.length <=3){
            $scope.state = "success";
            $scope.state2 = "success";
            $scope.message = "Enjoy!";
            
          }else if(it.length >=4){
            $scope.state = "success";
            $scope.state2 = "success";
            $scope.message = "Too much!";
          }
      };
    
     
    }
    
    })();
    