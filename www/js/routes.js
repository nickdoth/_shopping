angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.cart', {
    url: '/cart',
    views: {
      'tab3': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.itemDetail', {
    url: '/item/:price/:image/:desc',
    views: {
      'tab1': {
        templateUrl: 'templates/itemDetail.html',
        controller: 'itemDetailCtrl'
      }
    }
  })

  .state('tabsController.men', {
    url: '/men',
    views: {
      'tab1': {
        templateUrl: 'templates/men.html',
        controller: 'menCtrl'
      }
    }
  })

  .state('tabsController.women', {
    url: '/women',
    views: {
      'tab2': {
        templateUrl: 'templates/women.html',
        controller: 'womenCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page1/cart')

  

});