import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import moment from 'moment';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: [],
    };
  }

  componentWillMount() {
    axios
      .get(API_URL + "/blogs")
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
      <div className="row post">
        <div className="header-col">
          <h1>
            <span>{blog.title}</span>
          </h1>
        </div>

        <p className="info">
          {new moment.unix(blog.date._seconds).format("MMM YYYY")}
          <span>&bull;</span>{" "}
          <em className="date">
            {blog.tags.join(', ')}  
          </em>
        </p>
        <p>{blog.description}</p>
      </div>
    );
  }
  render() {
    return (
      <section id="blog">
        {this.state.blogPosts.map((blog) => {
          return this.buildBlogPost(blog);
        })}
      </section>
    );
  }
}

export default Blog;
