import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import BlogList from "./pages/blogList";
// import BlogPost from "./pages/blogPost";

function App() {
	return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/blogs" component={BlogList} />
						{/* <Route exact path="/blog/:id" component={BlogPost} id={this.props.id} /> */}
					</Switch>
				</div>
			</Router>
	);
}

export default App;

  // constructor(props) {
  //   super(props);
  //   this.state = {};

  //   ReactGA.initialize("UA-110570651-1");
  //   ReactGA.pageview(window.location.pathname);
  // }

