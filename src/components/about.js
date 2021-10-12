import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    const name = "Chelsea Houser";
    const profilepic = "images/profilepic.png";
    const bio = "Bio info goes here";
    const email = "ChelseaRHouser@gmail.com";
    const resumeDownload = "";

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

              <p>I am a Senior Software Developer with over a decade of experience in consulting. I love to learn, play video games, brew beer, and shower my pets with lots of love.</p>
              <div className="row">
                <div className="columns contact-details">
				  <p>
                    <a href="#contact" className="button">
                      <i className="fa fa-download"></i>Contact Me
                    </a>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
