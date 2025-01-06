var connectionManager = require('../DB/ConnectionManager.js');
var spqueryEngine = require('../QueryEngine/SPQueryEngine');

var q = require('q');
exports.executeGet = function (req, res, key, values, callback) {
    var deferred = q.defer();
    
   
    var query = spqueryEngine.GetQueryStatements(key,values);
    connectionManager.getConnection()
        .then(function (connection) {
        connection.query(query, function (error, results) {
            if (error) {
                console.error(error);
                deferred.reject(error);
            }
            deferred.resolve(results);
            callback(results);
          
        });
    })
        .fail(function (err) {
        console.error(JSON.stringify(err));
        deferred.reject(err);
    });
    
    return deferred.promise;
}