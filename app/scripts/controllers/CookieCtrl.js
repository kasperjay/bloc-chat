(function() {
  function CookieCtrl($uibModalInstance, $cookies) {

    //function that with store username when ran in cookies.html
    this.setUserName = function() {
        $cookies.put('blocChatCurrentUser', this.username)
        console.log(this.username);
        $uibModalInstance.close();
      }
    };

  angular
    .module('blocChat')
    .controller('CookieCtrl', ['$uibModalInstance', '$cookies', CookieCtrl]);
})(); 
