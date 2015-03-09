var util = require("util");
var url = require("url");
var fs = require("fs");
var get;

/**
 * This is the parametred constructor of a srouter
 * @param req (Object) the request object
 * @param resp (Object) the response object
 */
get_router = function (req, resp) {
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
exports.get = function (req, resp) {
    var inc_request = new get_router(req, resp);
    inc_request.run();
    inc_request = null;
};
get_router.prototype = {
    run :
        function (){
            this.get_method();
        },
    /**
     *These methods are used to allow the web navigation (à revoir)
     */
    get_method :
        function (req, resp) {
            var u = url.parse(this.req.url, true, true);
            var regexp = new RegExp("[/]+", "g");
            this.pathname = u.pathname.split(regexp);
            this.pathname = this.pathname.splice(1, this.pathname.length - 1);
            this.filetype = this.pathname[this.pathname.length - 1].split(".");
            this.filetype = this.filetype[this.filetype.length - 1];
            this.path = "../front" + u.path;
            this.read_file();
        },
    /**
     *This method is used to read the file
     */
    read_file :
        function () {
            if (!this.pathname[0]) {
                this.path += "index.html";
                this.filetype = "html";
            }
            this.load_file();
        },
    /**
     *This method is used to load the file read
     */
    load_file:
        function () {
            var _this = this;
            fs.exists(this.path, function (ex) {
                if (ex) {
                    fs.readFile(_this.path, function (e, d) {
                        if (e) {
                            util.log("ERROR - Problem reading file : " + e);
                        } else {
                            _this.file = d;
                            _this.file_processing();
                        }
                    });
                } else {
                    util.log("INFO - File requested not found : " + _this.path);
                    _this.resp.writeHead(404, {"Content-Type": "text/html"});
                    _this.resp.end();
                }
            });
        },
    /**
     *This method is used to display the contents of the file
     */
    file_processing:
        function () {
            if (this.filetype == "htm") {
                this.resp.writeHead(200, { "Content-Type" : "text/html"});
            } else if (this.image_file.indexOf(this.filetype) >= 0) {
                this.resp.writeHead(200, { "Content-Type" : "image/" + this.filetype });
            } else {
                this.resp.writeHead(200, { "Content-Type" : "text/" + this.filetype });
            }
            this.file_send();
        },
    /**
     *This method is used to send the file to the outflow
     */
    file_send:
        function () {
            this.resp.write(this.file);
            this.resp.end();
        }
};