var HotelsModel = require("../models/hotels.js");

function handleModelResponse(err, data, callback) {

	if(err) {
		callback(err, null);
		return;
	}
	callback(null, data);
}

module.exports = {

	find: function(params, callback) {

		var offset = parseInt(params.offset);
		var limit = parseInt(params.limit);		
		var collectionFields = "Distance EstablishmentId EstablishmentType Location MinCost Name Stars UserRating UserRatingTitle UserRatingCount ImageUrl ThumbnailUrl";

		if(params)
			HotelsModel.find(params, collectionFields, {skip: offset, limit: limit}, (err, data) => handleModelResponse(err, data, callback));
		else
			HotelsModel.find({}, collectionFields, {skip: offset, limit: limit}, (err, data) => handleModelResponse(err, data, callback));

	}
};