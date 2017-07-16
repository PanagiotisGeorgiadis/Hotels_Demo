const defaultHotelsListState = {
	showLoadingImage: true,
	errorMessage: null,
	hotelsList: [],
	hotelsListFiltered: [],
	hotelsListSorted: [],
	hotelsListDrawable: [],
	numOfInitialHotelsRender: 60,
	selectedHotelListItem: null
}

const initialState = {

	HotelsListReducer: {
		...defaultHotelsListState,
	},
	HotelPageReducer: {
		selectedHotelListItem: defaultHotelsListState.selectedHotelListItem
	},
};

export default initialState;