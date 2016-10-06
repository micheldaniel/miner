//modules
var request = require ('request');
var fs = require('fs');

//get url
var url = JSON.parse(fs.readFileSnyc("./config/mainConfig.json")).url;

//request
var options = {
  url: url+'/api/getadress',
  headers: {
    'User-Agent': 'request'
  }
};

//function
function callback(error, body) {
  if (error) {
    console.log("er is een error");
  } else {
    
    //stringify
    var data = JSON.stringify({
       btc: body
    });
    
    //write file
    fs.writeFile("./config/address.json", data);
  }
};

//export data
exports.request = function(){
    request(options, callback);
};