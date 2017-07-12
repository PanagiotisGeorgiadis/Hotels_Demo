const express = require("express");
const port = process.env.PORT || 3000;

const hotelsApp = express();
var Helpers = require("./helpers");
var AutomaticDatabaseActions = require("./api/dao/AutomaticDatabaseActions.js");

hotelsApp.use("/styles", express.static(__dirname + "/public/resources/styles/"));
hotelsApp.use("/fonts", express.static(__dirname + "/public/resources/fonts/"));
hotelsApp.use("/images", express.static(__dirname + "/public/resources/images/"));
hotelsApp.use("/main", express.static(__dirname + "/public/"));
hotelsApp.use("/utils", express.static(__dirname + "/public/utils/"));

var projectHelpers = new Helpers();
var pagesFolderPath = __dirname + "/public/pages/"

hotelsApp.get("/", (request, response) => projectHelpers.sendIndexPage(request, response, pagesFolderPath));
hotelsApp.get("/hotels", (request, response) => projectHelpers.sendIndexPage(request, response, pagesFolderPath));
hotelsApp.get("/hotel/:id", (request, response) => projectHelpers.sendIndexPage(request, response, pagesFolderPath));

hotelsApp.get("/initDatabase", function(request, response) {

	var databaseActions = new AutomaticDatabaseActions();
	// console.log(databaseActions);
	// databaseActions.readDataFromFile();
	databaseActions.initDatabase((data) => response.send(data));
});

hotelsApp.use("/api", require(__dirname + "/api/routes/index.js"));
hotelsApp.listen(port);
console.log("Server listening on port " + port);

