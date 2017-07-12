import React, { Component } from "react";

const UserRatingScore = ({ userRatingScore }) => {

	return (
		<span className = "user_rating_text">
			{ "User Rating Score: " + userRatingScore }
		</span>
	);
}

export default UserRatingScore;