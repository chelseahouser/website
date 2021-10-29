import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import BlogList from "./pages/blogList";
import BlogPost from "./pages/blogPost";
// const { initializeApp } = require("firebase/app");
// const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");


function App() {
	return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/blogs" component={BlogList} />
						<Route exact path="/blog/:id" component={BlogPost} />
					</Switch>
				</div>
			</Router>
	);
}

export default App;

