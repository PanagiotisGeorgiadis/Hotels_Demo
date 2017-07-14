import React from "react";

const HotelsListItemTitle = ({titleText, locationText}) => {

	return (
		<div className = "title_container">
			<h3> { titleText } </h3>
			<hr />
			<h4 className = "location_text"> { locationText } </h4>
		</div>
	);
}

export default HotelsListItemTitle;