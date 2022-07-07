/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import Footer from "../components/footer";
import BlogNav from "../components/blogNavigation";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import { getAPIData } from '../utilities/apiRequests'; 

export default function BlogPost(){
  let { id } = useParams();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    getAPIData("/blog/" + id, (response) => setBlogPost(response.data));
  });

  return (
    <div className="App">
      <ToastContainer />
      <BlogNav />
      <section id="blog" aria-label={"Blog Post: " + blogPost.title}>
          <h2>{blogPost?.title}</h2>
          <p className="info">
            {new moment.unix(blogPost?.date?._seconds).format("MMM YYYY")}
            &nbsp;&bull;&nbsp;
            {blogPost?.tags?.join(', ')}  
          </p>
          <div className="blog-post">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {blogPost.post}
            </ReactMarkdown>
          </div>
      </section>
      <Footer />
    </div>
  );
}
