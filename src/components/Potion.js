import React from "react";
import PropTypes from "prop-types";
import redPotion from "./../img/red_potion.png";
import bluePotion from "./../img/blue_potion.png";
import greenPotion from "./../img/green_potion.png";

function Potion(props) {
	let potionImg = redPotion;
	const outOfStock = props.quantity < 1;
	const stockText = !outOfStock ? props.quantity + " in stock" : "out of stock";
	const stockTextColor = !outOfStock ? "green" : "red";
	const restockBtn = !outOfStock ? null : <button type="submit">Restock</button>;
	const buyBtn = !outOfStock ? <button type="submit">Buy 1</button> : null;

	if (props.name.toLowerCase().startsWith("blue")) {
		potionImg = bluePotion;
	}
	else if (props.name.toLowerCase().startsWith("green")) {
		potionImg = greenPotion;
	}

	return (
		<div id="potion_section" className="panel">

			<img src={potionImg} id="potion-image" alt="Icon for ' + props.name'" />

			<div id="potion-info">
				<h3>{props.name}</h3>
				<i>{props.description}</i>
			</div>

			<br></br>
			<br></br>

			<div id="bottom-row">
				<div id="left-corner">
					<b color={stockTextColor}>{stockText}</b>
					<br></br>
					{restockBtn}
				</div>
				<div id="middle">
					<i>You own 0</i>
				</div>
				<div id="right-corner">
					<b>${props.price}</b>
					<br></br>
					{buyBtn}
				</div>
			</div>

		</div>
	);
}

Potion.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number
}

export default Potion;