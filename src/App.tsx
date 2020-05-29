import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AddShow from "./pages/AddShow";
<<<<<<< HEAD
import Shows from "./pages/Shows";
=======
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/contact-us">
					<ContactUs />
				</Route>
				<Route path="/add-show">
					<AddShow />
				</Route>
<<<<<<< HEAD
				<Route path="/shows/:id">
					<Shows />
				</Route>
=======
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
