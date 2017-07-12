import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import APIManager from "../utils/APIManager";

import { getHotelsList } from "../actions/HotelsListActions";

import HotelsListItem from "../components/HotelsListItem";

class HotelsList extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps() {

	}

	componentWillMount() {

	}

	render() {

		let hotelsList = [];

		return (
			<div className = "hotels_list">
				{ hotelsList }
			</div>
		);
	}
}

const mapStateToProps = (state) => {

	// return {
	// 	pageTitle: state.PageTitleReducer,
	// 	tableShouldUpdate: state.CategoriesReducer.tableShouldUpdate,
	// 	tableHeaders: state.CategoriesReducer.tableHeaders,
	// 	tableRows: state.CategoriesReducer.tableRows,
	// 	tableActionCells: state.CategoriesReducer.tableActionCells,
	// 	categories: state.CrudOperationReducer.categories
	// };
	return {
		message: "Hallo"
	}
};

const mapDispatchToProps = (dispatch) => {

	// return bindActionCreators({
	// 	updatePageTitle,
	// 	getCategories,
	// 	deleteCategory
	// }, dispatch);
	return bindActionCreators({
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsList);