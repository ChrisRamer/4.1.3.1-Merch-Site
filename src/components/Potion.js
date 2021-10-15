import React from "react";
import PropTypes from "prop-types";
import redPotion from "./../img/red_potion.png";
import bluePotion from "./../img/blue_potion.png";
import greenPotion from "./../img/green_potion.png";

function Potion(props) {
	let potionImg = redPotion;
	let textColor = "red";
	const outOfStock = props.quantity < 1;
	const stockText = !outOfStock ? props.quantity + " in stock" : "out of stock";
	const stockTextColor = !outOfStock ? "green" : "red";
	const restockBtn = !outOfStock ? null : <button type="submit">Restock</button>;
	const buyBtn = !outOfStock ? <button type="submit">Buy 1</button> : null;

	if (props.name.toLowerCase().startsWith("blue")) {
		potionImg = bluePotion;
		textColor = "#1c79fc";
	}
	else if (props.name.toLowerCase().startsWith("green")) {
		potionImg = greenPotion;
		textColor = "green";
	}

	return (
		<div id="potion_section" className="panel">

			<img src={potionImg} id="potion-image" alt="Icon for ' + props.name'" />

			<div id="potion-info">
				<h3 style={{color: textColor}}>{props.name}</h3>
				<i style={{color: textColor}}>{props.description}</i>
			</div>

			<br></br>
			<br></br>

			<div id="bottom-row">
				<div id="left-corner">
					<b style={{color: stockTextColor}}>{stockText}</b>
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