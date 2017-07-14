import React from "react";

const HotelsListItemStars = ({numOfStars}) => {

	let stars = [];
	for(var i = 0; i < numOfStars; i++) {
		stars.push(<i className = { "fa fa-star" } aria-hidden = { "true" } key = { i } ></i>)
	}

	return (
		<div className = "stars_container" title = { numOfStars + " stars"}>
			{ stars }
		</div>
	);
}

export default HotelsListItemStars;