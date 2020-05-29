import React from "react";
import { Switch, Route } from "react-router-dom";
import Guide from "./Guide";
import Create from "./Create";
import * as Scroll from "react-scroll";

const AddShow = () => {
	React.useEffect(() => {
		Scroll.animateScroll.scrollToTop({ duration: 500 });
	}, []);
	return (
		<>
			<Create />
			<Switch>
				<Route path="/add-show/guide">
					<Scroll.Element name="guide">
						<Guide />
					</Scroll.Element>
				</Route>
			</Switch>
		</>
	);
};

export default AddShow;
