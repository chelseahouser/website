import React, { useEffect, useState } from "react";
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/footer";
import { TitleNavigation } from "../utilities/titleNavigation";
import BlogNav from "../components/blogNavigation";
import { getAPIData } from "../utilities/apiRequests";

function BlogList() {
  const [blogPosts, setBlogPosts] = useState();

  useEffect(() => {
    getAPIData("/blogs", (response) => setBlogPosts(response.data));
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
            {blog.tags? blog.tags.join(', ') : ""}  
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
      <section id="blog" aria-label="List of Blog Posts">
        {blogPosts ? blogPosts.map((blog) => {
          return buildBlogPost(blog);
        }) : ""}   
      </section>
      <Footer />
    </div>
  );
}
  
export default BlogList;
