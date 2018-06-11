(function() {
    function ModalInstanceCtrl($uibModalInstance) {
       this.ok = function() {
            $uibModalInstance.close(this.name);
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
