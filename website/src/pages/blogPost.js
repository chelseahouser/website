import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <section id="blog">
            <h2>{this.state.blog.title}</h2>
        </section>
      </div>
    );
  }
}

export default BlogPost;
