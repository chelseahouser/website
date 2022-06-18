import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import 'react-toastify/dist/ReactToastify.css';
import { error, missingRequiredFields, success } from '../utilities/toastMessages';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

function Contact() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [message, setMessage] = useState();
  let [subject, setSubject] = useState();
  let [token, setToken] = useState();

  const validateMessage = () => {
    if (name != null && name != "") {
      if (email != null && email != "") {
        if (message != null && message != "") {
          return true;
        }
      }
    }
    return false;
  }

  const clearForm = () => {
    setName();
    setEmail();
    setMessage();
    setSubject();
  }

  const sendContactEmail = (e) => {
    e.preventDefault();

    if (validateMessage()) {
      axios
        .post(API_URL + "/contact", {
          name: name,
          subject: subject,
          message: message,
          email: email
        },{
          headers: {
            'X-Firebase-AppCheck': token,
          }
        })
        .then(() => {
          document.getElementById("contactForm").reset();
          clearForm();
          success();
        })
        .catch(() => {
          error();
        });
    } else {
      missingRequiredFields();
    }
  }

  const handleChange = (e) => {
    var value = e.target.value;
    switch (e.target.id) {
      case "contactEmail":
        if (email != value) {
          setEmail(value);
        }
        break;
      case "contactName":
        if (name != value) {
          setName(value);
        }
        break;
      case "contactSubject":
        if (subject != value) {
          setSubject(value);
        }
        break;
      case "contactMessage":
        if (message != value) {
          setMessage(value);
        }
        break;
      default:
        break;
    }
  }

  return (
    <section id="contact" aria-label="Contact Me Form">
      <div className="row">
        <div className="main-col">
          <h2>Send me a message</h2>
        </div>
        <div className="main-col">
          <GoogleReCaptcha onVerify={newToken => {if(token == undefined) {setToken(newToken);}}} />
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <input
                  type="text"
                  defaultValue=""
                  id="contactName"
                  name="contactName"
                  placeholder="Name (Required)"
                  aria-label="Your Name Input"
                  onChange={handleChange.bind(this)}
                />
              </div>

              <div>
                <input
                  type="email"
                  defaultValue=""
                  id="contactEmail"
                  name="contactEmail"
                  placeholder="Email (Required)"
                  aria-label="Your Email Input"
                  onChange={handleChange.bind(this)}
                />
              </div>

              <div>
                <input
                  type="text"
                  defaultValue=""
                  id="contactSubject"
                  name="contactSubject"
                  placeholder="Subject"
                  aria-label="Message Subject Input"
                  onChange={handleChange.bind(this)}
                />
              </div>

              <div>
                <textarea
                  cols="50"
                  rows="10"
                  id="contactMessage"
                  name="contactMessage"
                  placeholder="Message (Required)"
                  aria-label="Message Input"
                  onChange={handleChange.bind(this)}
                ></textarea>
              </div>

              <div>
                <button
                  className="submit"
                  data-action='submit'
                  aria-label="Contact Form Submit Button"
                  onClick={sendContactEmail.bind(this)}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
