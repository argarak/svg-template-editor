angular.module('svg-template-editor', ['ngMaterial', 'ipCookie'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
		.primaryPalette('red')
    .accentPalette('pink')
    .dark();
})
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://simpleicons.org/**'
  ]);
})
.controller('mainController', ['$scope', 'ipCookie', '$mdDialog', function($scope, ipCookie, $mdDialog) {
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: mainController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(answer) {
      ipCookie('readIntro', true);
    });
  }
	
	console.log(ipCookie())
	
	if(ipCookie('readIntro') === undefined || !ipCookie('readIntro'))
		$scope.showAdvanced();
}]);
