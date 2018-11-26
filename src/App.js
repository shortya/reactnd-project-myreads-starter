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
      console.log(books)
    })
  };

  searchList = (query) => {
    BooksAPI.search(query)
  }

  moveBook = (newShelf, book) => {
    console.log(book)
    BooksAPI.update(book, newShelf)
    const old = {id: "nggnmAEACAAJ"}
    BooksAPI.update(old, 'read')
    //1. take a copy of state
    const books = [...this.state.books];
    console.log(books)
    //2. filter to find the book and change value
    books.filter((b) => {
      return b.id === book.id ? b.shelf = newShelf : null
    })
    //3. Call setState to update our state object
    this.setState([books]);
  };

  render() {

    const search = BooksAPI.search('li');

    console.log('search', search)

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
          searchList={this.searchList}
          books={this.state.books}
          />
        )}/>
      </div>

    )
  }
}

export default BooksApp
