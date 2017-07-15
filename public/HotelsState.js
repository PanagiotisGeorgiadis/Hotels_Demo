const defaultHotelsListState = {
	showLoadingImage: true,
	errorMessage: null,
	hotelsList: [],
	hotelsListFiltered: [],
	hotelsListSorted: [],
	hotelsListDrawable: [],
	hotelsListOffset: 0,
	numOfInitialHotelsRender: 60,
}

const initialState = {

	HotelsListReducer: {
		...defaultHotelsListState,
	},
};

export default initialState;