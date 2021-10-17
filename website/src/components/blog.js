import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {withRouter} from 'react-router-dom';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: [],
    };
  }

  error = () => toast.error("Something went wrong.");

  componentWillMount() {
    axios
      .get(API_URL + "/blogs/3")
      .then((response) => {
        this.setState({
          blogPosts: response.data,
        });
      })
      .catch(() => {
        this.error();
      });
  }

  buildBlogPost(blog) {
    return (
      <div className="row post">
        <div className="header-col">
          <h3 onClick={()=> this.props.history.push("/blog/" + blog.blogId)}>{blog.title}</h3>
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
          <ToastContainer />
        {this.state.blogPosts.map((blog) => {
          return this.buildBlogPost(blog);
        })}
        <div className="row post">      
            <div className="header-col">
              <h3 onClick={()=> this.props.history.push("/blogs")}>See More</h3>
            </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Blog);
