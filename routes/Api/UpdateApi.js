
var connectionManager = require('../DB/ConnectionManager.js');
var updateQueryEngine = require('../QueryEngine/UpdateQueryEngine.js');

var q = require('q');
exports.executeUpdate = function (Values) {
    var deferred = q.defer();
    
    var updateQuery = updateQueryEngine.UpdateQueryStatements('Roles', "");
    
    connectionManager.getConnection()
        .then(function (connection) {
        var query = connectionManager.prepareQuery(updateQuery, Values);
        console.log('Query to execute:' + query);
        connection.query(query, function (error, result) {
            if (error) {
                console.error(error);
                deferred.reject(error);
            }
            deferred.resolve(result.insertId);
        });
    })
        .fail(function (err) {
        console.error(JSON.stringify(err));
        deferred.reject(err);
    });
    
    return deferred.promise;
}