/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var fs = require('fs');

var data = fs.readFileSync("./config/mainConfig.json", "utf8");
console.log(data);