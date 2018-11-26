import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch';
import DisplayShelves from './DisplayShelves'
import { Route } from 'react-router-dom'

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

  moveBook = (newShelf, book) => {
    BooksAPI.update(book, newShelf)
    //1. take a copy of state
    const books = [...this.state.books];
    //2. filter to find the book and change value
    books.filter((b) => {
      return b.id === book.id ? b.shelf = newShelf : null
    })
    //3. Call setState to update our state object
    this.setState([books]);
  };

  render() {

    const shelves = {
      0: "currentlyReading",
      1: "wantToRead",
      2: "read"
    };

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <DisplayShelves
            shelves={shelves}
            moveBook={this.moveBook}
            books={this.state.books}
             />
        )}/>
        <Route path='/search' render={() => (
          <BookSearch
          shelves={shelves}
          moveBook={this.moveBook}
          books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
