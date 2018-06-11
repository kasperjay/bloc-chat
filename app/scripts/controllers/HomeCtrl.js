(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
        var home = this;
        this.rooms = Room.all;
        this.currentRoom = null;
        home.currentUser = $cookies.get('blocChatCurrentUser');

        this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }

        home.addRoom = function() {
          $uibModal.open({
            templateUrl: '/templates/modal.html',
            size: 'sm',
            controller: 'ModalCtrl as modal'
          });
        }

        home.sendMessage = function () {
              home.newMessage.roomId = home.currentRoom.$id;
              home.newMessage.username = home.currentUser;
              Message.send(home.newMessage);
          }

  }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
        })();
