import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { drawLoadingImage, hideLoadingImage,
		 getHotelsList, drawInitialHotelsList, drawMoreHotelsList,
		 updateScrollPosition} from "../actions/HotelsListActions";

import { updateSelectedHotel } from "../actions/HotelPageActions";

import ErrorMessage from "../components/Generic/ErrorMessage";
import HotelsListItem from "../components/HotelsListItem/HotelsListItem";
import OptionsContainer from "./OptionsContainer.jsx";

class HotelsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			handleScrollInterval: null,
		};
	}

	updateSelectedHotel(hotelListItem, event) {

		this.state.updateSelectedHotel(hotelListItem);
	}

	handleScroll(event) {

		if(!this.state.handleScrollInterval) {

			var windowHeight = window.innerHeight;
			if( event.target.scrollHeight * 0.97 < event.target.scrollTop + windowHeight )
				this.props.drawMoreHotelsList(this.state.hotelsListDrawable.length);

			this.state.handleScrollInterval = setTimeout(() => { this.state.handleScrollInterval = null; }, 32);
		}
		this.state.updateScrollPosition(event.target.scrollTop);
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

	componentDidUpdate() {

		if(this.hotels_list_container)
			this.hotels_list_container.scrollTop = this.state.scrollPosition;
	}

	render() {

		if(this.state.showLoadingImage) {

			return(
				<div className = "hotels_list_container" onScroll = { this.handleScroll.bind(this) }>
					<OptionsContainer />
					<div className = "loading_image_container"></div>
				</div>
			);

		} else if(this.state.showErrorMessage) {

			return (
				<div className = "hotels_list_container" onScroll = { scrollHandler }>
					<OptionsContainer />
					<ErrorMessage errorMessageText = { this.state.errorMessage } />
				</div>
			);

		} else {

			let hotelListItems = this.state.hotelsListDrawable.map((listItem, iterator) => {
				return (
					<HotelsListItem key = { iterator } imageSource = { listItem.ImageUrl } titleText = { listItem.Name } locationText = { listItem.Location } priceText = { "£" + listItem.MinCost } numOfStars = { listItem.Stars } userRatingTitle = { listItem.UserRatingTitle } userRatingScore = { listItem.UserRating } userRatingCount = { listItem.UserRatingCount } establishmentId = { listItem.EstablishmentId } onClickHandler = { this.updateSelectedHotel.bind(this, listItem) }/>
				);
			});

			return (
				<div ref = {(list_container) => { this.hotels_list_container = list_container }} className = "hotels_list_container" onScroll = { this.handleScroll.bind(this) } >
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
		showErrorMessage: HotelsListReducer.showErrorMessage,
		errorMessage: HotelsListReducer.errorMessage,
		hotelsList: HotelsListReducer.hotelsList,
		hotelsListDrawable: HotelsListReducer.hotelsListDrawable,
		numOfInitialHotelsRender: HotelsListReducer.numOfInitialHotelsRender,
		scrollPosition: HotelsListReducer.scrollPosition
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		drawLoadingImage,
		hideLoadingImage,
		getHotelsList,
		drawInitialHotelsList,
		drawMoreHotelsList,
		updateSelectedHotel,
		updateScrollPosition
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsList);
