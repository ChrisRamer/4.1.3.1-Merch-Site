import { v4 } from "uuid";
import PropTypes from "prop-types";
import React from "react";

function NewPotionForm(props) {
	function handleNewPotionForrmSubmission(event) {
		event.preventDefault();
		props.onNewPotionCreation({
			name: event.target.name.value,
			description: event.target.description.value,
			price: event.target.price.value,
			quantity: event.target.quantity.value,
			id:v4()});
	}

	return (
		<React.Fragment>
			<form onSubmit={handleNewPotionForrmSubmission}>
				<input
					type="text"
					name="name"
					placeholder="Name"/>
				<br></br>
				<br></br>
				<input
					type="text"
					name="description"
					placeholder="Description"/>
				<br></br>
				<br></br>
				$ <input
					type="number"
					name="price"
					min="0.01"
					step="0.01"
					value="4.99"/>
				<br></br>
				<br></br>
				<input
					type="number"
					name="quantity"
					value="1"/>
				<br></br>
				<br></br>
				<button type="submit">Add potion!</button>
				<br></br>
				<br></br>
			</form>
		</React.Fragment>
	)
}

NewPotionForm.propTypes = {
	onNewPotionCreation: PropTypes.func
}

export default NewPotionForm;