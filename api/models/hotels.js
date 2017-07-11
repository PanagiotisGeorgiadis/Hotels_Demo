var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/hotels");
mongoose.Promise = Promise;

mongoose.connection.on("connected", function() {
	console.log("Connected to database!");
});

mongoose.connection.on("error", function(error) {
	console.log("Could not connect to database!");
});

// Hotel Schema
var hotelSchema = mongoose.Schema({

	Distance: {
		type: Number,
	},
	EstablishmentId: {
		type: Number,
	},
	EstablishmentType: {
		type: String,
	},
	Location: {
		type: String,
	},
	MinCost: {
		type: Number,
	},
	Name: {
		type: String,
	},
	Stars: {
		type: Number,
	},
	UserRating: {
		type: Number,
	},
	UserRatingTitle: {
		type: String,
	},
	UserRatingCount: {
		type: Number,
	},
	ImageUrl: {
		type: String,
	},
	ThumbnailUrl: {
		type: String,
	}

}, {collection: "hotels", versionKey: false});

module.exports = mongoose.model("Hotel", hotelSchema);
