//load modules
var fs = require ('fs');
var os = require('os');

//platform
var platform = os.platform();

//File Location
var FileLocation = "./config/";
var FileLocationTemp = "./config/temp/";

//laat modules voor het platform waar de software op draait
if ("darwin" == platform) {
    var powerInfo = require('node-power-info');
}

if("win32" == platform){
	var isCharging = require('is-charging');
};

//load basic config
var AutoamatischConfig = fs.readFileSync('./config/automatisch.json', 'utf8');

//Set time interval
setInterval(function(){
	
    //battery en lader
    if ("win32"=== platform && AutoamatischConfig.Battery === "true"){

        //charing
	isCharging().then(result => {
            fs.writeFile(FileLocationTemp+"charging.txt", result);
	});

    } else if ("darwin"== platform ){

	//kijk hoeveel stroom aanwezig is
	powerInfo.getChargeStatus(function(batteryStats) {

            //collect data
            var power = JSON.stringify({
                powerLevel: batteryStats[0].powerLevel,
                charging: batteryStats[0].chargeStatus
            });

            //write file
            fs.writeFile(FileLocationTemp+"powerLevel.json", power);
        });
    } else {
        console.log("Os niet herkend");
    };
}, 3000);

//export data
exports.collect = function(){
    var collect = JSON.stringify({
	charging: JSON.parse(fs.readFileSync(FileLocationTemp+"powerLevel.json", "utf8")).charging,
	powerLevel: JSON.parse(fs.readFileSync(FileLocationTemp+"powerLevel.json", "utf8")).powerLevel
    });
	
    return collect;
};