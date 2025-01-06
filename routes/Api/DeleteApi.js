
var connectionManager = require('../DB/ConnectionManager.js');
var deleteQueryEngine = require('../QueryEngine/DeleteQueryEngine.js');
var q = require('q');

exports.executeDelete = function (Values) {
    var deferred = q.defer();
    
    var deleteQuery = deleteQueryEngine.DeleteQueryStatements('Roles', "");
    
    connectionManager.getConnection()
        .then(function (connection) {
        var query = connectionManager.prepareQuery(deleteQuery, Values);
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