import React from "react";
import { Switch, Route } from "react-router-dom";
import Template from "./template";

import shows from "./data";

const Shows = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Switch>
			{shows.map((show, index) => (
				<Route path={`/shows/${index}`}>
					<Template data={show} />
				</Route>
			))}
		</Switch>
	);
};

export default Shows;
