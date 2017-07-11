const express = require("express");
const port = process.env.PORT || 3000;

const hotelsApp = express();
var AutomaticDatabaseActions = require("./api/dao/AutomaticDatabaseActions.js");

hotelsApp.use("/styles", express.static(__dirname + "/public/styles/"));
hotelsApp.use("/hotelsApp", express.static(__dirname + "/public/"));
hotelsApp.use("/utils", express.static(__dirname + "/public/utils/"));

hotelsApp.get("/", function(request, response) {

	var options = {
		root: __dirname + "/public/pages/",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "index.html";
	response.sendFile(filename, options, function(err) {
		if(err)
			console.log(err);
		else
			console.log("Sent File: " + filename);
	});
});

hotelsApp.get("/initDatabase", function(request, response) {

	var databaseActions = new AutomaticDatabaseActions();
	// console.log(databaseActions);
	// databaseActions.readDataFromFile();
	databaseActions.initDatabase((data) => response.send(data));
});

hotelsApp.use("/api", require(__dirname + "/api/routes/index.js"));
hotelsApp.listen(port);
console.log("Server listening on port " + port);

