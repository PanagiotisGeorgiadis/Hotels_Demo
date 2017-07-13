import React, { Component } from "react";

import HotelsListItemTitle from "./HotelsListItemTitle";
import HotelsListItemPrice from "./HotelsListItemPrice";
import HotelsListItemStars from "./HotelsListItemStars";

const HotelsListItemInfoContainer = ({ titleText = "", locationText = "", priceText = "", numOfStars = 0}) => {

	return (
		<div className = "title_and_price_container">
			<HotelsListItemTitle titleText = { titleText } locationText = { locationText } />
			<HotelsListItemPrice priceText = { priceText } />
			<HotelsListItemStars numOfStars = { numOfStars } />
		</div>
	);
}

export default HotelsListItemInfoContainer;