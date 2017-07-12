import React, { Component } from "react";

import HotelsListItemImage from "./HotelsListItemImage";
import HotelsListItemInfoContainer from "./HotelsListItemInfoContainer";
import HotelsListItemUserRatingContainer from "./HotelsListItemUserRatingContainer";

const HotelsListItem = ({ imageSource, titleText, priceText, numOfStars, userRatingTitle, userRatingScore, userRatingCount }) => {

	return (
		<div className = "hotel_list_item">
			<HotelsListItemImage imageSource = { imageSource } />
			<HotelsListItemInfoContainer titleText = { titleText } priceText = { priceText } numOfStars = { numOfStars } />
			<HotelsListItemUserRatingContainer userRatingTitle = { userRatingTitle } userRatingScore = { userRatingScore } userRatingCount = { userRatingCount } />
		</div>
	);
}

export default HotelsListItem;