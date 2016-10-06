//load modules
var fs = require('fs');
var os = require('os');
var request = require('request');

//collect
var collect = require('./systeminformation/index.js');

//check os system
var platform = JSON.parse(fs.readFileSync("./config/automatisch.json")).platform;

//load btc adress great script
var getAdress = require('./scripts/walletaddress.js');

//platoform
switch(platform) {
    
    //windows
    case "win32":
        
        //make miner
        async.parallel([
            function(callback){
                
                //if
                if (){
                

                    //if
                    if(fs.existsSync('./config/address.json')){
                        //doe niets
                    } else {
                        //address
                        getAdress.request();
                    }
                } else {
                    
                }
                
                
                
                
                
            },
            function(callback){
                
            },
            function(callback){
                
            }
        ], function(err, results) {
            
        }
        
        //var string = 
        fs.writeFile("./miner/start.bat");
        
        
        
        
        //miner active
        
        
        
        
        //start miner
        
        
        
        break;
    
    //mac
    case "darwin":
        
        
        
        
        break;
    
    //linux
    case "linux":
        
        break;
    
    //andere oplossingen
    default:
    
        break;
};

//get data
console.log(collect.collect());

//gpu
console.log(os.platform());