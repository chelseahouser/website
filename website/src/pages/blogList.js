import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/footer";
import {withRouter} from 'react-router-dom';

class BlogList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        blogPosts: []
      };
    }

    error = () => toast.error("Something went wrong.");

    componentWillMount() {
      axios
        .get(API_URL + "/blogs")
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
        <div className="App">
          <ToastContainer />
          <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <a href="/#home">
                Home
              </a>
            </li>

          </ul>
        </nav>
          <section id="blog">
            {this.state.blogPosts.map((blog) => {
              return this.buildBlogPost(blog);
            })}   
         </section>
         <Footer />
        </div>
      );
    }
  }
  
  export default withRouter(BlogList);
