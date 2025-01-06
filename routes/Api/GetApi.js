
var connectionManager = require('../DB/ConnectionManager.js');
var getqueryEngine = require('../QueryEngine/GetQueryEngine.js');
var q = require('q');
exports.executeGet =function(req,res,type,callback) {
    var deferred = q.defer();
    var query = getqueryEngine.GetQueryStatements(type, "");
    connectionManager.getConnection()
        .then(function (connection) {
        connection.query(query, function (error, results) {
            if (error) {
                console.error(error);
                deferred.reject(error);
            }
            deferred.resolve(results);
            callback(JSON.stringify(results));
          
        });
    })
        .fail(function (err) {
        console.error(JSON.stringify(err));
        deferred.reject(err);
    });
    
    return deferred.promise;
}

