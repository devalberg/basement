import React from "react";
import { Switch, Route } from "react-router-dom";
import Guide from "./Guide";
import Create from "./Create";

const AddShow = () => {
	return (
		<>
			<Create />
			<Switch>
				<Route route="/add-show/guide" exact>
					<Guide />
				</Route>
			</Switch>
		</>
	);
};

export default AddShow;
