var config = require('./config.js');
var flock = require('flockos');
var express = require('express');
var store = require('./store.js');
var Mustache = require('mustache');
var fs = require('fs');
var util = require('util');

flock.appId = config.appId;
flock.appSecret = config.appSecret;

var app = express();
app.use(flock.events.tokenVerifier);
app.post('/events', flock.events.listener);

app.listen(8080, function () {
    console.log('Listening on 8080');
});

flock.events.on('app.install', function (event, callback) {
    store.saveToken(event.userId, event.token);
    callback();
});

flock.events.on('client.slashCommand', function (event, callback) {
    console.log('Hello World!');
});
