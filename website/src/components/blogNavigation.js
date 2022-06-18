import React from "react";

function BlogNav(){
  return (
      <nav id="nav-wrap" aria-label="Blog Navigation">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li>
            <a href="/#home" aria-label="Home Page Link" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="/blogs" aria-label="All Blogs List Link" title="All Blog Posts">
              Blogs
            </a>
          </li>
          <li>
            <a href="/subscribe" aria-label="Subscription Form Link" title="Email Subscription">
              Subscribe
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default BlogNav;
