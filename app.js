
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var cookieparser = require('cookie-parser');
var session = require('express-session');
var html = require('html'),
    bodyparser = require('body-parser');
    mysql = require('mysql'),
    q = require('q'),
    api = require('./routes/Api/GetApi.js'),
    postapi = require('./routes/Api/PostApi.js'),
    deleteapi = require('./routes/Api/DeleteApi.js'),
    updateapi = require('./routes/Api/UpdateApi.js'),
    spapi=require('./routes/Api/SPApi.js'),
    connectionManager = require('./routes/DB/ConnectionManager.js');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('stylus').middleware(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(cookieparser("1435267"));
app.use(session({
    secret: '45621897', 
    saveUninitialized: true, 
    resave: true,
    duration: 10
}));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
var sess;

app.get('/', function (req, res) {
  
    //api.executeGet(req, res,'Roles', function (callback) {
    //    res.send(callback);
    //});
   
    //spapi.executeGet(req, res, "Roles", "", function (callback) { 
    //    res.send(callback);
    //});
    res.redirect('/Test.html');
});

app.get('/RandomCode', function (req, res) { 

    spapi.executeGet(req, res, "RandomCode","", function (callback) {
        res.send(callback);

    });


});
app.get('/testpage', function (req, res) {
    
    res.redirect('/Test.html');
});
app.post('/Insert', function (req, res) {
    req.session.user = req.body.email;
  
    if (sess.email) {
        /*
            * This line check Session existence.
            * If it existed will do some action.
            */
        res.redirect('/Test.html');
    }
    else {
        res.send('index.html');
    }

    //spapi.executeGet(req, res, "RandomCode", "", function (callback) {
    //   var roleid ="RI"+callback[0][0].RandomCode;
    //    var rolename = req.body.txtvalue2;
    //    var isactive = 1;
    //    var values = [roleid, rolename, isactive];
    //    postapi.executePost(values, function (callback) { 
        
    //        var result = JSON.stringify(callback);
    //        res.send(result);
    //    });

   // });
   /// var roleid = req.body.txtvalue1;
   
    ///spapi.executeGet(values);
    ///deleteapi.executeDelete(values);
});
app.post('/Update', function (req, res) {
    var roleid = req.body.txtData;
    var rolename = req.body.txtData2;
    var isactive = req.body.txtData3;
    var values = [roleid, rolename, isactive];
    updateapi.executeUpdate(values);
    ///deleteapi.executeDelete(values);
});

app.get('/users', user.list);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
