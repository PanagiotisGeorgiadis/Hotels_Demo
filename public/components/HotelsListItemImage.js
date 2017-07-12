import React, { Component } from "react";

const HotelsListItemImage = ({ imageSource }) => {

	var backgroundImageURL = (imageSource) ? "url('" + imageSource + "')" : "";
	return (
		<div className = "image_container" style = {{backgroundImage: backgroundImageURL}}>
		</div>
	);
}

export default HotelsListItemImage;