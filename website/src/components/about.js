import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    const profilepic = "images/profilepic.png";

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Chelsea Houser Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>
                I am a Senior Software Developer with over a decade of
                experience in consulting. I love to learn, play video games,
                brew beer, and shower my pets with lots of love.
              </p>
              <br />
              <p>
                <a href="#contact" className="button">
                  <i className="fa fa-download"></i>Contact Me
                </a>
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
