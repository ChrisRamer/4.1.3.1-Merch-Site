import React from "react";
import Potion from "./Potion";
import PropTypes from "prop-types";

function PotionList(props) {
	return (
		<React.Fragment>
			{props.potionList.map((potion, index) =>
				<Potion name={potion.name}
					description={potion.description}
					price={potion.price}
					quantity={potion.quantity}
					key={index} />
			)}
		</React.Fragment>
	)
}

PotionList.propTypes = {
	potionList: PropTypes.array
}

export default PotionList;