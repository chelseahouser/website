import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";

const Header = React.lazy(() => import("../components/header"));
const Footer = React.lazy(() => import("../components/footer"));
const About = React.lazy(() => import("../components/about"));
const Resume = React.lazy(() => import("../components/resume"));
const Blog = React.lazy(() => import("../components/blog"));
const Books = React.lazy(() => import("../components/books"));
const Contact = React.lazy(() => import("../components/contact"));

const Home = () => (
      <React.Fragment>
        <div className="App">
          <ToastContainer />
          <Suspense fallback={<div>Loading...</div>} >
            <Header />
            <About />
            <Resume />
            <Blog />
            <Books />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </React.Fragment>
);

export default Home;
