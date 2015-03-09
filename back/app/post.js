var util = require("util");
var url = require("url");
var fs = require("fs");
var send = require("./send.js");


var pm = function (req, resp) {
    myPost = new post(req, resp);
    myPost.post_method();
};

post = function (req, resp){
    this.req = req;
    this.resp = resp;
};
//*******************************************************************************
post.prototype = {
    post_method :
        function() {
            var _this = this;
            var _data = "";
            this.req.on("data", function(d) {
                _data += d;
            });
            this.req.on("end",function() {
                var dd = JSON.parse(_data);
                _this.route(dd);
            });

        },
    route :
        function (data) {
            if (data.code == "P2T") {
                send.P1(this.cb);
            } else if(data.code == "P4T"){
                send.P4(this.cb);
            }else{
                console.log("erreur");
            }
        },

    cb:
        function (docs) {
            var _this = this.myPost
            if(docs) {
                _this.resp.writeHead(200, {"Content-Type": "application/json"});
                _this.resp.write(JSON.stringify(docs));
            } else {
                console.log("-----------ereur---------------");
                _this.resp.writeHead(500, {"Content-Type": "application/json"});
                _this.resp.write(JSON.stringify({resp: false}));
            }
            _this.resp.end();
        },

    general_error:
        function (err) {
            util.log("ERROR".red + " - " + err);
        }
};

module.exports.pm = pm;