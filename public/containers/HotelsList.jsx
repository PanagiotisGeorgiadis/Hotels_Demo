import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { drawLoadingImage, hideLoadingImage,
		 getHotelsList, drawInitialHotelsList, drawMoreHotelsList } from "../actions/HotelsListActions";

import HotelsListItem from "../components/HotelsListItem/HotelsListItem";
import OptionsContainer from "./OptionsContainer.jsx";

class HotelsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			handleScrollInterval: null,
		};
	}

	handleScroll(event) {

		if(!this.state.handleScrollInterval) {

			var windowHeight = window.innerHeight;
			if( event.target.scrollHeight * 0.97 < event.target.scrollTop + windowHeight )
				this.props.drawMoreHotelsList(this.state.hotelsListDrawable.length);

			this.state.handleScrollInterval = setTimeout(() => { this.state.handleScrollInterval = null; }, 32);
		}
	}

	componentWillReceiveProps(nextProps) {

		if(!nextProps.showLoadingImage)
			this.state.hideLoadingImage();

		if(nextProps.hotelsList.length && !nextProps.hotelsListDrawable.length)
			this.state.drawInitialHotelsList(this.state.numOfInitialHotelsRender);

		this.setState({
			...nextProps
		});
	}

	componentWillMount() {

		this.props.drawLoadingImage();
		this.props.getHotelsList();
		this.setState({
			...this.props
		});
	}

	render() {

		if(this.state.showLoadingImage) {

			return(
				<div className = "hotels_list_container" onScroll = { this.handleScroll.bind(this) }>
					<OptionsContainer />
					<div className = "loading_image_container"></div>
				</div>
			);

		} else {

			let hotelListItems = this.state.hotelsListDrawable.map((listItem, iterator) => {
				return (
					<HotelsListItem key = { iterator } imageSource = { listItem.ImageUrl } titleText = { listItem.Name } locationText = { listItem.Location } priceText = { "£" + listItem.MinCost } numOfStars = { listItem.Stars } userRatingTitle = { listItem.UserRatingTitle } userRatingScore = { listItem.UserRating } userRatingCount = { listItem.UserRatingCount } />
				);
			});

			return (
				<div className = "hotels_list_container" onScroll = { this.handleScroll.bind(this) }>
					<OptionsContainer />
					<div className = "hotels_list">
						{ hotelListItems }
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = ({HotelsListReducer}) => {

	return {
		showLoadingImage: HotelsListReducer.showLoadingImage,
		hotelsList: HotelsListReducer.hotelsList,
		hotelsListDrawable: HotelsListReducer.hotelsListDrawable,
		hotelsListOffset: HotelsListReducer.hotelsListOffset,
		errorMessage: HotelsListReducer.errorMessage,
		numOfInitialHotelsRender: HotelsListReducer.numOfInitialHotelsRender,
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		drawLoadingImage,
		hideLoadingImage,
		getHotelsList,
		drawInitialHotelsList,
		drawMoreHotelsList,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsList);
