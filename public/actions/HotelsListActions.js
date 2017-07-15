import APIManager from "../utils/APIManager";

export const DRAW_LOADING_IMAGE = "DRAW/LOADING_IMAGE";
export const HIDE_LOADING_IMAGE = "HIDE/LOADING_IMAGE";

export const DRAW_ERROR_MESSAGE = "DRAW/ERROR_MESSAGE";
export const HIDE_ERROR_MESSAGE = "HIDE/ERROR_MESSAGE";

export const GET_HOTELS_LIST = "GET/HOTELS_LIST";
export const GET_HOTELS_LIST_SUCCESS = "GET/HOTELS_LIST/SUCCESS";
export const GET_HOTELS_LIST_FAILURE = "GET/HOTELS_LIST/FAILURE";

export const DRAW_INITIAL_HOTELS_LIST = "DRAW/INITIAL/HOTELS_LIST";
export const DRAW_MORE_HOTELS_LIST = "DRAW/MORE/HOTELS_LIST";

export const FILTER_HOTELS_LIST = "FILTER/HOTELS_LIST";
export const SORT_HOTELS_LIST = "SORT/HOTELS_LIST";

export const getHotelsList = (url) => {

	return (dispatch) => {
		APIManager.fetchDataBlocking(url)
			.then((response) => {
				dispatch(fetchOperationSuccess(response, GET_HOTELS_LIST_SUCCESS));
				dispatch(hideLoadingImage());
			})
			.catch((response) => {
				dispatch(fetchOperationFailed(response, GET_HOTELS_LIST_FAILURE))
				dispatch(hideLoadingImage());
				dispatch(showErrorMessage());
			});
	};
};

export const drawLoadingImage = () => ({
	type: DRAW_LOADING_IMAGE,
	payload: {}
});

export const hideLoadingImage = () => ({
	type: HIDE_LOADING_IMAGE,
	payload: {}
});

export const showErrorMessage = (message) => ({
	type: SHOW_ERROR_MESSAGE,
	payload: {
		message
	}
});

export const hideErrorMessage = () => ({
	type: HIDE_ERROR_MESSAGE,
	payload: {}
})

export const drawInitialHotelsList = (numOfHotels) => ({
	type: DRAW_INITIAL_HOTELS_LIST,
	payload: {
		numOfHotels
	}
});

export const drawMoreHotelsList = (offset) => ({
	type: DRAW_MORE_HOTELS_LIST,
	payload: {
		offset
	}
});

export const filterHotelsList = (value, property) => ({
	type: FILTER_HOTELS_LIST,
	payload: {
		value,
		property
	}
});

export const sortHotelsList = (property) => ({
	type: SORT_HOTELS_LIST,
	payload: {
		property
	}
});

export const fetchOperationSuccess = (response, actionType) => ({
	type: actionType,
	payload: {
		response
	}
});

export const fetchOperationFailed = (response, actionType) => ({
	type: actionType,
	payload: {
		response
	}
});

