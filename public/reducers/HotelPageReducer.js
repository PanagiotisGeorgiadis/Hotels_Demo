import { UPDATE_SELECTED_ITEM } from "../actions/HotelPageActions";

const hotelsPerPage = 24;

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	updatedState.selectedHotelListItem = null;
	switch(action.type) {

		case UPDATE_SELECTED_ITEM:
			updatedState.selectedHotelListItem = action.payload.selectedItem;
			break;
	}

	return updatedState;
}

