var util = require("util");
var url = require("url");
var fs = require("fs");
var http = require("http");


var host = "192.168.1.59";
//var fileport = 1338; 192;168,1,59 / 139
var port = 12345;//3702

var options = {
    hostname: host,
    port: port,
    path: '/',
    method: 'POST',
    headers: {"Content-Type": "application/json;charset=UTF-8"}
};

exports.start = function(json) {
    var pst = new post(json);
};

post = function(json){
    var moi = this;
    moi.envoie(json);
}

post.prototype = {

    envoie : function(json, callback){
        var req = http.request(options, callback);
        req.write(JSON.stringify(json));
        req.end();
    }

};


//var fou =  new post();