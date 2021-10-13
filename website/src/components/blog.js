import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: [],
    };
  }

  componentWillMount() {
    axios
      .get(API_URL + "/blog")
      .then((response) => {
        console.log(response.data);
        this.setState({
          blogPosts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  }

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
            <div className="twelve columns">{blog.post[0]}</div>
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
        {this.state.blogPosts.map((blog) => {
          return this.buildBlogPost(blog);
        })}
      </section>
    );
  }
}

export default Blog;
