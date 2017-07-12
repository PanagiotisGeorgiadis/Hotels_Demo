import React, { Component } from "react";

const UserRatingCount = ({ userRatingCount }) => {

	return (
		<span className = "user_rating_count_text">
			{ "Total User Ratings: " + userRatingCount }
		</span>
	);
}

export default UserRatingCount;