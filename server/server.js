// Built in library path
const path = require('path');
const hbs = require('hbs');
const _ = require('lodash');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var generateMessage = require('./utils/message').generateMessage;

// hbs.registerPartials(path.join(__dirname, '/vies/partials'));

app.set('view engine', 'hbs');

app.use(express.static(publicPath));

io.on('connection', function (socket) {
  console.log('New user connected');

  // socket.emit('newEmail', {
  //   from: 'halvarado@example.com',
  //   text: 'Hey. What is going on.',
  //   createAt: 123
  // });

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user join'));

  // socket.on('createEmail', function (newEmail) {
  //   console.log('createEmail', newEmail);
  // });

  socket.on('createMessage', function (message, callback) {
    console.log('createMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    
    callback('This is from the server.');
  });

  socket.on('disconnect', function () {
    console.log('User was Disconnected');
  });

});

server.listen(port, function () {
  console.log('Started on port ' + port);
});

module.exports = {
    app: app
}
