angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaOauth,AuthData,$cordovaToast) {	
	$scope.data={
		result:"",
		login:false,
		txt:""
	}
    $scope.facebookLogin = function() {
		//alert(AuthData.facebook().AppId);
		if($scope.data.login){
			  $cordovaToast.showLongBottom($scope.data.txt).then(function(success) {
				// success
			  }, function (error) {
				// error
			  });
			  return;
		}
        $cordovaOauth.facebook(AuthData.facebook().AppId, ["email"]).then(function(result) {
            $scope.data.result=angular.toJson(result,true);
			$scope.data.login=true;
			$scope.data.txt="Already Login with Facebook";			
        }, function(error) {
            $scope.data.result=angular.toJson(error,true);
			$cordovaToast.showShortBottom("Error").then(function(success) {
				// success
			  }, function (error) {
				// error
			  });
        });
    }   
	$scope.googleLogin = function() {
		//alert(AuthData.google().clientId);
		if($scope.data.login){
			  $cordovaToast.showLongBottom($scope.data.txt).then(function(success) {
				// success
			  }, function (error) {
				// error
			  });
			  return;
		}		
        $cordovaOauth.google(AuthData.google().clientId, ["email"]).then(function(result) {
            $scope.data.result=angular.toJson(result,true);
			$scope.data.login=true;
			$scope.data.txt="Already Login with Google";
			}, function(error) {
            $scope.data.result=angular.toJson(error,true);
			$cordovaToast.showShortBottom("Error").then(function(success) {
				// success
			  }, function (error) {
				// error
			  });			
        });
    }	
	$scope.twitterLogin = function() {
		//alert(AuthData.twitter().consumerKey);
		//alert(AuthData.twitter().consumerSecretKey);		
		if($scope.data.login){
			  $cordovaToast.showLongBottom($scope.data.txt).then(function(success) {
				// success
			  }, function (error) {
				// error
			  });
			  return;
		}		
        $cordovaOauth.twitter(AuthData.twitter().consumerKey,AuthData.twitter().consumerSecretKey).then(function(result) {
            $scope.data.result=angular.toJson(result,true);
			$scope.data.login=true;
			$scope.data.txt="Already Login with Twitter";			
        }, function(error) {
            $scope.data.result=angular.toJson(error,true);
			$cordovaToast.showShortBottom("Error").then(function(success) {
				// success
			  }, function (error) {
				// error
			  });			
        });
    }

    // $cordovaOauth.dropbox(string appKey);
    // $cordovaOauth.digitalOcean(string clientId, string clientSecret);
    // $cordovaOauth.google(string clientId, array appScope);
    // $cordovaOauth.github(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.linkedin(string clientId, string clientSecret, array appScope, string state);
    // $cordovaOauth.instagram(string clientId, array appScope);
    // $cordovaOauth.box(string clientId, string clientSecret, string state);
    // $cordovaOauth.reddit(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.twitter(string consumerKey, string consumerSecretKey);
    // $cordovaOauth.meetup(string consumerKey);
    // $cordovaOauth.foursquare(string clientId);
    // $cordovaOauth.salesforce(string loginUrl, string clientId);
    // $cordovaOauth.strava(string clientId, string clientSecret, array appScope);	
})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {

});
