var fs = require('fs');

exports.errorLog = function (error) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    
    var yyyy = today.getFullYear();
    var hrs = today.getHours().toString();
    var mts = today.getMinutes().toString();
    var secs = today.getSeconds().toString();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    var todaydateonly = dd.toString() + mm.toString() +  yyyy.toString();
    var Filename = "./public/Log/ErrorLog/ErrorFile" + todaydateonly.toString() + ".txt";
   
    var errorformat = "\n*******************\n";
    errorformat = errorformat + "Error:" + error +"\n";
    errorformat = errorformat + "DateTime:" + todaydateonly+"T"+hrs+":"+mts+":"+secs + "\n";
    errorformat = errorformat + "*******************";
    
    if (fs.existsSync(Filename)) {
        fs.appendFile(Filename, errorformat, function (req,res,err) {
            if (err) {
                ///res.send(err);
            }
            else {
                ///res.send("Error Code return");
            }
        });
    }
    else { 
        fs.writeFile(Filename, errorformat, function (req,res,err) {
            if (err) {
                ///res.send(err);
            }
            else {
                ///res.send("Error Code return");
            }
        });
       
    }
   
  
    
};