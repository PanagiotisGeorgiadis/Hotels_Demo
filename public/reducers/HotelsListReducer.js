import { GET_HOTELS_LIST, GET_HOTELS_LIST_SUCCESS, GET_HOTELS_LIST_FAILED, DRAW_HOTELS_LIST  } from "../actions/HotelsListActions";


export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case GET_HOTELS_LIST:

			break;

		case GET_HOTELS_LIST_SUCCESS:

			// console.log(state);
			// console.log(action.payload.response.message);
			updatedState.error = null;
			updatedState.showLoadingImage = false;
			updatedState.hotelsList = action.payload.response.message;
			break;

		case GET_HOTELS_LIST_FAILED:

			updatedState.error = action.payload;
			break;

		case DRAW_HOTELS_LIST:

			break;
	}

	return updatedState;
}

