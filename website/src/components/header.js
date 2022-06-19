import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    return (
      <header id="home" aria-label="Home">
        <ParticlesBg type="cobweb" bg={true} aria-label="Background Image"/>

        <nav id="nav-wrap" aria-label="Page Navigation">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav" role="navigation">
            <li className="current">
              <a className="smoothscroll" href="#home" title="Home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about" title="About Me">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume" title="My Resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#blog" title="My Blog">
                Blog
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#books" title="My Reading List">
                Books
              </a>
            </li>

            <li>
              <a 
              className="smoothscroll" 
              href="#contact" 
              title="Contact Me"
              aria-label="Contact Button">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner" aria-label="Title Page">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline" aria-label="Chelsea Houser">Chelsea Houser</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h2>
                Senior Software Engineer and Consultant at Rural Sourcing Inc
              </h2>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <li key="linkedin">
                  <a
                    href="https://www.linkedin.com/in/chelsea-houser/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="LinkedIn"
                    aria-label="LinkedIn Link"
                  >
                    <i className={"fa fa-linkedin"}></i>
                  </a>
                </li>
                <li key="github">
                  <a
                    href="https://github.com/chelseahouser"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="GitHub"
                    aria-label="GitHub Link"
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
