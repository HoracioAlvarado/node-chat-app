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

// hbs.registerPartials(path.join(__dirname, '/vies/partials'));

app.set('view engine', 'hbs');

app.use(express.static(publicPath));

io.on('connection', function (socket) {
    console.log('New user connected');

    socket.on('disconnect', function () {
        console.log('User was Disconnected');
    })
});



server.listen(port, function () {
    console.log('Started on port ' + port);
});

module.exports = {
    app: app
}
