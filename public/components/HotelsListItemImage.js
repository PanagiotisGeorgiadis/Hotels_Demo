import React, { Component } from "react";

const HotelsListItemImage = ({ imageSource }) => {

	var backgroundImageURL = (imageSource) ? "url('" + imageSource + "')" : "";
	return (
		<div className = "image_container" >
			<object data = { imageSource } type = "image/png">
			    <img src = "/images/default.png" />
			  </object>
		</div>
	);
}

export default HotelsListItemImage;