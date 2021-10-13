import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
    };
  }

  success = () => toast.success("Message Sent!");
  error = () => toast.error("Something went wrong.");
  missingRequiredFields = () => toast.error("Unable to send message. You are missing required fields.");

  validateMessage(model) {
    if (model.name != null && model.name != "") {
      if (model.email != null && model.email != "") {
        if (model.message != null && model.message != "") {
          return true;
        }
      }
    }
    return false;
  }

  clearForm() {

  }

  sendContactEmail(e) {
    e.preventDefault();
    if (this.validateMessage(this.state)) {
      axios
        .post(API_URL + "/contact", this.state)
        .then((response) => {
          console.log(response.data);
          document.getElementById("contactForm").reset();
          this.setState({
            email: "",
            name: "",
            message: "",
            subject: ""
          });
          this.success();
        })
        .catch((error) => {
          console.error(error);
          this.error();
        });
    } else {
      this.missingRequiredFields();
    }
  }

  handleChange(e) {
    var value = e.target.value;
    switch (e.target.id) {
      case "contactEmail":
        if (this.state.email != value) {
          this.setState({ email: value });
        }
        break;
      case "contactName":
        if (this.state.name != value) {
          this.setState({ name: value });
        }
        break;
      case "contactSubject":
        if (this.state.subject != value) {
          this.setState({ subject: value });
        }
        break;
      case "contactMessage":
        if (this.state.message != value) {
          this.setState({ message: value });
        }
        break;
      default:
        break;
    }
    if (this.state.error) {
      this.error();
    }
  }

  render() {
    return (
      <section id="contact">
        <ToastContainer />
        <div className="row">
          <div className="main-col">
            <h2>Send me a message.</h2>
            <br />
          </div>
          <div className="main-col">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={this.handleChange.bind(this)}
                  ></textarea>
                </div>

                <div>
                  <button
                    className="submit"
                    onClick={this.sendContactEmail.bind(this)}
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
}

export default Contact;
