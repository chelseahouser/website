import React, {Component} from 'react';
import ReactGA from "react-ga";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import About from './components/about';
import Resume from './components/resume';
import Blog from './components/blog';
import Books from './components/books';
import Contact from './components/contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Blog />
        <Books />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;