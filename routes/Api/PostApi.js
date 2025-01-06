
var connectionManager = require('../DB/ConnectionManager.js');
var postQueryEngine = require('../QueryEngine/PostQueryEngine.js');
var errorapi = require('../Common/ErrorApi.js');
var mailapi = require('../Common/MailComposeApi.js');

var q = require('q');
exports.executePost=function (Values,callback) {
    var deferred = q.defer();
    
    var insertQuery = postQueryEngine.PostQueryStatements('Roles',"");
    
    connectionManager.getConnection()
        .then(function (connection) {
        var query = connectionManager.prepareQuery(insertQuery, Values);
        console.log('Query to execute:' + query);
        connection.query(query, function (error, result) {
            if (error) {
                console.error(error);
                deferred.reject(error);
                
            }
            try {
                deferred.resolve(result.insertId);
                var value = result.insertId;
                
              //  var html = mailapi.MailSend("Resetcode", "Prakash.Rajendran@hexacorp.com" , "ForgotPassword");
             //   mailapi.InternetService("Prakash.Rajendran@hexacorp.com", "Test Mail", html);
               
                callback(result.insertId);
            }
            catch (Error){ 
                errorapi.errorLog(Error);
            }
        });
    })
        .fail(function (err) {
        console.error(JSON.stringify(err));
        callback(deferred.reject(err));
    });
    
    return deferred.promise;
}