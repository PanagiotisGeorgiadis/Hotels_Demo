import { DRAW_LOADING_IMAGE, HIDE_LOADING_IMAGE,
		 DRAW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE,
		 GET_HOTELS_LIST, GET_HOTELS_LIST_SUCCESS, GET_HOTELS_LIST_FAILED,
		 DRAW_INITIAL_HOTELS_LIST, DRAW_MORE_HOTELS_LIST, 
		 FILTER_HOTELS_LIST, SORT_HOTELS_LIST  } from "../actions/HotelsListActions";

const hotelsPerPage = 24;

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case DRAW_LOADING_IMAGE:
			updatedState.showLoadingImage = true;
			break;

		case HIDE_LOADING_IMAGE:
			updatedState.showLoadingImage = false;
			break;

		case DRAW_ERROR_MESSAGE:
			updatedState.showErrorMessage = true;
			updatedState.errorMessage = action.payload.message;
			break;

		case HIDE_ERROR_MESSAGE:
			updatedState.showErrorMessage = false;
			updatedState.errorMessage = null;
			break;

		case GET_HOTELS_LIST:
			break;

		case GET_HOTELS_LIST_SUCCESS:

			updatedState.errorMessage = null;
			updatedState.showLoadingImage = false;
			updatedState.hotelsList = action.payload.response.message;
			break;

		case GET_HOTELS_LIST_FAILED:

			updatedState.errorMessage = action.payload;
			updatedState.showLoadingImage = false;
			break;

		case DRAW_INITIAL_HOTELS_LIST:

			let { numOfHotels } = action.payload;

			if(updatedState.hotelsListFiltered.length)
				updatedState.hotelsListDrawable = (updatedState.hotelsListFiltered.length > numOfHotels ) ? updatedState.hotelsListFiltered.slice(0, numOfHotels) : updatedState.hotelsListFiltered.slice(0, updatedState.hotelsListFiltered.length);

			else if(updatedState.hotelsListSorted.length)
				updatedState.hotelsListDrawable = (updatedState.hotelsListSorted.length > numOfHotels ) ? updatedState.hotelsListSorted.slice(0, numOfHotels) : updatedState.hotelsListSorted.slice(0, updatedState.hotelsListSorted.length);

			else
				updatedState.hotelsListDrawable = (updatedState.hotelsList.length > numOfHotels ) ? updatedState.hotelsList.slice(0, numOfHotels) : updatedState.hotelsList.slice(0, updatedState.hotelsList.length);

			break;

		case DRAW_MORE_HOTELS_LIST:

			let { offset } = action.payload;
			updatedState.offset = offset;

			if(updatedState.hotelsListFiltered.length)
				updatedState.hotelsListDrawable = (updatedState.hotelsListFiltered.length > offset + hotelsPerPage ) ? updatedState.hotelsListFiltered.slice(0, offset + hotelsPerPage) : updatedState.hotelsListFiltered;

			else if(updatedState.hotelsListSorted.length)
				updatedState.hotelsListDrawable = (updatedState.hotelsListSorted.length > offset + hotelsPerPage ) ? updatedState.hotelsListSorted.slice(0, offset + hotelsPerPage) : updatedState.hotelsListSorted;

			else
				updatedState.hotelsListDrawable = (updatedState.hotelsList.length > offset + hotelsPerPage ) ? updatedState.hotelsList.slice(0, offset + hotelsPerPage) : updatedState.hotelsList;

			break;

		case FILTER_HOTELS_LIST:

			if(updatedState.hotelsListSorted.length)
				updatedState.hotelsListFiltered = updatedState.hotelsListSorted.slice();
			else
				updatedState.hotelsListFiltered = updatedState.hotelsList.slice();

			for(var property in action.payload.filterObject) {

				if(action.payload.filterObject[property] !== "None") {

					if(property === "Name") {

						updatedState.hotelsListFiltered = updatedState.hotelsListFiltered.filter((listItem) => {
							return listItem[property][0] === action.payload.filterObject[property];
						});

					} else if(property === "Stars") {

						updatedState.hotelsListFiltered = updatedState.hotelsListFiltered.filter((listItem) => {
							return listItem[property] === parseInt(action.payload.filterObject[property]);
						});

					} else if(property === "UserRating" || property === "MinCost") {

						if(action.payload.filterObject[property].includes("+")) {

							updatedState.hotelsListFiltered = updatedState.hotelsListFiltered.filter((listItem) => {
								return listItem[property] > 1000;
							});

						} else {

							var minValue = parseInt(action.payload.filterObject[property].split(" - ")[0]);
							var maxValue = parseInt(action.payload.filterObject[property].split(" - ")[1]);

							updatedState.hotelsListFiltered = updatedState.hotelsListFiltered.filter((listItem) => {
								return parseFloat(listItem[property]) >= parseFloat(minValue) && parseFloat(listItem[property]) < parseFloat(maxValue) || parseFloat(listItem[property]) > parseFloat(minValue) && parseFloat(listItem[property]) <= parseFloat(maxValue);
							});
						}
					}
				}
			}

			if(!updatedState.hotelsListFiltered.length) {
				updatedState.showErrorMessage = true;
				updatedState.errorMessage = "Oops! We're sorry but no results were found.";
			} else {
				updatedState.showErrorMessage = false;
				updatedState.errorMessage = null;
			}

			break;

		case SORT_HOTELS_LIST:

			let { property } = action.payload;
			if(property !== "None") {

				if(updatedState.hotelsListFiltered.length) {

					updatedState.hotelsListSorted = updatedState.hotelsListFiltered.slice();
					updatedState.hotelsListFiltered = [];
				} else {
					updatedState.hotelsListSorted = updatedState.hotelsList.slice();
				}

				if(property === "Name")
					updatedState.hotelsListSorted.sort((a, b) => {

						let nameA = a.Name.toUpperCase();
						let nameB = b.Name.toUpperCase();
						if(nameA < nameB)
							return -1;
						if(nameA > nameB)
							return 1;
						return 0;
					});
				else
					updatedState.hotelsListSorted.sort((a, b) => {

						let valueA = parseFloat(a[property]);
						let valueB = parseFloat(b[property]);
						if(valueA < valueB)
							return -1;
						if(valueA > valueB)
							return 1;
						return 0;
					});

			} else {

				updatedState.hotelsListSorted = [];
			}

			break;
	}

	return updatedState;
}

