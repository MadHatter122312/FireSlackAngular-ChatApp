//We need Auth that we created in the factory and state for the go method to push people around views...
angular.module('angularfireSlackApp')
  .controller('AuthCtrl', function(Auth, $state) {
    var authCtrl = this; //controller as syntax...

    authCtrl.user = {
      email: '',
      password: ''
    }

//one method from Auth we are using here is $authWithPassword
//we make a promise if the user is authenticated, use the go method to take them to 'home' view
    authCtrl.login = function() {
      Auth.$authWithPassword(authCtrl.user).then(function (auth) {
        $state.go('home');
      }, function(error) {
        authCtrl.error = error;
      });
    };
//We create a user and we login with it..then we fire the login method...
    authCtrl.register = function() {
      Auth.$createUser(authCtrl.user).then(function (user) {
        authCtrl.login();
      }, function(error) {
        authCtrl.error = error;
      });
    };

  });
