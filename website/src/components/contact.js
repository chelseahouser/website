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
    var token = window.grecaptcha.ready(function() {
      return window.grecaptcha.execute('6LczSNYcAAAAAPYxNRzll2HvZ5RIJLBIRU8OLN6w', {action: 'submit'}).then(function(token) {
        return token;
      });
    });

    this.setState({token: token});
    if (this.validateMessage(this.state)) {
      axios
        .post(API_URL + "/contact", this.state)
        .then((response) => {
          document.getElementById("contactForm").reset();
          this.setState({
            email: "",
            name: "",
            message: "",
            subject: "",
            token: ""
          });
          this.success();
        })
        .catch((error) => {
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
            <h2>Send me a message</h2>
            <br />
          </div>
          <div className="main-col">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <input
                    type="text"
                    defaultValue=""
                    id="contactName"
                    name="contactName"
                    placeholder="Name (Required)"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    defaultValue=""
                    id="contactEmail"
                    name="contactEmail"
                    placeholder="Email (Required)"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    defaultValue=""
                    id="contactSubject"
                    name="contactSubject"
                    placeholder="Subject"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>

                <div>
                  <textarea
                    cols="50"
                    rows="10"
                    id="contactMessage"
                    name="contactMessage"
                    placeholder="Message (Required)"
                    onChange={this.handleChange.bind(this)}
                  ></textarea>
                </div>

                <div>
                  <button
                    className="submit"
                    data-action='submit'
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
