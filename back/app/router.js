
var util = require("util");
var url = require("url");
var fs = require("fs");


var get = require("./get.js");
var post = require("./post.js");

exports.router = function (req, resp) {
    var inc_request = new srouter(req, resp);
    inc_request.run();
    inc_request = null;
};

srouter = function (req, resp) {
    //console.log(resp);
    if (req && resp) {
        this.req = req;
        this.resp = resp;
        this.pathname = "";
        this.filetype = "";
        this.path = "";
        this.image_file = "jpg png jpeg bmp";
    } else {
        util.log("ERROR - A srouter object need a request and a response object");
    }
};

srouter.prototype = {
    run : function () {
        this.rest_method();
    },
    rest_method : function(){
        if (this.req.method == "GET"){
            get.get(this.req, this.resp);
        } else if (this.req.method == "POST") {
                post.pm(this.req, this.resp);
        } else {
            this.resp.writeHead(501, {"Content-Type": "application/json"});
            this.resp.write(JSON.stringify({message: "Not Implemented"}));
            this.resp.end();

        }
    }
};