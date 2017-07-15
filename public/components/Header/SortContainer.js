import React from "react";


const SortContainer = ({sortHotelsListHandler}) => {

	return (
		<div className = "sort_container">
			<div className  = "sort_options_container">
				<label className = "sort_options_label" for = "sort_label">Sort By: </label>
				<select className = "form-control" name = "sort_label" onChange = { sortHotelsListHandler }>
					<option>None</option>
					<option>Name</option>
					<option>Distance</option>
					<option>Stars</option>
					<option>MinCost</option>
					<option>UserRating</option>
				</select>
			</div>
		</div>
	);
};
 
export default SortContainer;