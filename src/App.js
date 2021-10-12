import React, {Component} from 'react';
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import About from './components/about';
import Resume from './components/resume';
import Blog from './components/blog';
import Books from './components/books';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    // $.ajax({
    //   url: "./resumeData.json",
    //   dataType: "json",
    //   cache: false,
    //   success: function(data) {
    //     this.setState({ resumeData: data });
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.log(err);
    //     alert(err);
    //   }
    // });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Blog data={this.state.resumeData.portfolio} />
        <Books data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;