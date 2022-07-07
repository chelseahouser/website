/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/footer";
import BlogNav from "../components/blogNavigation";
import { ToastContainer } from 'react-toastify';
import { missingRequiredFields, success } from '../utilities/toastMessages';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { postAPIData } from "../utilities/apiRequests";

export default function BlogSubscribe(){
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
      postAPIData("/subscribe", {
        email
      }, token,
      () => {
        document.getElementById("subscribeForm").reset();
        clearForm();
        success();
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
  }
  
  return (
    <div className="App">
      <ToastContainer />
      <BlogNav />
      <section id="subscription" aria-label="Email Subscription Form">
        <h2>Subscribe</h2>
        <h3>Submit your email below to get a notification when a new blog is posted.</h3>
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
                  aria-label="Your Email Input"
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
