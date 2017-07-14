import React from "react";

const FilterByRatingContainer = ({ filterHandler }) => {

	return (
		<div className = "filter_by_rating_container">
			<label for = "rating_filter">Rating: </label>
			<select className = "form-control" name = "rating_filter" onChange = { filterHandler }>
				<option>None</option>
				<option>0 - 2</option>
				<option>2 - 4</option>
				<option>4 - 6</option>
				<option>6 - 8</option>
				<option>8 - 10</option>
			</select>
		</div>
	);
}

export default FilterByRatingContainer;