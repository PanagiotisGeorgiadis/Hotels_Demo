import React from "react";


const SortContainer = () => {

	return (
		<div className = "sort_container">
			<div className  = "sort_options_container">
				<label className = "sort_options_label" for = "sort_label">Sort By: </label>
				<select className = "form-control" name = "sort_label">
					<option>None</option>
					<option>Distance</option>
					<option>Stars</option>
					<option>MinCost</option>
					<option>UserRating</option>
				</select>
			</div>
		</div>
	);
};

//	<option className = "default_select_option" disabled = "" selected = ""> Select Value </option>
 
export default SortContainer;