// Built in library path
const path = require('path');
const hbs = require('hbs');
const _ = require('lodash');
const express = require('express');

const publicPath = path.join(__dirname, '/../public');

var app = express();

// hbs.registerPartials(path.join(__dirname, '/vies/partials'));

app.set('view engine', 'hbs');

app.use(express.static(publicPath));

app.listen(3000, function () {
    console.log('Started on port 3000');
});

module.exports = {
    app: app
}
