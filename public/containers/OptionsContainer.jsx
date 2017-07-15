import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { filterHotelsList, sortHotelsList, drawInitialHotelsList } from "../actions/HotelsListActions";

import Header from "../components/Header/Header";
import FilterContainer from "../components/Header/FilterContainer";
import SortContainer from "../components/Header/SortContainer";

class OptionsContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nameFilterValue: "None",
			starsFilterValue: "None",
			userRatingFilterValue: "None",
			minCostFilterValue: "None",
		};
	}

	sortHotelsListHandler(event) {

		this.state.sortHotelsList(event.target.value);
		this.state.drawInitialHotelsList(this.state.numOfInitialHotelsRender);
	}

	applyFilters() {

		let { nameFilterValue, starsFilterValue, userRatingFilterValue, minCostFilterValue } = this.state;

		this.state.filterHotelsList({Name: nameFilterValue, Stars: starsFilterValue, UserRating: userRatingFilterValue, MinCost: minCostFilterValue});
		this.state.drawInitialHotelsList(this.state.numOfInitialHotelsRender);
	}

	filterByMinCost(event) {

		this.state.minCostFilterValue = event.target.value;
		this.applyFilters();
	}

	filterByUserRating(event) {

		this.state.userRatingFilterValue = event.target.value;
		this.applyFilters();
	}

	filterByStars(event) {

		this.state.starsFilterValue = event.target.value;
		this.applyFilters();
	}

	filterByName(event) {

		this.state.nameFilterValue = event.target.value;
		this.applyFilters();
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...nextProps
		});
	}

	componentWillMount() {

		this.setState({
			...this.props
		});
	}

	render() {

		return(
			<div className = "options_container">
				<Header headerClassName = { "page_header" } headerText = { "Welcome to Hotels!" } />
				<FilterContainer filterByNameHandler = { this.filterByName.bind(this) } filterByStarsHandler = { this.filterByStars.bind(this) } filterByUserRatingHandler = { this.filterByUserRating.bind(this) } filterByCostHandler = { this.filterByMinCost.bind(this) } />
				<SortContainer sortHotelsListHandler = { this.sortHotelsListHandler.bind(this) } />
			</div>
		)

	}
}

const mapStateToProps = ({HotelsListReducer}) => {

	return {
		numOfInitialHotelsRender: HotelsListReducer.numOfInitialHotelsRender,
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		filterHotelsList,
		sortHotelsList,
		drawInitialHotelsList
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
