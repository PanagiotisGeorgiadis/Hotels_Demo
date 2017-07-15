import React from "react";

const FilterByNameContainer = ({ filterHandler }) => {

	let optionsArray = ["None","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	let optionsElementArray = optionsArray.map((optionText, iterator) => {
		return <option key = { iterator } value = { optionText }> { optionText } </option>
	});

	return (
		<div className = "filter_by_name_container">
			<label for = "name_filter">Name: </label>
			<select className = "form-control" name = "name_filter" onChange = { filterHandler }>
				{ optionsElementArray }
			</select>
		</div>
	);
}

export default FilterByNameContainer;