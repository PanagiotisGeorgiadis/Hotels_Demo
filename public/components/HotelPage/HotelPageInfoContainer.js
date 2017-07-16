import React from "react";

import HotelPageInfoSection from "./HotelPageInfoSection";

const HotelPageInfoContainer = ({ selectedHotel }) => {

	let hotelPageInfoSections = [];
	let iterator = 0;
	for(var property in selectedHotel) {
		hotelPageInfoSections.push(<HotelPageInfoSection key = { iterator } infoTitle = { property } infoData = { selectedHotel[property] } />);
		iterator++;
	}

	return (
		<div className = "hotels_page_info_container">
			<table>
				<tbody>
					{ hotelPageInfoSections }
				</tbody>
			</table>
		</div>
	);
};

export default HotelPageInfoContainer;