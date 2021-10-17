import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentWillMount() {
    axios
      .get(API_URL + "/book")
      .then((response) => {
        console.log(response.data);
        this.setState({
          books: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  }

  buildBookList(book) {
    return (
      <div key={book.title}>
        <h3 onClick={()=> window.open(book.link, "_blank")}>{book.title}</h3>
        <p className="info">
          {book.author}          
          <span>&bull;</span>{" "}
          <em className="date">
            <a href={book.link} >Link</a>  
          </em><br />{book.description}</p>
      </div>
    );
  }

  render() {
    return (
      <section id="books">
        <div className="row localStore">
          <div className="three columns header-col">
            <h1>
              <span>Shop Local</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
              <div key="localStore">
                <h3 onClick={()=> window.open("https://bookstorelink.com/", "_blank")}>Bookstore Link</h3>
                <p className="info">Now more than ever our local independent bookstores can 
                use our help. <a href="https://bookstorelink.com/">Bookstore Link</a> connects 
                people to local stores to bring money back into their community. These are not affiliate links,
                shop local and support your community bookstores.</p>
              </div>
              </div>
            </div>
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
              <div className="twelve columns">
                {this.state.books.map((book) => {
                  if (book.currentlyReading) {
                    return this.buildBookList(book);
                  }
                })}
              </div>
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
              <div className="twelve columns">
                {this.state.books.map((book) => {
                  if (book.recommended) {
                    return this.buildBookList(book);
                  }
                })}
              </div>
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
              <div className="twelve columns">
                {this.state.books.map((book) => {
                  if (book.toRead) {
                    return this.buildBookList(book);
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Books;
