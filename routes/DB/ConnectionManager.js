var mysql = require('mysql');
var q = require('q');

exports.getConnection=function () {
    var deferred = q.defer();
    
    //var connection = mysql.createConnection({
    //    host: '192.168.2.160',
    //    port: 3306,
    //    user: 'rprakash',
    //    password: 'pass12',
    //    database: 'dbsample'
    //});
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'pass12',
        database: 'test4'
    });
    
    connection.connect(function (err) {
        if (err) {
            console.error(err);
            deferred.reject(err);
        }
        console.log('[CONN] – Connection created with id:' + connection.threadId);
        deferred.resolve(connection);
    });
    ///connection.end();
    return deferred.promise;
}
exports.prepareQuery=function (query, parameters) {
    if (!query || !parameters) {
        throw new Error('query and parameters function parameters should be specified.');
    }
    return mysql.format(query, parameters);
}
