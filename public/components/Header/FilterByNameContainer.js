import React from "react";

const FilterByNameContainer = ({ filterHandler }) => {

	return (
		<div className = "filter_by_name_container">
			<label for = "name_filter">Name: </label>
			<select className = "form-control" name = "name_filter" onChange = { filterHandler }>
				<option>None</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
				<option>D</option>
				<option>E</option>
				<option>F</option>
				<option>G</option>
				<option>H</option>
				<option>I</option>
				<option>J</option>
				<option>K</option>
				<option>L</option>
				<option>M</option>
				<option>N</option>
				<option>O</option>
				<option>P</option>
				<option>Q</option>
				<option>R</option>
				<option>S</option>
				<option>T</option>
				<option>U</option>
				<option>V</option>
				<option>W</option>
				<option>X</option>
				<option>Y</option>
				<option>Z</option>
			</select>
		</div>
	);
}

export default FilterByNameContainer;