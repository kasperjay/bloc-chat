(function() {
  function Message($firebaseArray) {
      var Message = {};

      var ref = firebase.database().ref().child("Messages");
      var messages = $firebaseArray(ref);

      Message.getByRoomId = function (roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }

      Message.send = function (newMessage) {
           messages.$add(newMessage);
           newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
       }
      return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
