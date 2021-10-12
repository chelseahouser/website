import React, { Component } from "react";
import Fade from "react-reveal";

class Blog extends Component {
  render() {
    return (
      <section id="blog">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <h2>Blog Posts</h2>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Blog;
