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
		this.state = {};
	}

	filterByMinCost(event) {

		this.state.filterHotelsList(event.target.value, "MinCost");
		this.state.drawInitialHotelsList(this.state.numOfInitialHotelsRender);
	}

	filterByUserRating(event) {

		this.state.filterHotelsList(event.target.value, "UserRating");
		this.state.drawInitialHotelsList(this.state.numOfInitialHotelsRender);
	}

	filterByStars(event) {

		this.state.filterHotelsList(event.target.value, "Stars");
		this.state.drawInitialHotelsList(this.state.numOfInitialHotelsRender);
	}

	filterByName(event) {

		this.state.filterHotelsList(event.target.value, "Name");
		this.state.drawInitialHotelsList(this.state.numOfInitialHotelsRender);
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
				<SortContainer />
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
