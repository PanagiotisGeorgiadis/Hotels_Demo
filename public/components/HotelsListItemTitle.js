import React, { Component } from "react";

const HotelsListItemTitle = ({titleText}) => {

	return (
		<div className = "title_container">
			<h3> { titleText } </h3>
		</div>
	);
}

export default HotelsListItemTitle;