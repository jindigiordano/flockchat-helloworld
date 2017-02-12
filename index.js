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

flock.events.on('client.slashCommand', function (event) {
    console.log("I am here!!!");
    flock.chat.sendMessage(config.botToken, {
      to: event.chat,
      text: "🎉🎉💸💸It's piñata time!💸💸🎉🎉",
      attachments: [{
        // "id": "blah",
        // "title": "Attachment",
        // "description": "An attachment",
        // "appId": event.appId,
        // // Precedence order of previews:
        // // widget > html > flockml > images
        // "color": "#0ABE51",
        "views": {
            // Attachment widget
            // "widget": { "src": "<widget url>", "width": 400, "height": 400 },
            // // Inline html
            // "html": { "inline": "<inline html>", "width": 400, "height": 400 },
            // "flockml": "<inline flockml>",
            // For image, only "src" is mandatory, everything else is optional
            "image": {
                "original": { "src": "https://media.giphy.com/media/iqgkvYsr2VYBy/giphy.gif" }, //"width": 400, "height": 400 },
                "thumbnail": { "src": "https://media.giphy.com/media/iqgkvYsr2VYBy/giphy.gif"}, //"width": 100, "height": 100 },
                "filename": "pinata.gif"
            }
        }
        // ,
        // "url": "<unfurled url>",
        // "forward": "true",  // default: false
        // For downloads, only "src" is mandatory, everything else is optional.
        // The client can use mime to show an appropriate file icon to the user.
        // Slashes and dots from the filename should be stripped.
        // "downloads": [
        //     { "src": "<download 1 url>", "mime": "<mime type>", "filename": "<filename 1>", "size": <bytes> },
        //     { "src": "<download 2 url>", "mime": "<mime type>", "filename": "<filename 2>", "size": <bytes> }
        // ],
        // "buttons": [ {
        //     "name": "<button 1>",
        //     "icon": "<icon 1 url>",
        //     "action": { "type": "openWidget", "desktopType": "modal", "mobileType": "modal", "url": "<action url>" },
        //     "id": "<button id 1>"
        // } ]
    }]
  }, function (error, response) {
    if (error)
        console.log('error: ', error);
    else
        console.log(response);
  })
});
