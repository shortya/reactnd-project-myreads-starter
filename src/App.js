import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch';
import DisplayShelves from './DisplayShelves';

class BooksApp extends React.Component {
  state = {
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      let shelves =[...new Set(books.map(shelf => shelf.shelf))]

      this.setState(() => ({
        books,
        shelves
      }))
    })
  };
  
;

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <DisplayShelves/>
        {/* <BookSearch/> */}
      </div>
    )
  }
}

export default BooksApp
