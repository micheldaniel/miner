//load modules
var express = require('express');
var os = require('os');
var fs = require('fs');

//load
//require('./core/idle.js');
//require('./core/systeminformation/index.js');
//app
var app = express();

//memory db
if (fs.existsSync('./config/automatisch.json')){
    var AutoDb = JSON.parse(fs.readFileSync("./config/automatisch.json", "utf8"));
} else {
    var AutoDb = [];
};

//push
AutoDb.push({platform: os.platform()});

//sla bestand op
fs.writeFile('./config/automatisch.json', JSON.stringify(AutoDb));

//server starer
app.listen(1337, function () {
	console.log("Server is aan");
});