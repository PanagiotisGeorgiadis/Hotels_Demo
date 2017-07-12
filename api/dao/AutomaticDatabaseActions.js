const fs = require("fs");
const HotelsModel = require("../models/hotels.js");

class AutomaticDatabaseActions {

	constructor() {
		this.hotelData = null;
	}

	initDatabase(callback) {

		this.readDataFromFile()
		.then(fileData => {

			if(typeof fileData === "string") {
				HotelsModel.insertMany(JSON.parse(fileData).Establishments, (err, docs) => console.log(docs));
			}
			callback(fileData);
		})
		.catch(error => {
			console.error(error);
		});
	}

	readDataFromFile() {

		return new Promise((resolve, reject) => {

			fs.readFile(__dirname + "/hotels.json", "utf-8", (err, fileData) => {

				if(err) {

					reject("Some error occured while reading the file " + err);
					return;
				}
				resolve(fileData);
			});
		});
	}
}

module.exports = AutomaticDatabaseActions;