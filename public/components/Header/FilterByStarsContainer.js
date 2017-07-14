import React from "react";

const FilterByStarsContainer = ({ filterHandler }) => {

	return (
		<div className = "filter_by_stars_container">
			<label for = "stars_filter">Stars: </label>
			<select className = "form-control" name = "stars_filter" onChange = { filterHandler }>
				<option>None</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</select>
		</div>
	);
}

export default FilterByStarsContainer;