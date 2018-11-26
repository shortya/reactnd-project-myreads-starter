import React from 'react';
// import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';


class DisplayShelves extends React.Component {

  render() {
    const { shelves, books, moveBook} = this.props;

    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ul>
                  {Object.keys(shelves).map(key => 
                    <BookShelf 
                      key ={key}
                      allBooks={books}
                      books={books.filter((b) => {
                        return b.shelf === shelves[key]
                      })}
                      shelf={shelves[key]}
                      shelves={shelves}
                      moveBook={moveBook}
                       />)}
                </ul>                
              </div>
            </div>
            <Link className="open-search" to='/search' >
              <button>Add a book</button>
            </Link> 
          </div>
      </div>
    )
  }
}

export default DisplayShelves
