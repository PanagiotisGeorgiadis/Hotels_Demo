import React from "react";

const FilterByCostContainer = ({ filterHandler }) => {

	return (
		<div className = "filter_by_cost_container">
			<label for = "stars_filter">Cost: </label>
			<select className = "form-control" name = "stars_filter" onChange = { filterHandler }>
				<option>None</option>
				<option>0 - 250</option>
				<option>251 - 500</option>
				<option>501 - 750</option>
				<option>751 - 1000</option>
				<option>1000+</option>
			</select>
		</div>
	);
}

export default FilterByCostContainer;