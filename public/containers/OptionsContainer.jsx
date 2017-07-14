import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { filterHotelsList, sortHotelsList, drawMoreHotelsList } from "../actions/HotelsListActions";

import Header from "../components/Header/Header";
import FilterContainer from "../components/Header/FilterContainer";
import SortContainer from "../components/Header/SortContainer";

class OptionsContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	filterByMinCost(event) {
		// console.log(hotelsList.filter(({MinCost}) => {
		// 	return MinCost === value;
		// }));
		// console.log(event);
		// console.log(event.target.value);
		this.state.filterHotelsList(event.target.value, "MinCost");
		this.state.drawMoreHotelsList(0);
	}

	filterByUserRating(event) {
		// console.log(hotelsList.filter(({UserRating}) => {
		// 	return UserRating === value;
		// }));
		// console.log(event);
		// console.log(event.target.value);
		this.state.filterHotelsList(event.target.value, "UserRating");
		this.state.drawMoreHotelsList(0);
	}

	filterByStars(event) {
		// console.log(hotelsList.filter(({Stars}) => {
		// 	return Stars === value;
		// }));
		// console.log(event);
		// console.log(event.target.value);
		this.state.filterHotelsList(event.target.value, "Stars");
		this.state.drawMoreHotelsList(0);
	}

	filterByName(event) {
		// console.log(hotelsList.filter(({Name}) => {
		// 	return Name[0] === value;
		// }));
		// console.log(event);
		// console.log(event.target.value);
		this.state.filterHotelsList(event.target.value, "Name");
		this.state.drawMoreHotelsList(0);
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
		
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		filterHotelsList,
		sortHotelsList,
		drawMoreHotelsList
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
