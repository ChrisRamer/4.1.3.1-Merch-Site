import React from "react";
import Potion from "./Potion";
import PropTypes from "prop-types";

function PotionList(props) {
	return (
		<React.Fragment>

			<div className="grid-container">
				{props.potionList.map((potion, index) =>
					<Potion name={potion.name}
						description={potion.description}
						price={potion.price}
						quantity={potion.quantity}
						handleClickBuy={props.onPotionPurchase}
						key={index} />
				)}
			</div>
		</React.Fragment>
	)
}

PotionList.propTypes = {
	potionList: PropTypes.array,
	onPotionPurchase: PropTypes.func
}

export default PotionList;