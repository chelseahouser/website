import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import moment from "react-moment";

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: [],
      skills: [],
      education: [],
    };
  }

  componentWillMount() {
    axios
      .get(API_URL + "/work")
      .then((response) => {
        console.log(response.data);
        this.setState({
          work: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });

    axios
      .get(API_URL + "/education")
      .then((response) => {
        console.log(response.data);
        this.setState({
          education: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  }

  buildWorkList(work) {
    if (work.current) {
      work.endDate = new moment();
    }
    return (
      <div key={work.companyName}>
        <h3>{work.companyName}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span>{" "}
          <em className="date">
            <moment from={work.startDate.seconds}>
              {work.endDate.seconds}
            </moment>
          </em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  }

  buildEducationList(education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  }

  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {this.state.education.map((education) => {
                  return this.buildEducationList(education);
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {this.state.work.map((work) => {
              return this.buildWorkList(work);
            })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p></p>

            <ul className="skills"></ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
