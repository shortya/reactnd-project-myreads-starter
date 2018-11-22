import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
// import BookSearch from './BookSearch';
import DisplayShelves from './DisplayShelves'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  };

  render() {
    const shelves = {
      0: "currentlyReading",
      1: "wantToRead",
      2: "read"
    };
    return (
      <div className="app">
        <DisplayShelves shelves={shelves} books={this.state.books} />
        {/* <BookSearch/> */}
      </div>
    )
  }
}

export default BooksApp
