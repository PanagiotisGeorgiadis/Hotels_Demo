const defaultHotelsListState = {
	showLoadingImage: true,
	hotelsList: [],
	hotelsListSorted: [],
	hotelsListDrawable: [],
	hotelsListOffset: 0,
	error: null,
}

const initialState = {

	HotelsListReducer: {
		...defaultHotelsListState,
	},
};

export default initialState;