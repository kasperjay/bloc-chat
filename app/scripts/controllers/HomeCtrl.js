(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        var home = this;
        this.rooms = Room.all;
        this.currentRoom = null;

        this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
            console.log(home.messages)
        }

      home.addRoom = function() {
          $uibModal.open({
            templateUrl: '/templates/modal.html',
            size: 'sm',
            controller: 'ModalCtrl as modal'
          });
        }

  }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
