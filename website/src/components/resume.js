import React, { useEffect, useState } from "react";
import moment from 'moment';
import { getAPIData } from "../utilities/apiRequests";

export default function Resume() {
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    getAPIData("/work", (response) => setWork(response.data))
  }, [])

  useEffect(() => {
    getAPIData("/education", (response) => setEducation(response.data))
  }, [])

  useEffect(() => {
    getAPIData("/certification", (response) => setCertifications(response.data))
  }, [])

  function buildWorkList(work) {
    return (
      <div key={work.companyName}>
        <h2>{work.companyName}</h2>
        <p className="info">
          {work.title}
          &nbsp;&bull;&nbsp;
          {new moment.unix(work.startDate._seconds).format("MMM YYYY")} - {work.current? "Current" : new moment.unix(work.endDate._seconds).format("MMM YYYY")}
        </p>
        <p>{work.description}</p>
      </div>
    );
  }

  function buildEducationList(education) {
    return (
      <div key={education.school}>
        <h2>{education.school}</h2>
        <p className="info">
          {education.degree}
          &nbsp;&bull;&nbsp;
          <span className="date">{ new moment.unix(education.graduation._seconds).format("YYYY") }</span>
        </p>
        <p>{education.description}</p>
      </div>
    );
  }

  function buildCertificationList(certification) {
    return (
      <div key={certification.name}>
        <h2>{certification.name}</h2>
        <p className="info">
          <em className="date">{ new moment.unix(certification.date._seconds).format("YYYY") }</em>
        </p>
      </div>
    );
  }

  return (
    <section id="resume" aria-label="Resume Section">
      <div className="row work" aria-label="Work Experience">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {work.map((work) => {
            return buildWorkList(work);
          })}
        </div>
      </div>

      <div className="row education" aria-label="Education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education.map((education) => {
                return buildEducationList(education);
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row certifications" aria-label="Certifications">
        <div className="three columns header-col">
          <h1>
            <span>Certifications</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {certifications.map((certification) => {
                return buildCertificationList(certification);
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
