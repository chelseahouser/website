import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/footer";

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {blog: {}, id: this.props.match.params.id};
  }

  error = () => toast.error("Something went wrong.");

  componentWillMount() {
    axios
      .get(API_URL + "/blog/" + this.state.id)
      .then((response) => {
        this.setState({
          blog: response.data,
        });
      })
      .catch(() => {
        this.error();
      });
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
            <li>
              <a href="/blogs">
                Blogs
              </a>
            </li>
          </ul>
        </nav>
        <section id="blog">
            <h2>{this.state.blog.title}</h2>
        </section>
        <Footer />
      </div>
    );
  }
}

export default BlogPost;
