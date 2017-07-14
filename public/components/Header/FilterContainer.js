import React from "react";

import FilterByNameContainer from "./FilterByNameContainer";
import FilterByStarsContainer from "./FilterByStarsContainer";
import FilterByRatingContainer from "./FilterByRatingContainer";
import FilterByCostContainer from "./FilterByCostContainer";


const FilterContainer = ({ filterByNameHandler, filterByStarsHandler, filterByUserRatingHandler, filterByCostHandler }) => {

	return (
		<div className = "filter_container">

			<h4 className = "filter_options_header"></h4>
			<div className = "filter_options_container">
				<FilterByNameContainer filterHandler = { filterByNameHandler } />
				<FilterByStarsContainer filterHandler = { filterByStarsHandler } />
				<FilterByRatingContainer filterHandler = { filterByUserRatingHandler } />
				<FilterByCostContainer filterHandler = { filterByCostHandler } />
			</div>

		</div>
	);
};

export default FilterContainer;