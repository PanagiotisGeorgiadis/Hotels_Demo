import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getHotelsList } from "../actions/HotelsListActions";

import HotelsListItem from "../components/HotelsListItem";

class HotelsList extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...nextProps
		});
	}

	componentWillMount() {

		this.props.getHotelsList("/api/hotels?limit=" + 30);
		this.setState({
			...this.props
		});
	}

	render() {

		if(this.state.showLoadingImage) {

			return(
				<div className = "loading_image"></div>
			);

		} else {

			let hotelListItems = this.state.hotelsList.map((listItem, iterator) => {
				return (
					<HotelsListItem key = { iterator } imageSource = { listItem.ImageUrl } titleText = { listItem.Name } locationText = { listItem.Location } priceText = { "£" + listItem.MinCost } numOfStars = { listItem.Stars } userRatingTitle = { listItem.UserRatingTitle } userRatingScore = { listItem.UserRating } userRatingCount = { listItem.UserRatingCount } />
				);
			});
			return (
				<div className = "hotels_list">
					{ hotelListItems }
				</div>
			);
		}
	}
}

const mapStateToProps = ({HotelsListReducer}) => {

	return {
		showLoadingImage: HotelsListReducer.showLoadingImage,
		hotelsList: HotelsListReducer.hotelsList,
		hotelsListOffset: HotelsListReducer.hotelsListOffset,
		error: HotelsListReducer.error,

	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		getHotelsList
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsList);
