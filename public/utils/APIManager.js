export default {

	asyncGET: (url, params, callback) => {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);

		xhr.onreadystatechange = function() {

			if(xhr.readyState == 4) {

				if(xhr.status != 200)
					callback("Some error occured!" + xhr.responseText, null);

				callback(null, xhr.responseText);
			}
		}
		xhr.send(params);
	},

	blockingGET: (url, params) => {

		return new Promise((resolve, reject) => {

			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);

			xhr.onreadystatechange = () => {

				if (xhr.readyState === 4) {

					if(xhr.status !== 200)
						reject(new Error("Some error occured!" + xhr.responseText));

					resolve(xhr.responseText);
				}
			}
			xhr.send(params);
		});
	}
}