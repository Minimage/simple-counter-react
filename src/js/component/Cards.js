import React from "react";

const Cards = (props) => {
	return (
		<div className="card">
			<div className="card-body">
				<p className="card-text">{props.text}</p>
			</div>
		</div>
	);
};

export default Cards;
