import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { failedToLoadData } from '../utilities/toastMessages';
import Footer from "../components/footer";
import { TitleNavigation } from "../utilities/titleNavigation";
import BlogNav from "../components/blogNavigation";

function BlogList() {
  const [blogPosts, setBlogPosts] = useState();

  useEffect(() => {
    axios
      .get(API_URL + "/blogs")
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch(() => {
        failedToLoadData();
      });
  }, []);

  const buildBlogPost = (blog) => {
    return (
      <div className="row post">
        <div className="header-col">
          {TitleNavigation(blog.blogId, blog.title)}
        </div>

        <p className="info">
          {new moment.unix(blog.date._seconds).format("MMM YYYY")}
          <span>&bull;</span>{" "}
          <em className="date">
            {blog.tags.join(', ')}  
          </em>
        </p>
        <p>{blog.description}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <ToastContainer />
      <BlogNav />
      <section id="blog">
        {blogPosts ? blogPosts.map((blog) => {
          return buildBlogPost(blog);
        }) : ""}   
      </section>
      <Footer />
    </div>
  );
}
  
export default BlogList;
