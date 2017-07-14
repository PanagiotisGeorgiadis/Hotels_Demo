import React from "react";

const HotelsListItemPrice = ({priceText}) => {

	return (
		<div className = "price_container">
			<h3> { priceText } </h3>
		</div>
	);
}

export default HotelsListItemPrice;