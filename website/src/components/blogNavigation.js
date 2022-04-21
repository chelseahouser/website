import React from "react";

function BlogNav(){
  return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li>
            <a href="/#home">
              Home
            </a>
          </li>
          <li>
            <a href="/blogs">
              Blogs
            </a>
          </li>
          <li>
            <a href="/subscribe">
              Subscribe
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default BlogNav;
