import React from "react";
import Potion from "./Potion";
import PropTypes from "prop-types";

function PotionList(props) {
	return (
		<React.Fragment>

			<div class="grid-container">
				{props.potionList.map((potion, index) =>
					<div class="grid-item">
						<Potion name={potion.name}
							description={potion.description}
							price={potion.price}
							quantity={potion.quantity}
							key={index} />
					</div>
				)}
			</div>
		</React.Fragment>
	)
}

PotionList.propTypes = {
	potionList: PropTypes.array
}

export default PotionList;