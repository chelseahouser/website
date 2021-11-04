import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="cobweb" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#blog">
                Blog
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#books">
                Books
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Chelsea Houser</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>
                Senior Software Engineer and Consultant at Rural Sourcing Inc
              </h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <li key="linkedin">
                  <a
                    href="https://www.linkedin.com/in/chelsea-houser/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className={"fa fa-linkedin"}></i>
                  </a>
                </li>
                <li key="github">
                  <a
                    href="https://github.com/chelseahouser"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className={"fa fa-github"}></i>
                  </a>
                </li>
              </ul>
            </Fade>
            <p className="scrolldown">
              <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
              </a>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
