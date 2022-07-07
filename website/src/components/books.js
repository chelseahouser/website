import React, { useEffect, useState } from "react";
import { getAPIData } from "../utilities/apiRequests";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAPIData("/book", (response) => setBooks(response.data))
  }, [])

  function buildBookList(book) {
    return (
      <div key={book.title}>
        <h3 onClick={()=> window.open(book.link, "_blank")} title={"Buy " + book.title}>{book.title}</h3>
        <p className="info">
          {book.author}
          &nbsp;&bull;&nbsp;
          <a href={book.link} >Link</a>  
          <br />
          {book.description}
        </p>
      </div>
    );
  }

  return (
    <section id="books" aria-label="Reading List">
      <div className="row localStore">
        <div className="three columns header-col">
          <h1>
            <span>Shop Local</span>
          </h1>
        </div>

        <div className="nine columns main-col" aria-label="Bookstore Link Information">
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
      <div className="row currentlyReading" aria-label="Currently Reading">
        <div className="three columns header-col">
          <h1>
            <span>Currently Reading</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {books.map((book) => {
                if (book.currentlyReading) {
                  return buildBookList(book);
                }
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row recommended" aria-label="Recommended Books">
        <div className="three columns header-col">
          <h1>
            <span>Recommended</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {books.map((book) => {
                if (book.recommended) {
                  return buildBookList(book);
                }
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row toRead" aria-label="Books To Read">
        <div className="three columns header-col">
          <h1>
            <span>To Read</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {books.map((book) => {
                if (book.toRead) {
                  return buildBookList(book);
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
