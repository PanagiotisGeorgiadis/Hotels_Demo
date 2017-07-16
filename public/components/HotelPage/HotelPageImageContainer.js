import React from "react";

const HotelPageImageContainer = ({imageUrl = "", thumbnailUrl = ""}) => {

	return (
		<div className = "hotels_page_image_container">
			<div className = "image_container">
				<object data = { imageUrl } type = "image/png">
					<img src = "/images/default.png" />
				</object>
			</div>
			<div className = "thumbnail_container" >
				<div>
					<object data = { thumbnailUrl } type = "image/png">
						<img src = "/images/default.png" />
					</object>
				</div>
			</div>
		</div>
	);
};

export default HotelPageImageContainer;