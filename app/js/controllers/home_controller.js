window.app.controller('HomeController', function($scope, $location, AuthenticationService) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";

  var onLogoutSuccess = function(response) {
    alert(response.message);
    $location.path('/login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
});
