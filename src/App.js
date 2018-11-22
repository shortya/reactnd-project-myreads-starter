import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch';
import DisplayShelves from './DisplayShelves';
import { map, uniq, startCase, toPairs, fromPairs } from 'lodash';

class BooksApp extends React.Component {
  state = {
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      let shelves = [...uniq((books.map(e => 
        e.shelf,       
        )))];
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
