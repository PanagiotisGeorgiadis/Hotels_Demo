const defaultHotelsListState = {
	showLoadingImage: true,
	hotelsList: [],
	hotelsListOffset: 0,
	error: null,
}

const initialState = {

	HotelsListReducer: {
		...defaultHotelsListState,
	},
};

export default initialState;