import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import moment from 'moment';
import { failedToLoadData } from '../utilities/toastMessages';
import 'react-toastify/dist/ReactToastify.css';
import { TitleNavigation } from "../utilities/titleNavigation";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "/blogs/3")
      .then((response) => {
        this.setState({
          blogPosts: response.data,
        });
      })
      .catch(() => {
        failedToLoadData();
      });
  }

  buildBlogPost(blog) {
    return (
      <div className="row post" key={blog.blogId}>
        <div className="header-col">
          {TitleNavigation(blog.blogId,blog.title)}
        </div>

        <p className="info">
          {new moment.unix(blog.date._seconds).format("MMM YYYY")}
          &nbsp;&bull;&nbsp;
          {blog.tags ? blog.tags.join(', ') : ""}  
        </p>
        <p>{blog.description}</p>
      </div>
    );
  }
  render() {
    return (
      <section id="blog" className={"component"}>
        {this.state.blogPosts.map((blog) => {
          return this.buildBlogPost(blog);
        })}
        <div className="row post">      
            <div className="header-col">
              <h3><a href="/blogs">Read More</a></h3>
            </div>
        </div>
      </section>
    );
  }
}

export default Blog;
