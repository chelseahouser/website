/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import 'react-toastify/dist/ReactToastify.css';
import { failedToLoadData } from '../utilities/toastMessages';
import Footer from "../components/footer";
import { useParams } from "react-router";
import moment from 'moment';
import BlogNav from "../components/blogNavigation";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import { ToastContainer } from 'react-toastify';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(isLoading) return (    
    <div className="App">
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
          <p className="info">
          {new moment.unix(data.date._seconds).format("MMM YYYY")}
          <span>&bull;</span>{" "}
          <em className="date">
            {data.tags? data.tags.join(', ') : ""}  
          </em>
        </p>
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
