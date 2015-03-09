/**
 * Created by ameli_000 on 24/02/2015.
 */
//var recup_Twitter = require("./app/recup_Twitter.js");
//var traitement = require("./app/Traitement.js");

//var recup_article = require("./app/fluxArticles.js");
router = require("./app/router.js");

//var matching = require("./app/matching.js");
var http = require("http");
var util = require("util");
var server = {};
server.r = require("./app/router.js");
server.port = 12345;
server.address = "0.0.0.0";

/**
 * This method is called each times a request arrives on the server
 * @param req (Object) request object for this request
 * @param resp (Object) response object for this request
 */
server.receive_request = function (req, resp) {
    server.r.router(req, resp);
};

http.createServer(server.receive_request).listen(server.port, server.address);
util.log("INFO - Server started, listening " + server.address + ":" + server.port);