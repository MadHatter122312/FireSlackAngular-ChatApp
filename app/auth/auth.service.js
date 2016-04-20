//Inject $firebaseAuth and FirebaseUrl which is  constant in our app/app.js
angular.module('angularfireSlackApp')
  .factory('Auth', function($firebaseAuth, FirebaseUrl){
    var ref = new Firebase(FirebaseUrl); //ref to our particular firebase
    var auth = $firebaseAuth(ref); //this creates a firebase object with ref to our firebase

    return auth; //...finally the factory will return auth, making the $firebaseAuth modules avaialbe from the service
  });
