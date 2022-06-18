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

function BlogUnsubscribe(){
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
        .post(API_URL + "/unsubscribe", {
          email: email
        },{
          headers: {
            'X-Firebase-AppCheck': token,
          }
        })
        .catch(() => {
          error();
        });
      document.getElementById("subscribeForm").reset();
      clearForm();
      success();
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
  }
  
  return (
    <div className="App">
      <ToastContainer />
      <BlogNav />
      <section id="subscription" aria-label="Unsubscribe Form">
        <h2>Unsubscribe</h2>
        <h3>Sorry to see you go, but I understand. Please enter your email below to unsubscribe.</h3>
        <div className="main-col">
          <GoogleReCaptcha onVerify={newToken => {if(token == undefined) {setToken(newToken);}}} />
          <form action="" method="post" id="subscribeForm" name="subscribeForm">
            <fieldset>
              <div>
                <input
                  type="email"
                  defaultValue=""
                  id="subscribeEmail"
                  name="subscribeEmail"
                  placeholder="Email (Required)"
                  aria-label="Your Email"
                  onChange={handleChange.bind(this)}
                />
              </div>
              <div>
                <button
                  className="submit"
                  data-action='submit'
                  aria-label="Submit Button"
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

export default BlogUnsubscribe;
