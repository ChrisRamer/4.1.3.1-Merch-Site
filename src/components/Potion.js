import React from "react";
import PropTypes from "prop-types";

function Potion(props) {
	return (
		<React.Fragment>
			<p>Potion panel</p>
		</React.Fragment>
	);
}

Potion.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number
}

export default Potion;