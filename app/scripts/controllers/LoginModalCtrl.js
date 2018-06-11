(function() {
    function LoginModalCtrl($uibModalInstance, $uibModal, $firebaseAuth, $cookies) {
        this.ok = function(isValid) {
            if (isValid) {
                var user = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                };
                $uibModalInstance.close(user);
            }
        };

        this.newAccount = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/createModal.html',
                controller: 'CreateModalCtrl',
                controllerAs: 'create',
                backdrop: 'static',
                keyboard: false
            });
            modalInstance.result.then(function(user) {
                this.username = user.username;
                this.email = user.email;
                this.password = user.password;
                $cookies.put('blocChatCurrentUser', this.username);
                var auth = $firebaseAuth();
                auth.$createUserWithEmailAndPassword(this.email, this.password).then(
                    function(firebaseUser) {
                        console.log("User: " + firebaseUser.uid);
                    }).catch(function(error) {
                        console.error("Authentication failed: ", error);
                    });
                var currentUser = $cookies.get('blocChatCurrentUser');
                console.log(currentUser);
            });
        };

        this.forgot = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/forgotModal.html',
                controller: 'ForgotModalCtrl',
                controllerAs: 'forgot'
            });
            modalInstance.result.then(function(email) {
                var auth = $firebaseAuth();
                auth.$sendPasswordResetEmail(email);
            });
        };
    }

    angular
        .module('blocChat')
        .controller('LoginModalCtrl', ['$uibModalInstance', '$uibModal', '$firebaseAuth', '$cookies', LoginModalCtrl]);
})();
