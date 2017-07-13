import APIManager from "../utils/APIManager";

export const GET_HOTELS_LIST = "GET/HOTELS_LIST";
export const GET_HOTELS_LIST_SUCCESS = "GET/HOTELS_LIST/SUCCESS";
export const GET_HOTELS_LIST_FAILURE = "GET/HOTELS_LIST/FAILURE";

export const DRAW_HOTELS_LIST = "DRAW/HOTELS_LIST";

export const getHotelsList = (url) => {

	return (dispatch) => {
		APIManager.fetchDataBlocking(url)
			.then((response) => {
				dispatch(fetchOperationSuccess(response, GET_HOTELS_LIST_SUCCESS))
			})
			.catch((response) => dispatch(fetchOperationFailed(response, GET_HOTELS_LIST_FAILURE)));
	};
};

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

