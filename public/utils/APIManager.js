export default {

	fetchDataAsync: (url = "/api/hotels/", callback) => {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);

		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4) {

				if(xhr.status !== 200)
					reject("Some error occured!" + xhr.responseText);

				try {
					resolve(JSON.parse(xhr.responseText));
				} catch(exception) {

					resolve(xhr.responseText);
				}
			}
		}

		xhr.onerror = () => reject("Some error occured while requesting the database");
		xhr.onabort = () => reject("The transfer has been canceled by the user.")

		xhr.send();
	},

	fetchDataBlocking: (url = "/api/hotels/") => {

		return new Promise(function(resolve, reject) {

			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);

			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					if(xhr.status !== 200)
						reject("Some error occured!" + xhr.responseText);

					try {
						resolve(JSON.parse(xhr.responseText));
					} catch(exception) {

						resolve(xhr.responseText);
					}
				}
			}

			xhr.onerror = () => reject("Some error occured while requesting the database");
			xhr.onabort = () => reject("The transfer has been canceled by the user.");

			xhr.send();
		});
	}
}