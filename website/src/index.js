import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
  Routes,
	Route} from "react-router-dom";
import Home from "./pages/home";
import BlogList from "./pages/blogList";
import BlogPost from "./pages/blogPost";
import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route  exact path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  </Router>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
