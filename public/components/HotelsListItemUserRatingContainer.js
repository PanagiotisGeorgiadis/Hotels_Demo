import React, { Component } from "react";

import UserRatingRibbonRow from "./UserRatingRibbonRow";
import UserRatingScore from "./UserRatingScore";
import UserRatingCount from "./UserRatingCount";

const HotelsListItemUserRatingContainer = ({ userRatingTitle = "", userRatingScore = "", userRatingCount = "" }) => {

	return (
		<div className = "user_rating_container">
			<UserRatingRibbonRow userRatingTitle = { userRatingTitle } />
			<UserRatingScore userRatingScore = { userRatingScore } />
			<UserRatingCount userRatingCount = { userRatingCount } />
		</div>
	);
}

export default HotelsListItemUserRatingContainer;