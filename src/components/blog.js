import React, { Component } from "react";
import Fade from "react-reveal";
import axios from 'axios';

class Blog extends Component {
	state = {
		blogPosts: []
	};

	constructor(props) {
		super(props);
	
		this.state = {
			blogPosts: []
		};
	}
	
	  componentWillMount = () => {
		// axios
		// 	.get('https://us-central1-chouser-website.cloudfunctions.net/api/blogposts')
		// 	.then((response) => {
		// 		console.log(response.data);
		// 		this.setState({
		// 			blogPosts: response.data
		// 		});
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 		this.setState({ errorMsg: 'Error in retrieving the data' });
		// 	});
		this.setState({
			blogPosts: [{"blogId":"GO53ymwj4V4MIVRFpOza","title":"Automated Integration Testing: From Controller to Postman"}]
		})
	};

	buildBlogPost(blog) {
		return (
			<div className="row currentlyReading">
				<div className="header-col">
					<h1>
						<span>{blog.title}</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<div className="row item">
						<div className="twelve columns"></div>
					</div>
				</div>
			</div>
		);
	}
  render() {
    return (
      <section id="blog">
          <div className="row">
            <div className="main-col">
              <h2>Blog Posts</h2>
            </div>
          </div>
		  {this.state.blogPosts.map((blog) => { return this.buildBlogPost(blog);})}
      </section>
    );
  }
}

export default Blog;
