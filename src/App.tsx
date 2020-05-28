import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AddShow from "./pages/AddShow";

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
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
