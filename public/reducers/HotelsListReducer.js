import { GET_HOTELS_LIST, GET_HOTELS_LIST_SUCCESS, GET_HOTELS_LIST_FAILED, DRAW_MORE_HOTELS_LIST, FILTER_HOTELS_LIST, SORT_HOTELS_LIST  } from "../actions/HotelsListActions";

const hotelsPerPage = 12;
const firstPageHotels = 60;

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case GET_HOTELS_LIST:

			break;

		case GET_HOTELS_LIST_SUCCESS:

			updatedState.error = null;
			updatedState.showLoadingImage = false;
			updatedState.hotelsList = action.payload.response.message;
			// updatedState.hotelsListSorted = [];
			// updatedState.hotelsListDrawable = updatedState.hotelsList.slice(0, firstPageHotels);
			break;

		case GET_HOTELS_LIST_FAILED:

			updatedState.error = action.payload;
			updatedState.showLoadingImage = false;
			break;

		case DRAW_MORE_HOTELS_LIST:

			var { offset } = action.payload;
			updatedState.offset = offset;
			// console.log(offset);
			// console.log(updatedState.hotelsListDrawable);
			// updatedState.hotelsListDrawable.push(updatedState.hotelsList.slice(offset, offset + hotelsPerPage));
			// console.log("%c DRAW_MORE_HOTELS_LIST", "font-size:24px; color: blue;");
			// console.log(updatedState.hotelsListSorted.length);
			// console.log(updatedState.hotelsListSorted);
			console.log(updatedState);

			if(updatedState.hotelsListSorted.length)
				updatedState.hotelsListDrawable = (offset + hotelsPerPage <= updatedState.hotelsListSorted.length) ? updatedState.hotelsListSorted.slice(0, offset + hotelsPerPage) : updatedState.hotelsListSorted;
			else
				updatedState.hotelsListDrawable = (offset + hotelsPerPage <= updatedState.hotelsList.length) ? updatedState.hotelsList.slice(0, offset + hotelsPerPage) : updatedState.hotelsList;

			break;

		case FILTER_HOTELS_LIST:

			if(action.payload.property === "Name") {

				updatedState.hotelsListSorted = updatedState.hotelsList.filter((listItem) => {
					return listItem[action.payload.property][0] === action.payload.value;
				});

			} else if(action.payload.property === "Stars" ){

				updatedState.hotelsListSorted = updatedState.hotelsList.filter((listItem) => {
					return listItem[action.payload.property] === action.payload.value;
				});

			} else if(action.payload.property === "UserRating" || action.payload.property === "MinCost") {

				if(!action.payload.value.includes("+")) {

					updatedState.hotelsListSorted = updatedState.hotelsList.filter((listItem) => {
						return listItem[action.payload.property] > 1000;
					});

				} else {

					var minValue = action.payload.value.split(" - ")[0];
					var maxValue = action.payload.value.split(" - ")[1];

					updatedState.hotelsListSorted = updatedState.hotelsList.filter((listItem) => {
						return listItem[action.payload.property] > (minValue-1) && listItem[action.payload.property] < (maxValue+1);
					});
				}
			}
			break;

		case SORT_HOTELS_LIST:

			break;
	}

	return updatedState;
}

