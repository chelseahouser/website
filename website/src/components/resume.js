import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import { failedToLoadData } from '../utilities/toastMessages';
import 'react-toastify/dist/ReactToastify.css';

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: [],
      skills: [],
      education: [],
      certifications: []
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "/work")
      .then((response) => {
        this.setState({
          work: response.data,
        });
      })
      .catch(() => {
        failedToLoadData();
      });

    axios
      .get(API_URL + "/education")
      .then((response) => {
        this.setState({
          education: response.data,
        });
      })
      .catch(() => {
        failedToLoadData();
      });

      axios
      .get(API_URL + "/skill")
      .then((response) => {
        this.setState({
          skills: response.data,
        });
      })
      .catch(() => {
        failedToLoadData();
      });

      axios
      .get(API_URL + "/certification")
      .then((response) => {
        this.setState({
          certifications: response.data,
        });
      })
      .catch(() => {
        failedToLoadData();
      });
  }

  buildWorkList(work) {
    return (
      <div key={work.companyName}>
        <h3>{work.companyName}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span>{" "}
          <em className="date">
            {new moment.unix(work.startDate._seconds).format("MMM YYYY")} - {work.current? "Current" : new moment.unix(work.endDate._seconds).format("MMM YYYY")}
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
          <em className="date">{ new moment.unix(education.graduation._seconds).format("YYYY") }</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  }

  buildCertificationList(certification) {
    return (
      <div key={certification.name}>
        <h3>{certification.name}</h3>
        <p className="info">
          <em className="date">{ new moment.unix(certification.date._seconds).format("YYYY") }</em>
        </p>
      </div>
    );
  }

  buildSkillList(skills) {
    return skills.forEach(skill => {
      <div key={skill.type}>
        <h3>{skill.type}</h3>
        <p>{skill.name}</p>
      </div>
    });
  }

  render() {
    return (
      <section id="resume">
        <ToastContainer />
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

        {/* <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {this.buildSkillList(this.state.skills)}
              </div>
            </div>
          </div>
        </div> */}

        <div className="row certifications">
          <div className="three columns header-col">
            <h1>
              <span>Certifications</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {this.state.certifications.map((certification) => {
                  return this.buildCertificationList(certification);
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
