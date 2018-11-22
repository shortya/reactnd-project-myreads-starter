import React from 'react'
import Book from './Book';
import { startCase } from 'lodash';

class BookShelf extends React.Component {

  render() {
    const { shelf, books, shelves } = this.props;
    return (
      <div className="app">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{startCase(shelf)}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {Object.keys(books).map(key => 
                (<Book key ={key}
                  shelves={shelves}
                  details={books[key]} />)
                ) 
              } 
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf
