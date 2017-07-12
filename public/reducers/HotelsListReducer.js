import { GET_HOTELS_LIST, DRAW_HOTELS_LIST,  } from "../actions/HotelsListActions";


export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case GET_HOTELS_LIST:

			break;

		case DRAW_HOTELS_LIST:

			break;

		// case UPDATE_CATEGORY_DISPLAY_NAME:

		// 	break;

		// case UPDATE_CATEGORY_NAME:

		// 	break;

		// case UPDATE_CATEGORY_TAGS:

		// 	break;

		// case SAVE_CATEGORY_SUCCESS:

		// 	break;

		// case SAVE_CATEGORY_FAILED:

		// 	break;

		// case GET_CATEGORIES_SUCCESS:

		// 	break;

		// case GET_CATEGORIES_FAILED:

		// 	break;

		// case DELETE_CATEGORY:

		// 	break;
	}

	return updatedState;
}

