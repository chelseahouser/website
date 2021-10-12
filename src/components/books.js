import React, { Component } from "react";
import Fade from "react-reveal";

class Books extends Component {
  render() {
    return (
      <section id="books">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <h2>Books</h2>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Books;
