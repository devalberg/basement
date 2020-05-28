import React from "react";
import Discover from "./Discover";
import { Route, Switch } from "react-router-dom";
import AllShows from "./AllShows";
import * as Scroll from "react-scroll";

const Home = () => {
	const onAllShowClick = () => {
		setTimeout(() => {
			Scroll.scroller.scrollTo("all-shows", {
				duration: 500,
				smooth: "easeOut",
				offset: -90,
			});
		}, 50);
	};

	return (
		<>
			<Discover onAllShowClick={onAllShowClick} />
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

export default Home;
