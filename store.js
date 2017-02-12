'use strict';

var fs = require('fs');
var dbFile = 'db.json';

// Everything is stored here

var db = {
    users: {},
    hellos: []
};

// Read db file on startup and save on exit

var readDatabase = function () {
    try {
        var stringContent = fs.readFileSync(dbFile);
        db = JSON.parse(stringContent);
    } catch (e) {
        console.log('No db found, creating %s', dbFile);
    }
};

var saveDatabase = function () {
    console.log('Saving db');
    var stringContent = JSON.stringify(db);
    fs.writeFileSync(dbFile, stringContent);
};

readDatabase();
process.on('SIGINT', function () { console.log('SIGINT'); process.exit(); });
process.on('SIGTERM', function () { console.log('SIGTERM'); process.exit(); });
process.on('exit', saveDatabase);

// Accessors

exports.getToken = function (userId) {
    return db.users[userId];
};

exports.saveToken = function (userId, token) {
    db.users[userId] = token;
};
