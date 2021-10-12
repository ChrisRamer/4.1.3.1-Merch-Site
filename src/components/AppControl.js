import React from "react";
import NewPotionForm from "./NewPotionForm";
import PotionList from "./PotionList";

class AppControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			masterPotionList: []
		};
	}

	handleClick = () => {
		this.setState(prevState => ({
			formVisibleOnPage: !prevState.formVisibleOnPage
		}));
	}

	handleAddingNewPotionToList = (newPotion) => {
		const newMasterPotionList = this.state.masterPotionList.concat(newPotion);
		this.setState({
			masterPotionList: newMasterPotionList,
			formVisibleOnPage: false
		});
	}

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;

		if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewPotionForm onNewPotionCreation={this.handleAddingNewPotionToList} />;
			buttonText = "Return to potion list";
		} else {
			currentlyVisibleState = <PotionList potionList={this.state.masterPotionList} />;
			buttonText = "Add potion";
		}

		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		)
	}
}

export default AppControl;