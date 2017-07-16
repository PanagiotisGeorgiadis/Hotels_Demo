import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { updateSelectedHotel } from "../actions/HotelsListActions";

import ErrorMessage from "../components/Generic/ErrorMessage";
import HotelPageImageContainer from "../components/HotelPage/HotelPageImageContainer";
import HotelPageInfoContainer from "../components/HotelPage/HotelPageInfoContainer";

class HotelPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedHotel: null
		};
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

		if(this.state.selectedHotel) {

			console.log(this.state.selectedHotel);
			let { Name, Location, EstablishmentType, Stars, Distance, MinCost, UserRating, UserRatingCount, UserRatingTitle, ImageUrl, ThumbnailUrl } = this.state.selectedHotel;

			let selectedObject = {Name, Location, EstablishmentType, Stars, Distance, MinCost, UserRating, UserRatingCount, UserRatingTitle};

			return (
				<div className = "hotels_page_container">
					<HotelPageImageContainer imageUrl = { ImageUrl } thumbnailUrl = { ThumbnailUrl } />
					<HotelPageInfoContainer selectedHotel =  { selectedObject } />
				</div>
			);
		} else {

			return(
				<div style={{textAlign: "center"}}>
					<ErrorMessage errorMessageText = { "Sorry the hotel you are looking for was not found! Please try again." } />
					<Link to = { "/" } >
						{ "Get me to homepage." }
					</Link>
				</div>
			)
		}

		
	}
}

const mapStateToProps = ({HotelPageReducer}) => {

	return {
		selectedHotel: HotelPageReducer.selectedHotelListItem
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		updateSelectedHotel
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelPage);
