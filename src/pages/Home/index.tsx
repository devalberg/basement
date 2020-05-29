import React from "react";
import Discover from "./Discover";
import { Route, Switch } from "react-router-dom";
import AllShows from "./AllShows";
import * as Scroll from "react-scroll";

const Home = () => {
<<<<<<< HEAD
	React.useEffect(() => {
		Scroll.animateScroll.scrollToTop({ duration: 500 });
	}, []);

	return (
		<>
			<Discover />
=======
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
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
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

<<<<<<< HEAD
export default React.memo(Home);
=======
export default Home;
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
