import React from "react";

export default function Card(props) {
	return (
		<div
			className={props.size + " rounded-[2rem]"}
			style={{
				background:
					"radial-gradient(50% 50% at 50% 50%, #EB5757 0%, rgba(235, 87, 87, 0.67) 31.25%, rgba(235, 87, 87, 0) 100%), conic-gradient(from 180deg at 50% 50%, #5792EB 0deg, #F24AE1 90deg, #FF3535 180deg, #FEBF1E 270deg, #5792EB 360deg)",
			}}
		></div>
	);
}
