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
                I am a full-stack developer with over a decade of experience working in 
                consulting. My work has exposed me to a variety of projects, industries, 
                and technologies. Growing and thriving in this fast-paced environment, 
                I am constantly putting my skills to the test, solving problems for my 
                clients. In my time working, I have developed projects to identify disease 
                outbreaks in Africa, predict the next oil boom in Texas, and connect 
                people to auto body shops across the world. I enjoy the challenge of new 
                problems to solve and new technologies to conquer. I am often spoiling my 
                pets, brewing beer, and running a guild in Final Fantasy XIV in my free time.
              </p>
              <p>
                <a href="#contact" className="button">Contact Me</a>
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
