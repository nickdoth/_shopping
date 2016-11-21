angular.module('app.controllers', [])
  
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('itemDetailCtrl', ['$scope', '$stateParams', 'StoreItems', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, StoreItems) {
    $scope.quantity = 1;
    $scope.item = StoreItems.getItem($stateParams.id);
}])
   
.controller('menCtrl', ['$scope', '$stateParams', 'StoreItems', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, StoreItems) {
    $scope.items = StoreItems.getMenItems();
}])
   
.controller('womenCtrl', ['$scope', '$stateParams', 'StoreItems', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, StoreItems) {
    $scope.items = StoreItems.getWomenItems();
}])
   
.controller('loginCtrl', ['$scope', '$stateParams', 'Door', '$ionicPopup', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Door, $ionicPopup, $state) {
    $scope.userid = '';
    $scope.password = '';
    $scope.login = function() {
        Door.signin($scope.userid, $scope.password)
        .then(function(data) {
            if (data === 'Granted') {
                $state.go('tabsController.men');
            }
            else {
                $ionicPopup.alert({
                    title: data
                });
            }
        }, function(error) {
            console.error(error);
        })
    }

}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 