import React from "react";
import { Link } from "react-router-dom";

import HotelsListItemImage from "./HotelsListItemImage";
import HotelsListItemInfoContainer from "./HotelsListItemInfoContainer";
import HotelsListItemUserRatingContainer from "./HotelsListItemUserRatingContainer";

const HotelsListItem = ({ imageSource, titleText, locationText, priceText, numOfStars, userRatingTitle, userRatingScore, userRatingCount, establishmentId, onClickHandler }) => {

	return (

		<div className = "hotel_list_item">
			<Link to = { "/hotel/" + establishmentId } onClick = { onClickHandler }>
				<HotelsListItemImage imageSource = { imageSource } />
				<HotelsListItemInfoContainer titleText = { titleText } locationText = { locationText } priceText = { priceText } numOfStars = { numOfStars } />
				<HotelsListItemUserRatingContainer userRatingTitle = { userRatingTitle } userRatingScore = { userRatingScore } userRatingCount = { userRatingCount } />
			</Link>
		</div>
	);
}

export default HotelsListItem;