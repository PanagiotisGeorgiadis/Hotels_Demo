import React from "react";

const UserRatingRibbonRow = ({ userRatingTitle }) => {

	return (
		<div className = "ribbon_row_container">
			<div className = "ribbon_container">
				<div className = "ribbon">
					{ userRatingTitle }
				</div>
			</div>
		</div>
	);
}

export default UserRatingRibbonRow;