/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { failedToLoadData } from '../utilities/toastMessages';
import Footer from "../components/footer";
import { useParams } from "react-router";
import BlogNav from "../components/blogNavigation";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

function BlogPost(){
  let { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadAsyncData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(API_URL + "/blog/" + id).then(r=>r.json());
      setData(resp);
      setIsLoading(false);
    } catch(e) {
      failedToLoadData();
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadAsyncData();
  }, []);

  if(isLoading) return (    
    <div className="App">
      <ToastContainer />
      <BlogNav />
      <section id="blog">
          <h2>Loading...</h2>
      </section>
      <Footer />
  </div>);
  else return (
    <div className="App">
      <ToastContainer />
      <BlogNav />
      <section id="blog">
          <h2>{data.title}</h2>
          <div className="blog-post">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data.post}
            </ReactMarkdown>
          </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogPost;
