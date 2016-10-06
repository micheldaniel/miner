//load modules
var systeminformation = require('./systeminformation/index.js');

console.log(systeminformation.charging());

/*
var si = require('systeminformation');
 
// callback style
console.log(si.battery());

si.battery(function(data) {
    console.log('CPU-Information:');
    console.log(data);
})*/