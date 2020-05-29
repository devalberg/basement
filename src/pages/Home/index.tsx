import React from "react";
import Discover from "./Discover";
import { Route, Switch } from "react-router-dom";
import AllShows from "./AllShows";
import * as Scroll from "react-scroll";

const Home = () => {
	React.useEffect(() => {
		Scroll.animateScroll.scrollToTop({ duration: 500 });
	}, []);

	return (
		<>
			<Discover />
			<Switch>
				<Route path="/all-shows">
					<Scroll.Element name="all-shows">
						<AllShows />
					</Scroll.Element>
				</Route>
			</Switch>
		</>
	);
};

export default React.memo(Home);
