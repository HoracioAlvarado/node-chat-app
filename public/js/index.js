var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'Hey, This is Andrew.'
  // });

  // socket.emit('createMessage', {
  //   from: 'halvarado',
  //   to: 'Andrew',
  //   text: 'Hey, This is Horacio.'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

// socket.on('newEmail', function (email) {
//   console.log('New email');
//   console.log('From: ', email);
// });

socket.on('newMessage', function (message) {
  console.log('New message', message);

  var li = $('<li></li>');
  li.text(message.from + ': ' + message.text),

  $('#messages').append(li);
});

$('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function () {
    
  });
});


