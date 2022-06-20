import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    return (
      <footer aria-label="footer">
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links" aria-label="Social Media Links">
                <li key="linkedin">
                  <a
                    href="https://www.linkedin.com/in/chelsea-houser/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn Link"
                    title="LinkedIn"
                  >
                    <i className={"fa fa-linkedin"}></i>
                  </a>
                </li>
                <li key="github">
                  <a
                    href="https://github.com/chelseahouser"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub Link"
                    title="GitHub"
                  >
                    <i className={"fa fa-github"}></i>
                  </a>
                </li>
              </ul>

              <ul className="copyright" aria-label="Copyright">
                <li>
                  &copy; Copyright {new Date().getFullYear()} Chelsea Houser
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default Footer;
