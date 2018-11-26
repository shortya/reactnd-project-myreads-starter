import React from 'react'
import Book from './Book';
import { startCase } from 'lodash';

class BookShelf extends React.Component {

  render() {
    const { shelf, books, allBooks, shelves, moveBook } = this.props;
    return (
      <div className="app">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{startCase(shelf)}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {Object.keys(books).map(key => 
                (<Book key ={key}
                  shelves={shelves}
                  book={books[key]}
                  allBooks={allBooks}
                  img={books[key].imageLinks ? books[key].imageLinks.smallThumbnail : 'https://www.placecage.com/128/193' }
                  moveBook={moveBook}
                   />)
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
