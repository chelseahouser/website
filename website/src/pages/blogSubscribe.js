/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/footer";
import BlogNav from "../components/blogNavigation";
import { ToastContainer } from 'react-toastify';
import axios from "axios";
import { API_URL } from "../config";
import { error, missingRequiredFields, success } from '../utilities/toastMessages';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

function BlogSubscribe(){
  let [email, setEmail] = useState();
  let [token, setToken] = useState();

  const validateSubscribe = () => {
    if (email != null && email != "") {
      return true;
    }
    return false;
  }

  const clearForm = () => {
    setEmail();
  }

  const subscribe = (e) => {
    e.preventDefault();

    if (validateSubscribe()) {
      axios
        .post(API_URL + "/subscribe", {
          email: email
        },{
          headers: {
            'X-Firebase-AppCheck': token,
          }
        })
        .then(() => {
          document.getElementById("subscribeForm").reset();
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
      case "subscribeEmail":
        if (email != value) {
          setEmail(value);
        }
        break;
      default:
        break;
    }
    if (this.state.error) {
      error();
    }
  }
  
  return (
    <div className="App">
      <ToastContainer />
      <BlogNav />
      <section id="subscription">
        <h2>Subscribe</h2>
        <br />
        <h3>Submit your email below to get a notification when a new blog is posted.</h3>
        <div className="main-col">
          <GoogleReCaptcha onVerify={token => {setToken(token);}} />
          <form action="" method="post" id="subscribeForm" name="subscribeForm">
            <fieldset>
              <div>
                <input
                  type="email"
                  defaultValue=""
                  id="subscribeEmail"
                  name="subscribeEmail"
                  placeholder="Email (Required)"
                  onChange={handleChange.bind(this)}
                />
              </div>
              <div>
                <button
                  className="submit"
                  data-action='submit'
                  onClick={subscribe.bind(this)}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogSubscribe;
