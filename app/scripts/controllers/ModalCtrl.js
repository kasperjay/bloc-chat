(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        var modal = this;

        this.open = function() {
             var modalInstance = $uibModal.open({
               controllerAs: 'modal'
             });

             modalInstance.result.then(function(name) {
               this.room = name;
               Room.create(this.room);
             });
           };

        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };

        modal.createRoom = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        }
      }

    angular
      .module('blocChat')
      .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
    })();
