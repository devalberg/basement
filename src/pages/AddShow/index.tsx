import React from "react";
import { Switch, Route } from "react-router-dom";
import Guide from "./Guide";
import Create from "./Create";
<<<<<<< HEAD
import * as Scroll from "react-scroll";

const AddShow = () => {
	React.useEffect(() => {
		Scroll.animateScroll.scrollToTop({ duration: 500 });
	}, []);
=======

const AddShow = () => {
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
	return (
		<>
			<Create />
			<Switch>
<<<<<<< HEAD
				<Route path="/add-show/guide">
					<Scroll.Element name="guide">
						<Guide />
					</Scroll.Element>
=======
				<Route route="/add-show/guide" exact>
					<Guide />
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
				</Route>
			</Switch>
		</>
	);
};

<<<<<<< HEAD
export default React.memo(AddShow);
=======
export default AddShow;
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
