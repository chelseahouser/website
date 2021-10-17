import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
                <li key="linkedin">
                  <a
                    href="https://www.linkedin.com/in/chelsea-houser-5884b765"
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

              <ul className="copyright">
                <li>
                  &copy; Copyright {new Date().getFullYear()} ChelseaHouser
                </li>
              </ul>
            </div>
          </Fade>

          {/* <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
