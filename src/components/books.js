import React, { Component } from "react";
import Slide from "react-reveal";
import axios from 'axios';

class Books extends Component {
	state = {
		books: []
	};
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  constructor(props) {
	super(props);

	this.state = {
		books: []
	};
}

  componentWillMount = () => {
	axios
		.get('https://us-central1-chouser-website.cloudfunctions.net/api/allbooks')
		.then((response) => {
			console.log(response.data);
			this.setState({
				books: response.data
			});
		})
		.catch((error) => {
			console.log(error);
			this.setState({ errorMsg: 'Error in retrieving the data' });
		});
};

  buildBookList(book) {
	  return (
        <div key={book.title} href={book.link}>
          <h3>{book.title}</h3>
          <p className="info">
            {book.author} <span>&bull;</span>
          </p>
          <p>{book.description}</p>
        </div>
      );
  }

  render() {
    return (
      <section id="books">
		<div className="row">
			<div className="main-col">
				<h2>Books</h2>
			</div>
		</div>
          <div className="row currentlyReading">
            <div className="three columns header-col">
              <h1>
                <span>Currently Reading</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{this.state.books.map((book) => {
					if(book.currentlyReading) { return this.buildBookList(book); }
				})}</div>
              </div>
            </div>
          </div>

          <div className="row recommended">
            <div className="three columns header-col">
              <h1>
                <span>Recommended</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{this.state.books.map((book) => {
					if(book.recommended) { return this.buildBookList(book); }
				})}</div>
              </div>
            </div>
          </div>

          <div className="row toRead">
            <div className="three columns header-col">
              <h1>
                <span>To Read</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                {/* <div className="twelve columns">{this.state.books.map((book) => {
					if(book.toRead) { return this.buildBookList(book); }
				})}</div> */}
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Books;
