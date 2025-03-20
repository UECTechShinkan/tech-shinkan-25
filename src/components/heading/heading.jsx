import React from "react";
import "./index.css"
export const Heading = ({ name, id }) => {
	return (
		<div className="heading" id={id}>
			<h2>{name}</h2>
		</div>
	);
};
