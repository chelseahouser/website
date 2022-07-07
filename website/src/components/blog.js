import React, { useEffect, useState } from "react";
import moment from 'moment';
import { TitleNavigation } from "../utilities/titleNavigation";
import { getAPIData } from "../utilities/apiRequests";

export default function Blog() {
  const [ blogPosts, setBlogPosts ] = useState([]);

  useEffect(() => {
    getAPIData("/blogs/3", (response) => setBlogPosts(response.data));
  })

  function buildBlogPost(blog) {
    return (
      <div className="row post" key={blog.blogId}>
        <div className="header-col">
          {TitleNavigation(blog.blogId,blog.title)}
        </div>

        <p className="info">
          {new moment.unix(blog.date._seconds).format("MMM YYYY")}
          &nbsp;&bull;&nbsp;
          {blog.tags ? blog.tags.join(', ') : ""}  
        </p>
        <p>{blog.description}</p>
      </div>
    );
  }

  return (
    <section id="blog" className={"component"} aria-label="Blog Posts">
      {blogPosts.map((blog) => buildBlogPost(blog))}
      <div className="row post" aria-label="More blog posts page link">      
          <div className="header-col">
            <h3><a href="/blogs" aria-label="View All Blog Posts" title="View All Blog Posts">Read More</a></h3>
          </div>
      </div>
    </section>
  );
}