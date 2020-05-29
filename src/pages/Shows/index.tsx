import React from "react";
import { Switch, Route } from "react-router-dom";
import Template from "./template";
import * as Scroll from "react-scroll";

import shows from "./data";

const Shows = () => {
	React.useEffect(() => {
		Scroll.animateScroll.scrollToTop({ duration: 500 });
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
