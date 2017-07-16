import React from "react";

const HotelPageInfoSection = ({infoTitle, infoData}) => {

	return (
		<tr>
			<td className = "info_title"> { infoTitle } </td>
			<td className = "info_data"> { infoData } </td>
		</tr>
	);
};

export default HotelPageInfoSection;