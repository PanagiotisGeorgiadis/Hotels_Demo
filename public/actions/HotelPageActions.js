export const UPDATE_SELECTED_ITEM = "UPDATE/SELECTED_ITEM";

export const updateSelectedHotel = (selectedItem) => ({
	type: UPDATE_SELECTED_ITEM,
	payload: {
		selectedItem
	}
});