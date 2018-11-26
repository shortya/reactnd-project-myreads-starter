import React from 'react'
// import * as BooksAPI from './BooksAPI'
import ShelfSelector from './ShelfSelector';

class Book extends React.Component {

  render() {
    const { book, allBooks, shelves, moveBook } = this.props;
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" 
              style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}
              >
              </div>
              <ShelfSelector allBooks={allBooks} shelves= {shelves} book={book} moveBook={moveBook}  />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
    )
  }
}

export default Book
