var express = require('express');
var router = express.Router();
var controllers = require("../controllers/");

router.get("/:resource", function(request, response, next) {

	var resource = request.params.resource;
	var Controller = controllers[resource];

	Controller.find(request.query, function(err, results) {

		if(err) {

			response.status(500).json({
				confirmation: "fail",
				message: err
			});
			return;
		}

		response.status(200).json({
			confirmation: "success",
			message: results
		});
	});
});

module.exports = router;